import PublicLayout from '@/layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function PrivacyPolicy() {
    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-emerald-50">
                        How we protect and manage your personal information
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                        Home
                    </Link>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                Welcome to HipooLoompa Green Tech. We are committed to protecting your personal information 
                                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and 
                                safeguard your information when you visit our website and use our sustainable cloud solutions. 
                                By accessing our services, you consent to the data practices described in this policy.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                2. Information We Collect
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                We may collect information about you in a variety of ways. The information we may collect includes:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-teal-600">
                                    <h3 className="font-semibold text-slate-800 mb-2">Personal Data</h3>
                                    <p className="text-stone-700 text-sm">
                                        Personally identifiable information, such as your name, email address, company name, 
                                        and telephone number, that you voluntarily give to us when you fill out the contact 
                                        form or register for our services.
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-teal-600">
                                    <h3 className="font-semibold text-slate-800 mb-2">Derivative Data</h3>
                                    <p className="text-stone-700 text-sm">
                                        Information our servers automatically collect when you access the website, such as your 
                                        IP address, your browser type, your operating system, your access times, and the pages 
                                        you have viewed directly before and after accessing the site.
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-teal-600">
                                    <h3 className="font-semibold text-slate-800 mb-2">Financial Data</h3>
                                    <p className="text-stone-700 text-sm">
                                        Financial information, such as data related to your payment method (e.g., valid credit 
                                        card number, card brand, expiration date) that we may collect when you purchase, order, 
                                        return, exchange, or request information about our services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                Having accurate information about you permits us to provide you with a smooth, efficient, and 
                                customized experience. Specifically, we may use information collected about you via the website to:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Service Delivery:</span> Create and manage your 
                                    account and deliver the sustainable cloud solutions requested.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Communication:</span> Respond to your inquiries, 
                                    customer service requests, and send you technical notices or administrative information.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Improvement:</span> Compile anonymous statistical 
                                    data and analysis for use internally to improve our green infrastructure offerings.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Security:</span> Monitor and analyze usage and 
                                    trends to improve your experience and the security of the website.
                                </li>
                            </ul>
                        </div>

                        {/* Disclosure of Your Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                4. Disclosure of Your Information
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                We may share information we have collected about you in certain situations. Your information 
                                may be disclosed as follows:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Third-Party Service Providers:</span> We may share 
                                    your information with third parties that perform services for us or on our behalf, including 
                                    payment processing, data analysis, email delivery, hosting services, and customer service.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Legal Obligations:</span> If we believe the release 
                                    of information about you is necessary to respond to legal process, to investigate or remedy 
                                    potential violations of our policies, or to protect the rights, property, and safety of others, 
                                    we may share your information as permitted or required by any applicable law, rule, or regulation.
                                </li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                We use administrative, technical, and physical security measures to help protect your personal 
                                information. While we have taken reasonable steps to secure the personal information you provide 
                                to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                                and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </div>

                        {/* Your Data Protection Rights */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                6. Your Data Protection Rights
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                Depending on your location (e.g., the European Economic Area or California), you may have certain 
                                rights regarding your personal data:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Right to Access:</span> You have the right to 
                                    request copies of your personal data.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Right to Rectification:</span> You have the right 
                                    to request that we correct any information you believe is inaccurate or complete information 
                                    you believe is incomplete.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Right to Erasure:</span> You have the right to 
                                    request that we erase your personal data, under certain conditions.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Right to Restrict Processing:</span> You have the 
                                    right to request that we restrict the processing of your personal data, under certain conditions.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Right to Object to Processing:</span> You have the 
                                    right to object to our processing of your personal data, under certain conditions.
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                7. Contact Us
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-teal-200">
                                <p className="font-bold text-slate-800 mb-2">HipooLoompa Green Tech</p>
                                <p className="text-stone-700 text-sm mb-1">42 Pure Imagination Boulevard</p>
                                <p className="text-stone-700 text-sm mb-1">Wonkaville, Factory Land</p>
                                <p className="text-stone-700 text-sm mt-3">
                                    Email:{' '}
                                    <a href="mailto:privacy@hipooloompa.com" className="text-teal-600 hover:text-teal-700 underline font-semibold">
                                        privacy@hipooloompa.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="border-t border-stone-200 pt-6 mt-10">
                            <p className="text-sm text-stone-600 italic">
                                Last updated: December 2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}