import { Link } from '@inertiajs/react';
import PublicLayout from '../layouts/PublicLayout';

export default function Home() {
    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        HipooLOompa Green Tech
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-emerald-50">
                        Sustainable Cloud Solutions for Modern Organizations
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* About Us Preview Section */}
            <section className="py-16 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">
                                About Us
                            </h2>
                            <p className="text-slate-600 mb-6">
                                We are a passionate team dedicated to delivering innovative cloud solutions 
                                that combine cutting-edge technology with environmental responsibility. 
                                Our expertise helps small and medium organizations modernize their infrastructure 
                                while reducing their carbon footprint.
                            </p>
                            <Link
                                href="/about"
                                className="inline-block text-teal-600 hover:text-teal-700 font-semibold"
                            >
                                Learn more about us →
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg aspect-video flex items-center justify-center text-teal-700 font-medium shadow-md">
                            <img 
                                src="/images/Team.png" 
                                alt="Team" 
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Gallery
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Explore our collection of featured images and projects. 
                            Each image tells a unique story of our work.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            { id: 1, src: '/images/greendata.png', alt: 'Green Data' },
                            { id: 2, src: '/images/Cutting-edge technology.jpeg', alt: 'Cutting-edge Technology' },
                            { id: 3, src: '/images/greeCloud.jpeg', alt: 'Green Cloud' }
                        ].map((image) => (
                            <div key={image.id} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/galery"
                            className="inline-block text-teal-600 hover:text-teal-700 font-semibold"
                        >
                            View full gallery →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Preview Section */}
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Contact Us
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                    Have a question or project in mind? We're here to help.
                    Don't hesitate to get in touch with us.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-emerald-100 flex flex-col items-center h-full">
                        <div className="text-teal-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-slate-800 mb-2">Email</p>
                        <p className="text-slate-600 text-sm">info@hlgt.com</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-emerald-100 flex flex-col items-center h-full">
                        <div className="text-teal-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-slate-800 mb-2">Phone</p>
                        <p className="text-slate-600 text-sm">+34 123 456 789</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-emerald-100 flex flex-col items-center h-full">
                        <div className="text-teal-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="font-semibold text-slate-800 mb-2">Address</p>
                        <p className="text-slate-600 text-sm">42 Pure Imagination Boulevard, Wonkaville, Factory Land</p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link
                        href="/Contact"
                        className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg"
                    >
                        Go to contact form
                    </Link>
                </div>
            </div>
        </section>
        </PublicLayout>
    );
}