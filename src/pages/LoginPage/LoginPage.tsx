import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  // 已登录访问登录页 → 跳首页
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const validate = () => {
    const e: { username?: string; password?: string } = {};
    if (!username.trim()) e.username = '请输入账号';
    if (!password.trim()) e.password = '请输入密码';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoginError(null);
    setIsSubmitting(true);

    // 模拟 1 秒网络请求
    await new Promise((r) => setTimeout(r, 1000));

    const result = login(username.trim(), password, rememberMe);
    setIsSubmitting(false);

    if (result.success) {
      toast.success('登录成功，欢迎回来！');
      const from = (location.state as { from?: string } | null)?.from || '/';
      navigate(from, { replace: true });
    } else {
      setLoginError(result.message || '登录失败');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* 装饰光斑 */}
      <div className="absolute top-0 -left-32 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* 左侧品牌区 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block text-center md:text-left space-y-6 pr-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="size-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center shadow-lg">
                <GraduationCap className="size-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">高2024级2027届2班</h1>
                <p className="text-sm text-muted-foreground">班级官方网站</p>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-black text-foreground leading-tight">
                青春逐梦
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  二班同行
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                登录班级网站，记录我们共同的成长时光。
                <br />
                留下你的声音，让青春记忆永不褪色。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { label: '班级相册', desc: '记录精彩瞬间' },
                { label: '留言互动', desc: '分享心里话' },
                { label: '荣誉殿堂', desc: '见证集体荣耀' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <div className="size-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="text-muted-foreground ml-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧登录卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md mx-auto"
          >
            {/* 移动端 logo */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-6">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center shadow-lg">
                <GraduationCap className="size-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">高2024级2027届2班</h1>
                <p className="text-xs text-muted-foreground">青春逐梦 · 二班同行</p>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-md border border-border/60 rounded-2xl shadow-xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">欢迎登录</h2>
                <p className="text-sm text-muted-foreground mt-1">使用班级账号登录</p>
              </div>

              {/* 错误提示条 */}
              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center gap-2 text-destructive text-sm"
                >
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{loginError}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="请输入账号"
                      className={`pl-10 h-11 ${errors.username ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      autoComplete="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        if (errors.username) setErrors((prev) => ({ ...prev, username: undefined }));
                      }}
                    />
                  </div>
                  {errors.username && (
                    <p className="text-xs text-destructive px-1">{errors.username}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="请输入密码"
                      className={`pl-10 pr-10 h-11 ${errors.password ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? '隐藏密码' : '显示密码'}
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-destructive px-1">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={(v) => setRememberMe(!!v)}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm text-muted-foreground cursor-pointer select-none"
                  >
                    记住我（7天内自动登录）
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:opacity-90 font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 mr-2 animate-spin" />
                      登录中...
                    </>
                  ) : (
                    '登 录'
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-5 border-t border-border/50 space-y-1">
                <p className="text-xs text-center text-muted-foreground">
                  同学账号：
                  <span className="font-mono font-medium text-foreground"> class2027_2</span>
                  <span className="text-muted-foreground"> / </span>
                  <span className="font-mono font-medium text-foreground">20240202</span>
                </p>
                <p className="text-xs text-center text-muted-foreground">
                  班委账号：
                  <span className="font-mono font-medium text-foreground"> admin2027</span>
                  <span className="text-muted-foreground"> / </span>
                  <span className="font-mono font-medium text-foreground">admin2027</span>
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              <button
                onClick={() => navigate('/')}
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                返回班级网站首页
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
