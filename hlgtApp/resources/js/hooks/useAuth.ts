import { useEffect, useState } from 'react';
import authService, { UserProfile } from '../lib/authService';

export default function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await authService.logout();
  };

  return { user, loading, logout };
}
