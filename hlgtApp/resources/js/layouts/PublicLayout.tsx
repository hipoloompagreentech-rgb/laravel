import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
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
                                    HipooLOompa Green Tech
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex space-x-8">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/galery"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/Contact"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Mobile menu (hamburger) */}
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-blue-600">
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
            <footer className="bg-gray-800 text-white mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-sm">
                            © 2024 MySite. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}