import { useState } from 'react';
import { Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/PublicLayout';

export default function Galery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: '/images/greendata.png', title: 'Green Data Centers', description: 'Sustainable infrastructure solutions' },
        { id: 2, src: '/images/Green technology commitment.png', title: 'Sustainability', description: 'Green technology commitment'},
        { id: 3, src: '/images/Office.jpg', title: 'Green Cloud', description: 'Eco-friendly cloud services' },
        { id: 4, src: '/images/Cutting-edge technology.jpeg', title: 'Innovation', description: 'Cutting-edge technology' },
        { id: 5, src: '/images/Team.png', title: 'Our Team', description: 'Expert cloud professionals' },
        { id: 6, src: '/images/Enterprise-grade protection.jpg', title: 'Security', description: 'Enterprise-grade protection' },
        { id: 7, src: '/images/Data-driven insights.jpeg', title: 'Analytics', description: 'Data-driven insights' },
        { id: 8, src: '/images/Scalable solutions.webp', title: 'Infrastructure', description: 'Scalable solutions' },
        { id: 9, src: '/images/class.png', title: 'Cloud iClass', description: 'Modern cloud architecture' }
    ];

    const openLightbox = (index) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-emerald-50">
                        Explore our sustainable cloud solutions and projects
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* Gallery Grid Section */}
            <section className="py-16 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">
                            Complete Gallery
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Each image showcases our commitment to sustainable technology 
                            and innovative cloud solutions for modern organizations.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                        {images.map((image, index) => (
                            <div 
                                key={image.id}
                                onClick={() => openLightbox(index)}
                                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {image.title}
                                        </h3>
                                        <p className="text-sm text-emerald-100">
                                            {image.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Interested in Our Solutions?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                        Let's discuss how we can help your organization with 
                        sustainable cloud solutions.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-emerald-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 text-white hover:text-emerald-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-4 text-white hover:text-emerald-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div className="max-w-6xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].title}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-6 text-center bg-black bg-opacity-50 px-6 py-4 rounded-lg">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {images[selectedImage].title}
                            </h3>
                            <p className="text-emerald-100 mb-2">
                                {images[selectedImage].description}
                            </p>
                            <p className="text-slate-400 text-sm">
                                {selectedImage + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </PublicLayout>
    );
}