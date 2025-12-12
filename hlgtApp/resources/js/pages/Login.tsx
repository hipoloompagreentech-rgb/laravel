import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import PublicLayout from '../layouts/PublicLayout';
import authService from '../lib/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authService.login(email, password);
            router.visit('/');
        } catch (err: any) {
            setError(err?.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PublicLayout>
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-16 min-h-screen flex items-center">
                <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="bg-white rounded-lg shadow-lg p-10">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">
                                Sign In
                            </h2>
                            <p className="text-slate-600">
                                Access your account
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-3 font-semibold text-white hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}