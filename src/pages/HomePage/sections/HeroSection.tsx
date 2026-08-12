import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import {
  Users,
  CalendarDays,
  Image as ImageIcon,
  BookOpen,
  Award,
  MessageSquare,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { MOCK_CLASS_INFO } from '@/data/classinfo';
import Image from '@/components/ui/image';

const HERO_IMAGE =
  '/spark/app/app_17bvm3c1mvp/runtime/api/v1/storage/object/bucket_aadkph63qbwks_static/static%2Faadkphzmrteog_ve_miaoda';

const QUICK_LINKS = [
  { label: '班级介绍', icon: Users, href: '#about', color: 'from-blue-500 to-cyan-500' },
  { label: '班级成员', icon: CalendarDays, href: '#members', color: 'from-purple-500 to-pink-500' },
  { label: '班级动态', icon: BookOpen, href: '#news', color: 'from-orange-500 to-amber-500' },
  { label: '班级相册', icon: ImageIcon, href: '#gallery', color: 'from-emerald-500 to-teal-500' },
  { label: '课程表', icon: CalendarDays, href: '#schedule', color: 'from-indigo-500 to-violet-500' },
  { label: '荣誉墙', icon: Award, href: '#honors', color: 'from-rose-500 to-red-500' },
  { label: '留言板', icon: MessageSquare, href: '#guestbook', color: 'from-sky-500 to-blue-500' },
];

export default function HeroSection() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const target = new Date(MOCK_CLASS_INFO.graduationDate).getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));
      setDaysLeft(diff);
    };
    update();
    const timer = setInterval(update, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const digits = useMemo(() => {
    const s = String(daysLeft).padStart(3, '0');
    return s.split('');
  }, [daysLeft]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="校园风光"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm border border-white/20">
            <Sparkles className="size-4 text-accent" />
            <span>高{String(MOCK_CLASS_INFO.entranceYear).slice(2)}级 · {MOCK_CLASS_INFO.gradeName}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            高{MOCK_CLASS_INFO.entranceYear}级{MOCK_CLASS_INFO.graduationYear}届
            <br />
            <span className="bg-gradient-to-r from-accent via-orange-300 to-amber-200 bg-clip-text text-transparent">
              2班
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-medium">
            「{MOCK_CLASS_INFO.slogan}」
          </p>

          {/* Countdown */}
          <div className="pt-6 flex flex-col items-center gap-3">
            <p className="text-white/80 text-sm">距离{MOCK_CLASS_INFO.graduationYear}年毕业还有</p>
            <div className="flex items-center gap-3">
              {digits.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="w-16 h-20 md:w-20 md:h-24 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"
                >
                  <span className="text-3xl md:text-4xl font-black text-white tabular-nums">
                    {d}
                  </span>
                </motion.div>
              ))}
              <span className="text-2xl md:text-3xl font-bold text-white/80 ml-2">天</span>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-10 grid grid-cols-3 md:grid-cols-7 gap-3 max-w-4xl mx-auto"
          >
            {QUICK_LINKS.slice(0, 7).map((item, i) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all hover:-translate-y-1"
                >
                  <div className={`size-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs text-white/90 font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="size-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
