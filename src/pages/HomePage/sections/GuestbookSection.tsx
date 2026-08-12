import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Send, MessageCircle, User, Trash2, LogIn } from 'lucide-react';
import { scopedStorage } from '@lark-apaas/client-toolkit-lite';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MOCK_GUESTBOOK_MESSAGES,
  GUESTBOOK_STORAGE_KEY,
  type IGuestbookMessage,
} from '@/data/guestbook';
import { useAuth } from '@/contexts/AuthContext';

export default function GuestbookSection() {
  const [messages, setMessages] = useState<IGuestbookMessage[]>([]);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [parent] = useAutoAnimate({ duration: 250 });
  const listRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, isAdmin, authInfo } = useAuth();
  const navigate = useNavigate();

  // 初始化：合并 mock + localStorage 中的用户留言
  useEffect(() => {
    try {
      const stored = scopedStorage.getItem(GUESTBOOK_STORAGE_KEY);
      if (stored) {
        const userMessages: IGuestbookMessage[] = JSON.parse(stored);
        const merged = [...userMessages, ...MOCK_GUESTBOOK_MESSAGES].sort(
          (a, b) => b.timestamp - a.timestamp
        );
        setMessages(merged);
      } else {
        setMessages([...MOCK_GUESTBOOK_MESSAGES]);
      }
    } catch {
      setMessages([...MOCK_GUESTBOOK_MESSAGES]);
    }
  }, []);

  // 登录后自动把用户名填到昵称
  useEffect(() => {
    if (isLoggedIn && authInfo && !nickname) {
      setNickname(authInfo.username);
    }
  }, [isLoggedIn, authInfo, nickname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname + '#guestbook' } });
      return;
    }

    if (!nickname.trim() || !content.trim()) {
      toast.error('昵称和内容不能为空');
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 300));

    const newMsg: IGuestbookMessage = {
      id: `user-${Date.now()}`,
      nickname: nickname.trim(),
      content: content.trim(),
      timestamp: Date.now(),
      source: 'user',
      author: authInfo?.username,
    };

    setMessages((prev) => [newMsg, ...prev]);

    try {
      const stored = scopedStorage.getItem(GUESTBOOK_STORAGE_KEY);
      const userMsgs: IGuestbookMessage[] = stored ? JSON.parse(stored) : [];
      userMsgs.unshift(newMsg);
      scopedStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(userMsgs));
    } catch {
      // ignore
    }

    setContent('');
    setIsSubmitting(false);
    toast.success('留言发布成功！');
  };

  const handleDelete = (id: string) => {
    if (!isAdmin) return;

    setMessages((prev) => prev.filter((m) => m.id !== id));

    // 同步 localStorage
    try {
      const stored = scopedStorage.getItem(GUESTBOOK_STORAGE_KEY);
      if (stored) {
        const userMsgs: IGuestbookMessage[] = JSON.parse(stored).filter(
          (m: IGuestbookMessage) => m.id !== id
        );
        scopedStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(userMsgs));
      }
    } catch {
      // ignore
    }

    toast.success('留言已删除');
  };

  const isMyMessage = (msg: IGuestbookMessage) => {
    return isLoggedIn && authInfo && msg.author === authInfo.username;
  };

  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => b.timestamp - a.timestamp),
    [messages]
  );

  const goToLogin = () => {
    navigate('/login', { state: { from: location.pathname + '#guestbook' } });
  };

  return (
    <section id="guestbook" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Guestbook
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">留言板</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            留下你的心里话，让青春的记忆在这里永驻
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 留言表单 - 左侧 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`p-6 rounded-2xl border shadow-sm sticky top-24 transition-all ${
                isLoggedIn
                  ? 'bg-gradient-to-br from-primary/5 via-card to-accent/5 border-border/50'
                  : 'bg-muted/40 border-border/40 opacity-80'
              }`}
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Send className="size-5 text-primary" />
                发表留言
                {!isLoggedIn && (
                  <Badge variant="secondary" className="ml-auto text-xs">
                    需登录
                  </Badge>
                )}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={isLoggedIn ? '你的昵称' : '登录后即可发表留言'}
                    className={`pl-9 bg-background ${!isLoggedIn ? 'cursor-not-allowed opacity-60' : ''}`}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    disabled={!isLoggedIn}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={isLoggedIn ? '写下你想说的话...' : '登录后即可发表留言'}
                    className={`bg-background min-h-[120px] resize-none ${!isLoggedIn ? 'cursor-not-allowed opacity-60' : ''}`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    disabled={!isLoggedIn}
                  />
                </div>
                {isLoggedIn ? (
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    <Send className="size-4 mr-2" />
                    发布留言
                  </Button>
                ) : (
                  <Button
                    type="button"
                    className="w-full"
                    onClick={goToLogin}
                  >
                    <LogIn className="size-4 mr-2" />
                    登录后留言
                  </Button>
                )}
              </form>
            </div>
          </motion.div>

          {/* 留言列表 - 右侧 2/3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="size-5 text-primary" />
              <span className="font-semibold text-foreground">全部留言</span>
              <span className="text-xs text-muted-foreground">
                （{sortedMessages.length}条）
              </span>
              {isAdmin && (
                <Badge variant="outline" className="ml-auto text-xs">
                  管理员模式
                </Badge>
              )}
            </div>

            <div
              ref={parent}
              className="space-y-3 max-h-[600px] overflow-y-auto pr-2"
            >
              <AnimatePresence initial={false}>
                {sortedMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    layout
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, scale: 0.95, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-xl border shadow-sm group ${
                      msg.source === 'user'
                        ? 'bg-primary/5 border-primary/20'
                        : 'bg-card border-border/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="size-9 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-semibold text-sm">
                        {msg.nickname.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-medium text-foreground text-sm">
                            {msg.nickname}
                          </span>
                          {isMyMessage(msg) && (
                            <Badge variant="default" className="text-[10px] px-1.5 py-0 h-4 bg-primary">
                              我
                            </Badge>
                          )}
                          {msg.source === 'user' && !isMyMessage(msg) && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/15 text-primary font-medium">
                              新
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground ml-auto shrink-0">
                            {format(msg.timestamp, 'yyyy-MM-dd HH:mm', {
                              locale: zhCN,
                            })}
                          </span>
                          {isAdmin && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => handleDelete(msg.id)}
                              aria-label="删除留言"
                            >
                              <Trash2 className="size-3.5" />
                            </Button>
                          )}
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap break-words">
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
