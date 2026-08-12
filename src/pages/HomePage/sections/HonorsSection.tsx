import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Crown, Flame } from 'lucide-react';
import { MOCK_HONORS } from '@/data/honors';

const LEVEL_CONFIG = {
  school: { label: '校级', color: 'bg-blue-500' },
  district: { label: '区级', color: 'bg-purple-500' },
  city: { label: '市级', color: 'bg-amber-500' },
  province: { label: '省级', color: 'bg-rose-500' },
};

const ICONS = [Trophy, Star, Medal, Crown, Flame, Award];

export default function HonorsSection() {
  // 按时间倒序
  const sorted = [...MOCK_HONORS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="honors" className="w-full py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Honors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">荣誉墙</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            每一座奖杯背后，都是全班同学共同努力的汗水
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {sorted.map((honor, i) => {
              const isLeft = i % 2 === 0;
              const Icon = ICONS[i % ICONS.length];
              const levelConf = LEVEL_CONFIG[honor.level];

              return (
                <div
                  key={honor.id}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] pl-0 md:pl-0 ${
                      isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-shadow group">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? 'md:flex-row-reverse md:justify-end' : ''
                        }`}
                      >
                        <div
                          className={`size-12 rounded-xl ${levelConf.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                        >
                          <Icon className="size-6" />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <span className="text-xs text-muted-foreground block">
                            {honor.date}
                          </span>
                          <span
                            className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full text-white ${levelConf.color} mt-1`}
                          >
                            {levelConf.label}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        {honor.title}
                      </h4>
                      <p className="text-xs text-primary font-medium mb-2">
                        颁发单位：{honor.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {honor.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: 'spring' }}
                      className="relative"
                    >
                      <div className={`size-6 rounded-full ${levelConf.color} border-4 border-background shadow-lg`} />
                      <div className={`absolute inset-0 rounded-full ${levelConf.color} animate-ping opacity-40`} />
                    </motion.div>
                  </div>

                  {/* Spacer for alternate side */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
