import { Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/PublicLayout';

export default function Home() {
    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Japan
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Discover the beauty and culture of Japan with us.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Sección Galería Preview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Galery
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore a selection of our favorite moments and destinations in Japan.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    Image {i}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/galeria"
                            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
                        >
                            Show all Galery →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sección Quiénes Somos Preview */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Who We Are?
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We are a passionate team dedicated to delivering innovative solutions. 
                                With years of experience in the industry, we specialize in creating 
                                exceptional experiences for our clients.
                            </p>
                            <Link
                                href="/quienes-somos"
                                className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
                            >
                                Learn more about us →
                            </Link>
                        </div>
                        <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center text-gray-500">
                            Team Image
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección Contacto Preview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Do you have any questions or projects in mind? We are here to help. 
                        Feel free to get in touch with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="text-blue-600 mb-2">
                                <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="font-semibold">Email</p>
                            <p className="text-gray-600 text-sm">info@misitio.com</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="text-blue-600 mb-2">
                                <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <p className="font-semibold">Teléfono</p>
                            <p className="text-gray-600 text-sm">+34 123 456 789</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/contacto"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Go to contact form
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}