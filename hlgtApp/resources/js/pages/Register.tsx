import React, { useState } from 'react';
import { router } from '@inertiajs/react';
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
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            await authService.register(email, password, displayName);
            router.visit('/');
        } catch (err: any) {
            setError(err?.message || 'Error creating account');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);
        try {
            const res = await (authService as any).signInWithGoogle();
            if (res) router.visit('/');
        } catch (err: any) {
            const code = err?.code || err?.name;
            if (code === 'auth/popup-closed-by-user') {
                setError('Se cerró la ventana emergente antes de completar el inicio de sesión. Intenta de nuevo.');
            } else if (code === 'auth/popup-blocked' || code === 'auth/cancelled-popup-request') {
                setError('El navegador bloqueó la ventana emergente. Se abrirá una nueva ventana para completar el inicio de sesión (o prueba permitir popups).');
            } else {
                setError(err?.message || 'Error al iniciar sesión con Google');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <PublicLayout>
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 h-screen flex items-start overflow-hidden pt-20">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">
                                Create Account
                            </h2>
                            <p className="text-slate-600">
                                Join us today
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-slate-800">
                                    Name
                                </label>
                                <input
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    type="text"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-800">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-800">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-800">
                                    Confirm Password
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    required
                                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-3 font-semibold text-white hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                            >
                                {loading ? 'Creating account...' : 'Create Account'}
                            </button>
                            <div className="mt-4">
                                <button type="button" onClick={handleGoogleSignIn} disabled={loading} className="w-full inline-flex items-center justify-center space-x-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 hover:bg-slate-50">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M21.35 11.1H12v2.8h5.35c-.23 1.37-1.2 2.53-2.56 3.25v2.7h4.13c2.42-2.23 3.83-5.6 3.83-9.75 0-.66-.06-1.3-.18-1.92z" fill="#4285F4"/>
                                        <path d="M12 22c2.7 0 4.98-.9 6.65-2.46l-4.13-2.7c-.89.6-2.03.96-3.52.96-2.7 0-4.99-1.82-5.8-4.27H1.98v2.68C3.66 19.9 7.5 22 12 22z" fill="#34A853"/>
                                        <path d="M6.2 13.53a6.13 6.13 0 0 1 0-3.06V7.79H1.98A10 10 0 0 0 1 12c0 1.6.38 3.12 1.02 4.45l4.18-2.92z" fill="#FBBC05"/>
                                        <path d="M12 6.5c1.48 0 2.82.51 3.88 1.53l2.9-2.9C16.96 3.64 14.68 3 12 3 7.5 3 3.66 5.1 1.98 7.79l4.18 2.68C7.01 8.32 9.3 6.5 12 6.5z" fill="#EA4335"/>
                                    </svg>
                                    <span>{loading ? 'Por favor espera...' : 'Continuar con Google'}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}