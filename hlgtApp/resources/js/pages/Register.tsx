import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AuthLayout from '../layouts/AuthLayout';
import PublicLayout from '../layouts/PublicLayout';
import authService from '../lib/authService';

export default function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    try {
      await authService.register(email, password, displayName);
      router.visit('/');
    } catch (err: any) {
      setError(err?.message || 'Error al crear cuenta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <AuthLayout title="Crear Cuenta" subtitle="Únete a nosotros hoy">
        <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-400 border border-red-500/20">{error}</div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-300">Nombre</label>
          <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text" required className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300">Contraseña</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300">Confirmar Contraseña</label>
          <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white" />
        </div>

        <button type="submit" disabled={loading} className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50">{loading ? 'Creando cuenta...' : 'Crear Cuenta'}</button>
      </form>
      </AuthLayout>
    </PublicLayout>
  );
}
