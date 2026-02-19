"use client";

import { MapPin, Phone, Clock, Navigation, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { branches } from "@/data";

export default function Branches() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/city-fields.png')] opacity-20"></div>
                <div className="container-custom relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        Visit Our <span className="text-primary">Branches</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Conveniently located across Surat to serve you better. Walk in for a quick test or consultation.
                    </p>
                </div>
            </section>

            {/* Branches List */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="space-y-8">
                        {branches.map((branch, idx) => (
                            <motion.div
                                key={branch.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 lg:grid-cols-3 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Map/Image Placeholder */}
                                <div className="h-64 lg:h-auto relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                    <img
                                        src={branch.image}
                                        alt={branch.area}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                                        {branch.area} Branch
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                                <MapPin className="text-primary" /> {branch.area}
                                            </h3>
                                            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                                {branch.address}
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 px-6 py-4 rounded-xl shrink-0">
                                            <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                                <Clock size={18} /> Hours
                                            </div>
                                            <p className="text-slate-700 font-medium">7:00 AM - 9:00 PM</p>
                                            <p className="text-slate-400 text-xs mt-1">Open all 7 days</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
                                        <a
                                            href={branch.mapUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
                                        >
                                            <Navigation size={18} /> Get Directions
                                        </a>
                                        <a
                                            href={`tel:${branch.phone}`}
                                            className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2"
                                        >
                                            <Phone size={18} className="text-primary" /> Call Now
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Home Collection Promo */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-gradient-to-br from-primary to-blue-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">Can't Visit a Branch?</h2>
                            <p className="text-blue-100 text-xl mb-10">
                                We'll come to you! Book a home collection and get checked safely from the comfort of your home.
                            </p>
                            <Link
                                href="/home-collection"
                                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98]"
                            >
                                Book Home Collection <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
