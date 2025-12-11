import PublicLayout from '@/layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Who We Are
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-emerald-50">
                        Pioneering sustainable cloud solutions for organizations that care the planet
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>           

            {/* Mission Section */}
            <section className="py-16 bg-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-stone-700 mb-4 leading-relaxed">
                                At HipooLOompa Green Tech, we believe that innovation and sustainability go hand in hand. 
                                Our mission is to empower small and medium organizations to modernize their IT infrastructure 
                                while reducing their environmental footprint.
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                We specialize in delivering cloud solutions that are not only cutting-edge and efficient, 
                                but also environmentally responsible. Every project we undertake is designed with energy 
                                efficiency and carbon reduction in mind.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl aspect-video flex items-center justify-center text-teal-700 font-medium shadow-lg">
                            <img 
                                    src="/images/Team.png" 
                                    alt="Team" 
                                    className="rounded-lg"
                                />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                Sustainability First
                            </h3>
                            <p className="text-stone-700">
                                We prioritize green technology and energy-efficient solutions in every project, 
                                helping organizations reduce their carbon footprint.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                Innovation
                            </h3>
                            <p className="text-stone-700">
                                We stay at the forefront of cloud technology, continuously exploring new ways 
                                to deliver better, more efficient solutions.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                Client Partnership
                            </h3>
                            <p className="text-stone-700">
                                We work closely with our clients, understanding their unique needs and 
                                building long-term relationships based on trust and results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                        Our Team
                    </h2>
                    <p className="text-stone-700 text-center max-w-3xl mx-auto mb-12">
                        We're a diverse team of cloud architects, sustainability experts, and technology 
                        enthusiasts passionate about making a positive impact through innovative solutions.
                    </p>
                   <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    {[
        { id: 1, name: 'Aitor Martinez', position: 'CEO & Founder', image: '/images/profile/Aitor.png' },
        { id: 2, name: 'Alba Lozano', position: 'CTO', image: '/images/profile/Alba.png' },
        { id: 3, name: 'Iker Fuentes', position: 'Cloud Architect', image: '/images/profile/Iker.png' },
        { id: 4, name: 'Jonathan Angulo', position: 'Sustainability Lead', image: '/images/profile/Jonathan.png' },
        { id: 5, name: 'Unai Sarria', position: 'DevOps Engineer', image: '/images/profile/Unai.png' }
    ].map((member) => (
        <div key={member.id} className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden shadow-md">
                <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">{member.name}</h3>
            <p className="text-sm text-stone-600">{member.position}</p>
        </div>
    ))}
</div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <p className="text-emerald-100">Successful Projects</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">30%</div>
                            <p className="text-emerald-100">Average Carbon Reduction</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100%</div>
                            <p className="text-emerald-100">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-amber-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Ready to Transform Your Infrastructure?
                    </h2>
                    <p className="text-stone-700 mb-8">
                        Let's discuss how we can help your organization modernize sustainably.
                    </p>
                    <Link
                        href="/Contact"
                        className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </PublicLayout>
    );
}