import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Calendar, ChevronRight, Megaphone, PartyPopper } from 'lucide-react';
import { MOCK_ANNOUNCEMENTS } from '@/data/announcements';
import Image from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';

export default function NewsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activities = MOCK_ANNOUNCEMENTS.filter((a) => a.type === 'activity');
  const announcements = MOCK_ANNOUNCEMENTS;

  return (
    <section id="news" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Class News
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">班级动态</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            记录二班的每一个精彩瞬间，见证我们共同的成长
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* 公告时间线 - 左侧 3/5 */}
          <div className="lg:col-span-3 space-y-0">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <Bell className="size-5 text-primary" />
              最新公告
            </h3>
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-6">
              {announcements.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[42px] top-1.5 size-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                  <div
                    className="p-5 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        {item.type === 'announcement' ? (
                          <Badge variant="secondary" className="text-[10px]">
                            <Megaphone className="size-3 mr-1" />
                            公告
                          </Badge>
                        ) : (
                          <Badge variant="default" className="bg-gradient-to-r from-primary to-accent border-0 text-[10px]">
                            <PartyPopper className="size-3 mr-1" />
                            活动
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          {item.date}
                        </span>
                      </div>
                      <ChevronRight
                        className={`size-4 text-muted-foreground shrink-0 transition-transform ${
                          expandedId === item.id ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.summary}</p>

                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-border/50">
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 活动回顾卡片 - 右侧 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
              <PartyPopper className="size-5 text-accent" />
              活动回顾
            </h3>
            <div className="space-y-5">
              {activities.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm group"
                >
                  {a.imageUrl && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={a.imageUrl}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs opacity-80 mb-1">{a.date}</p>
                        <h4 className="font-semibold text-lg">{a.title}</h4>
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {a.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
