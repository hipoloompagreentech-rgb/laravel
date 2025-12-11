import { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '../layouts/PublicLayout';

export default function Profiles() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    // Esta función se conectará al backend cuando esté listo
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Conectar con el backend
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(loginData)
        // });
        // const data = await response.json();
        
        // Simulación temporal
        setTimeout(() => {
            console.log('Login attempt:', loginData, 'Profile:', selectedProfile);
            alert(`Login simulado como ${selectedProfile}`);
            setIsLoading(false);
        }, 1000);
    };

    const profiles = [
        {
            id: 'client',
            title: 'Client',
            description: 'Access your cloud solutions dashboard and manage your services',
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            features: [
                'Service dashboard',
                'Billing & invoices',
                'Support tickets',
                'Resource monitoring'
            ]
        },
        {
            id: 'worker',
            title: 'Worker',
            description: 'Manage projects, tasks and collaborate with the team',
            icon: (
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            features: [
                'Project management',
                'Task tracking',
                'Team collaboration',
                'Time reporting'
            ]
        }
    ];

    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Choose Your Profile
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Select your profile type to access your personalized dashboard
                        </p>
                    </div>
                </div>
            </section>

            {/* Profile Selection Section */}
            {!selectedProfile ? (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {profiles.map((profile) => (
                                <div
                                    key={profile.id}
                                    className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    onClick={() => setSelectedProfile(profile.id)}
                                >
                                    <div className="text-green-600">
                                        {profile.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                                        {profile.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-center">
                                        {profile.description}
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-gray-700 text-sm">Features:</p>
                                        <ul className="space-y-2">
                                            {profile.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-600 text-sm">
                                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="mt-6 w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                        Select {profile.title}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* Login Form Section */
                <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
                            <button
                                onClick={() => setSelectedProfile(null)}
                                className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to profile selection
                            </button>

                            <div className="text-center mb-8">
                                <div className="text-green-600 mb-4">
                                    {profiles.find(p => p.id === selectedProfile)?.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {profiles.find(p => p.id === selectedProfile)?.title} Login
                                </h2>
                                <p className="text-gray-600">
                                    Enter your credentials to access your dashboard
                                </p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={loginData.email}
                                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                    </label>
                                    <a href="#" className="text-sm text-green-600 hover:text-green-700">
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Signing in...' : 'Sign In'}
                                </button>

                                {/* TODO: Conectar con backend para registro */}
                                <p className="text-center text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
                                        Contact us
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            )}

            {/* Info Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Secure Access to Your Dashboard
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Secure Login</h3>
                                <p className="text-gray-600 text-sm">
                                    Enterprise-grade security for your data
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Fast Access</h3>
                                <p className="text-gray-600 text-sm">
                                    Quick login to your personalized dashboard
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Role-Based</h3>
                                <p className="text-gray-600 text-sm">
                                    Customized experience for each user type
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}