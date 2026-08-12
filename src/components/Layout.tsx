import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';

export const Layout = () => {
  return (
    <AuthProvider>
      <Outlet />
      <Toaster richColors closeButton position="top-center" />
    </AuthProvider>
  );
};
