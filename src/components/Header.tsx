import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Menu, X, GraduationCap, LogIn, ChevronDown, User, LogOut, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { avatarImages } from '@lark-apaas/client-toolkit-lite';
import Image from '@/components/ui/image';

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '班级介绍', href: '#about' },
  { label: '班级成员', href: '#members' },
  { label: '班级动态', href: '#news' },
  { label: '班级相册', href: '#gallery' },
  { label: '课程表', href: '#schedule' },
  { label: '荣誉墙', href: '#honors' },
  { label: '留言板', href: '#guestbook' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isLoggedIn, isAdmin, authInfo, logout } = useAuth();
  const navigate = useNavigate();
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  const handleLogout = () => {
    logout();
    toast.success('已退出登录');
    navigate('/login');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <NavLink
          to="#hero"
          className="flex items-center gap-2 font-bold text-foreground"
        >
          <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center">
            <GraduationCap className="size-5" />
          </div>
          <span className="text-sm md:text-base">高2024级2班</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: login / user menu */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-muted transition-colors">
                  <div className="size-7 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <Image
                      src={avatarImages.avatarImg1}
                      alt={authInfo?.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground flex items-center gap-1">
                    {authInfo?.username}
                    {isAdmin && (
                      <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-[9px] px-1.5 py-0">
                        班委
                      </Badge>
                    )}
                  </span>
                  <ChevronDown className="size-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>
                  <div className="flex items-center gap-2">
                    <User className="size-4 text-primary" />
                    我的账户
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => toast.info('个人资料功能开发中')}>
                  <User className="size-4 mr-2" />
                  我的资料
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={handleLogout}
                >
                  <LogOut className="size-4 mr-2" />
                  退出登录
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-primary text-primary hover:bg-primary/10"
              onClick={goToLogin}
            >
              <LogIn className="size-4 mr-1.5" />
              登录
            </Button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="菜单"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileNavRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/30"
          >
            <nav className="px-4 py-3 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm rounded-md transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 pt-2 border-t border-border/50">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-3 py-2">
                      <div className="size-8 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <Image
                          src={avatarImages.avatarImg1}
                          alt={authInfo?.username}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-foreground truncate">
                            {authInfo?.username}
                          </span>
                          {isAdmin && (
                            <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-[9px] shrink-0">
                              班委
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-destructive rounded-md hover:bg-muted"
                    >
                      <LogOut className="size-4" />
                      退出登录
                    </button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => {
                      setMobileOpen(false);
                      goToLogin();
                    }}
                  >
                    <LogIn className="size-4 mr-1.5" />
                    登录
                  </Button>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
