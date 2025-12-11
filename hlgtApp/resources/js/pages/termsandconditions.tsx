import PublicLayout from '@/layouts/PublicLayout';
import { Link } from '@inertiajs/react';

export default function TermsAndConditions() {
    return (
        <PublicLayout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-emerald-50">
                        Contact Form Usage Terms
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
                                1. Introduction and Acceptance
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                This document regulates the use of the contact form available on the HipooLoompa Green Tech website. 
                                By filling out and sending said form, the user fully and unreservedly accepts the conditions set forth herein. 
                                If you do not agree with these terms, please refrain from using this means of communication.
                            </p>
                        </div>

                        {/* Use of Form */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                2. Use of the Form
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                The user agrees to make appropriate and lawful use of the contact form. In particular, 
                                the user assumes the following obligations:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Truthfulness of data:</span> The user guarantees 
                                    that the personal data provided (name, email, company, etc.) is true, accurate, and current. 
                                    HipooLoompa Green Tech is not responsible for the inability to contact the user if the data 
                                    provided is incorrect.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Prohibition of illicit uses:</span> It is expressly 
                                    prohibited to use the form for sending unsolicited commercial communications (SPAM), offensive or 
                                    defamatory content, computer viruses, or any other material that may damage the company's or third 
                                    parties' systems.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Identity:</span> The user must not impersonate 
                                    another person or entity, nor misrepresent their relationship with any other person or entity.
                                </li>
                            </ul>
                        </div>

                        {/* Data Protection */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                3. Personal Data Protection
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                In accordance with current data protection regulations, we inform you regarding the processing 
                                of the information you provide us:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Data Controller:</span> HipooLoompa Green Tech.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Purpose:</span> To manage and respond to inquiries, 
                                    doubts, or requests for information regarding our sustainable cloud solutions made through the form.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Legitimation:</span> The express consent of the user 
                                    by checking the acceptance box and sending the form.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Recipients:</span> Data will not be transferred to 
                                    third parties, except under legal obligation or to technical service providers necessary for the 
                                    website's operation.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">User Rights:</span> You may exercise your rights of 
                                    access, rectification, deletion, limitation, and portability by sending an email to{' '}
                                    <a href="mailto:privacy@hipooloompa.com" className="text-teal-600 hover:text-teal-700 underline">
                                        privacy@hipooloompa.com
                                    </a>.
                                </li>
                            </ul>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                4. Intellectual and Industrial Property
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                The content of this website, including texts, trademarks (such as "HipooLoompa Green Tech"), logos, 
                                and designs, is protected by intellectual and industrial property rights. The use of the contact form 
                                does not grant the user any rights over them.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                5. Limitation of Liability
                            </h2>
                            <p className="text-stone-700 leading-relaxed mb-4">
                                HipooLoompa Green Tech shall not be liable for any damages or losses that may arise from:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Technical failures:</span> Interruptions, computer 
                                    viruses, breakdowns, or disconnections in the operational functioning of this electronic system.
                                </li>
                                <li className="text-stone-700">
                                    <span className="font-semibold text-teal-700">Misuse:</span> Inappropriate use of the form by 
                                    the user or unauthorized third parties.
                                </li>
                            </ul>
                        </div>

                        {/* Modifications */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                6. Modifications
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                We reserve the right to modify these terms and conditions at any time to adapt them to legislative 
                                developments or changes in our corporate policy. The user is recommended to review these terms periodically.
                            </p>
                        </div>

                        {/* Applicable Law */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                7. Applicable Law and Jurisdiction
                            </h2>
                            <p className="text-stone-700 leading-relaxed">
                                For the resolution of all disputes or issues related to this website or the activities developed therein, 
                                the legislation of Spain shall apply, to which the parties expressly submit, with the Courts and Tribunals 
                                of Madrid being competent for the resolution of all conflicts.
                            </p>
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