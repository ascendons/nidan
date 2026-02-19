"use client";

import { ShieldCheck, Award, Users, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-slate-900 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light font-bold text-sm tracking-widest uppercase mb-6 border border-primary/30">
                            Since 2010
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
                            Redefining <span className="text-primary">Diagnostic</span> Excellence
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            At Nidan Laboratory, we combine cutting-edge technology with human expertise to deliver precise, timely, and reliable diagnostic services to the people of Surat.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Years Experience", value: "10+", icon: Clock },
                            { label: "Happy Patients", value: "50k+", icon: Users },
                            { label: "Tests Conducted", value: "1M+", icon: ShieldCheck },
                            { label: "Expert Doctors", value: "15+", icon: Award }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                                Committed to <br /><span className="text-primary">Accuracy & Care</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Founded with a vision to make high-quality diagnostics accessible to everyone, Nidan Laboratory has grown into one of Surat's most trusted pathology centers.
                                </p>
                                <p>
                                    We believe that behind every sample is a life, a family, and a story. That's why we adhere to the strictest quality controls, ensuring that every report we generate is 100% accurate.
                                </p>
                                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "NABL Accredited Lab",
                                        "Fully Automated Analyzers",
                                        "Barcode Sample Tracking",
                                        "Double-Check Verification"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 font-semibold text-gray-800">
                                            <CheckCircle2 className="text-success shrink-0" size={20} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-3 opacity-10"></div>
                            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
                                    alt="Laboratory Equipment"
                                    className="rounded-[1.5rem] w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container-custom text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">Why Choose Nidan?</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        We don't just deliver reports; we deliver peace of mind through our comprehensive diagnostic services.
                    </p>
                </div>

                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Advanced Technology",
                                desc: "Equipped with the latest automated analyzers from Roche, Siemens, and Sysmex for precise results.",
                                color: "bg-blue-50"
                            },
                            {
                                title: "Home Collection",
                                desc: "Convenient sample collection from the comfort of your home by our trained phlebotomists.",
                                color: "bg-green-50"
                            },
                            {
                                title: "Digital Reports",
                                desc: "Access your reports online or via WhatsApp as soon as they are ready, saving you time and effort.",
                                color: "bg-orange-50"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className={`p-10 rounded-3xl ${feature.color} hover:shadow-lg transition-shadow border border-gray-100`}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-primary opacity-20"></div>
                <div className="container-custom text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to prioritize your health?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Book a test today and experience the Nidan difference. Accurate results, delivered on time.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/book-test" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all">
                            Book a Test
                        </Link>
                        <Link href="/contact" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all flex items-center gap-2">
                            Contact Us <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
