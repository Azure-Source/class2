import { GraduationCap, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="w-full bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-background/10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="size-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                <GraduationCap className="size-6" />
              </div>
              <span>高2024级2027届2班</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              青春逐梦，二班同行。我们是一个由45名热血少年组成的温暖大家庭，
              共同书写属于我们的青春篇章。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-base">快速导航</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><UniversalLink to="#about" className="hover:text-background transition-colors">班级介绍</UniversalLink></li>
              <li><UniversalLink to="#members" className="hover:text-background transition-colors">班级成员</UniversalLink></li>
              <li><UniversalLink to="#news" className="hover:text-background transition-colors">班级动态</UniversalLink></li>
              <li><UniversalLink to="#gallery" className="hover:text-background transition-colors">班级相册</UniversalLink></li>
              <li><UniversalLink to="#honors" className="hover:text-background transition-colors">荣誉墙</UniversalLink></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-base">联系我们</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <Mail className="size-4 shrink-0 mt-0.5" />
                <span>class2_2027@school.edu.cn</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 shrink-0 mt-0.5" />
                <span>010-8888-2027</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>教学楼B栋 3层 高二(2)班教室</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2024-2027 高2024级2027届2班 · 版权所有</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
          >
            <ArrowUp className="size-4" />
            回到顶部
          </button>
        </div>
      </div>
    </footer>
  );
}
