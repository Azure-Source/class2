import { useState, useEffect, useCallback, useMemo } from 'react';
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

// 预设账号
export const PRESET_ACCOUNTS = [
  { username: 'class2027_2', password: '20240202', role: 'student' as const },
  { username: 'admin2027', password: 'admin2027', role: 'admin' as const },
];

export function useAuth() {
  const [authInfo, setAuthInfo] = useState<IAuthInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初始化：从 localStorage 读取
  useEffect(() => {
    try {
      const stored = scopedStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const info: IAuthInfo = JSON.parse(stored);
        // 检查是否过期
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

  // 登录
  const login = useCallback(
    (username: string, password: string, rememberMe: boolean): { success: boolean; message?: string } => {
      const account = PRESET_ACCOUNTS.find(
        (a) => a.username === username && a.password === password
      );

      if (!account) {
        return { success: false, message: '账号或密码错误，请重试' };
      }

      const now = Date.now();
      const expireTime = rememberMe
        ? now + REMEMBER_ME_DAYS * 24 * 60 * 60 * 1000
        : // 不记住我：浏览器关闭即失效，用 sessionStorage 语义，这里给一个较短的会话时间
          now + 12 * 60 * 60 * 1000; // 12小时会话期

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
    },
    []
  );

  // 退出登录
  const logout = useCallback(() => {
    setAuthInfo(null);
    try {
      scopedStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const isLoggedIn = useMemo(() => !!authInfo, [authInfo]);
  const isAdmin = useMemo(() => authInfo?.role === 'admin', [authInfo]);

  return {
    authInfo,
    isLoggedIn,
    isAdmin,
    isLoading,
    login,
    logout,
  };
}
