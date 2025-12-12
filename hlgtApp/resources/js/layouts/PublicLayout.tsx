import { Link, usePage, router } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import useAuth from '../hooks/useAuth';
import Snowfall from '../components/Snowfall';

export default function PublicLayout({ children }: PropsWithChildren) {
    const { url } = usePage();

    const isActive = (path: string) => url === path;

    const baseClasses =
        "px-3 py-2 text-sm font-medium transition-colors";
    
    const inactiveClasses =
        "text-gray-700 hover:text-teal-600";
    
    const activeClasses =
        "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 font-bold border-b-2 border-teal-600";

    const { user, loading, logout } = useAuth();
    const enableSnow = import.meta.env.VITE_ENABLE_SNOW === 'true';
    
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 relative">
            {enableSnow && <Snowfall count={80} color={'255,255,255'} speed={1} />}
            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center space-x-3">
                                <img 
                                    src="/images/icono.png" 
                                    alt="Logo" 
                                    className="h-25 w-25"
                                />
                                <span className="text-xl font-bold text-gray-800">
                                    HipooLoompa Green Tech
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="/"
                                className={`
                                    ${baseClasses}
                                    ${isActive('/') ? activeClasses : inactiveClasses}
                                `}
                            >
                                Home
                            </Link>

                            <Link
                                href="/galery"
                                className={`
                                    ${baseClasses}
                                    ${isActive('/galery') ? activeClasses : inactiveClasses}
                                `}
                            >
                                Gallery
                            </Link>

                            <Link
                                href="/about"
                                className={`
                                    ${baseClasses}
                                    ${isActive('/about') ? activeClasses : inactiveClasses}
                                `}
                            >
                                About Us
                            </Link>

                              <Link
                                href="/profile"
                                className={`
                                    ${baseClasses}
                                    ${isActive('/profile') ? activeClasses : inactiveClasses}
                                `}
                            >
                                Profiles                                
                            </Link>

                            <Link
                                href="/Contact"
                                className={`
                                    ${baseClasses}
                                    ${isActive('/Contact') ? activeClasses : inactiveClasses}
                                `}
                            >
                                Contact
                            </Link>

                            {/* Auth buttons */}
                            {!loading && !user && (
                                <>
                                    <Link href="/login" className={`${baseClasses} text-gray-700 hover:text-teal-600`}>Login</Link>
                                    <Link href="/register" className={`${baseClasses} text-white bg-gradient-to-r from-teal-600 to-emerald-600 px-3 py-2 rounded-md hover:from-teal-700 hover:to-emerald-700 transition-all`}>Register</Link>
                                </>
                            )}
                            {!loading && user && (
                                <>
                                    <Link href="/profile" className={`${baseClasses} text-gray-700 hover:text-teal-600`}>{user.displayName || user.email}</Link>
                                    <button onClick={async () => { await logout(); router.visit('/'); }} className={`${baseClasses} text-sm text-red-600 hover:text-red-700`}>Logout</button>
                                </>
                            )}
                        </div>

                        {/* Mobile menu (hamburger) */}
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-teal-600">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className='flex-grow'>
                {children}
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-stone-300">
                            © 2024 HipooLoompa Green Tech. All rights reserved.
                        </p>

                        <div className="flex space-x-6">
                            <Link 
                                href="/privacypolicy"
                                className="text-sm text-stone-300 hover:text-teal-400 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/termsandconditions" 
                                className="text-sm text-stone-300 hover:text-teal-400 transition-colors"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}