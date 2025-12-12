import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import PublicLayout from '../layouts/PublicLayout';
import useAuth from '../hooks/useAuth';
import authService from '../lib/authService';

export default function Profiles() {
    const { user, loading } = useAuth();

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !user) {
            router.visit('/login');
        }

        if (user) {
            setDisplayName(user.displayName || '');
            setEmail(user.email || '');
        }
    }, [user, loading]);

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            if (user && displayName !== user.displayName) {
                await authService.updateDisplayName(displayName);
            }

            if (user && email !== user.email) {
                await authService.updateEmail(email);
            }

            if (newPassword) {
                if (newPassword !== confirmPassword) {
                    throw new Error('Passwords do not match');
                }
                await authService.updatePassword(newPassword);
            }

            setMessage('Profile updated successfully');
        } catch (err: any) {
            setMessage(err?.message || 'Update failed');
            console.error('Profile update error', err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <PublicLayout>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-8">
                        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

                        {loading && <p className="text-gray-600">Loading...</p>}

                        {!loading && user && (
                            <form onSubmit={handleUpdateProfile} className="space-y-4">
                                {message && (
                                    <div className="p-3 bg-green-50 text-green-700 rounded">
                                        {message}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Display Name
                                    </label>
                                    <input
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
                                >
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
