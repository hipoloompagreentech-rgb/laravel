import React from 'react';
import { router } from '@inertiajs/react';
import useAuth from '../hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!user) {
    router.visit('/login');
    return <div className="p-8 text-center">Redirigiendo a login...</div> as any;
  }
  return <>{children}</>;
}
