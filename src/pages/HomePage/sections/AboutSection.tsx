import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, Award, Heart, Lightbulb, Target, Sparkles } from 'lucide-react';
import { MOCK_CLASS_INFO } from '@/data/classinfo';

const STATS = [
  { label: '班级人数', value: 45, suffix: '人', icon: Users },
  { label: '班主任', value: 1, suffix: '位', icon: GraduationCap },
  { label: '任课老师', value: 9, suffix: '位', icon: BookOpen },
  { label: '班级荣誉', value: 20, suffix: '+', icon: Award },
];

const FEATURES = [
  { title: '浓厚的学习氛围', desc: '勤学善思，互助共进', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
  { title: '丰富的文体活动', desc: '德智体美劳全面发展', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
  { title: '团结友爱的班级文化', desc: '相亲相爱一家人', icon: Heart, color: 'from-rose-500 to-orange-500' },
  { title: '积极向上的精神风貌', desc: '青春逐梦，永不止步', icon: Target, color: 'from-emerald-500 to-teal-500' },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            关于我们的班级
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {MOCK_CLASS_INFO.description}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="size-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center">
                  <Icon className="size-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground tabular-nums">
                  {stat.value}
                  <span className="text-lg text-muted-foreground font-medium ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Motto & Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-6xl font-black text-primary/10">
              班训
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="size-5 text-primary" />
                <span className="font-semibold text-foreground">班风班训</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {MOCK_CLASS_INFO.classMotto}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                我们以「{MOCK_CLASS_INFO.classMotto}」为班训，
                {MOCK_CLASS_INFO.classStyle}。
                在三年的高中时光里，每一位同学都在这个集体中成长、蜕变。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/10 overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-6xl font-black text-accent/20">
              理念
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="size-5 text-accent" />
                <span className="font-semibold text-foreground">班级理念</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {MOCK_CLASS_INFO.slogan}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                青春是一首奋斗的歌，梦想是照亮前行的灯。
                在二班这个温暖的大家庭里，我们并肩作战、互相扶持，
                用汗水浇灌希望，用努力书写未来。
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
          >
            班级特色
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm group cursor-default"
                >
                  <div className={`size-12 mb-4 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="size-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
