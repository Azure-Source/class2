import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { scopedStorage } from '@lark-apaas/client-toolkit-lite';

const AUTH_STORAGE_KEY = '__class2_auth_info';
const REMEMBER_ME_DAYS = 7;

export interface IAuthInfo {
  username: string;
  role: 'student' | 'admin';
  loginTime: number;
  expireTime: number;
  rememberMe: boolean;
}

export const PRESET_ACCOUNTS = [
  { username: 'class2027_2', password: '20240202', role: 'student' as const },
  { username: 'admin2027', password: 'admin2027', role: 'admin' as const },
];

interface AuthContextType {
  authInfo: IAuthInfo | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (username: string, password: string, rememberMe: boolean) => { success: boolean; message?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authInfo, setAuthInfo] = useState<IAuthInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = scopedStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const info: IAuthInfo = JSON.parse(stored);
        if (info.expireTime && info.expireTime > Date.now()) {
          setAuthInfo(info);
        } else {
          scopedStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (
    username: string,
    password: string,
    rememberMe: boolean
  ): { success: boolean; message?: string } => {
    const account = PRESET_ACCOUNTS.find(
      (a) => a.username === username && a.password === password
    );

    if (!account) {
      return { success: false, message: '账号或密码错误，请重试' };
    }

    const now = Date.now();
    const expireTime = rememberMe
      ? now + REMEMBER_ME_DAYS * 24 * 60 * 60 * 1000
      : now + 12 * 60 * 60 * 1000;

    const info: IAuthInfo = {
      username: account.username,
      role: account.role,
      loginTime: now,
      expireTime,
      rememberMe,
    };

    setAuthInfo(info);
    scopedStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(info));
    return { success: true };
  };

  const logout = () => {
    setAuthInfo(null);
    try {
      scopedStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const value: AuthContextType = {
    authInfo,
    isLoggedIn: !!authInfo,
    isAdmin: authInfo?.role === 'admin',
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
