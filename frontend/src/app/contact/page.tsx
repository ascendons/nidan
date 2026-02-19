"use client";

import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { companyDetails } from "@/data";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Name: ${formData.name}%0aMobile: ${formData.mobile}%0aEmail: ${formData.email}%0aMessage: ${formData.message}`;
        window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Contact <span className="text-primary">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        Have questions? We're here to help. Reach out via WhatsApp, call, or send us a message.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left Column: Contact Info */}
                            <div className="p-8 lg:p-12 bg-white">
                                <div className="space-y-8">
                                    {/* Call Card */}
                                    <div className="flex gap-6 p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow">
                                        <div className="bg-primary text-white p-4 rounded-xl h-fit">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                            <p className="text-primary font-bold text-lg mb-1">{companyDetails.phone}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Clock size={14} />
                                                <span>{companyDetails.workingHours} (All Days)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WhatsApp Card */}
                                    <div className="flex gap-6 p-6 rounded-2xl bg-green-50 border border-green-100 hover:shadow-md transition-shadow">
                                        <div className="bg-[#25D366] text-white p-4 rounded-xl h-fit">
                                            <MessageCircle size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Us</h3>
                                            <p className="text-[#25D366] font-bold text-lg mb-1">{companyDetails.whatsapp}</p>
                                            <p className="text-sm text-gray-500">Quick response guaranteed</p>
                                        </div>
                                    </div>

                                    {/* Email Card */}
                                    <div className="flex gap-6 p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
                                        <div className="bg-secondary text-white p-4 rounded-xl h-fit">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                            <p className="text-secondary font-bold text-lg mb-1">{companyDetails.email}</p>
                                            <p className="text-sm text-gray-500">We respond within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="p-8 lg:p-12 bg-gray-50">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="98765 43210"
                                                    value={formData.mobile}
                                                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email (Optional)</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        <Send size={20} />
                                        Send via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branches Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Visit Our Branches</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Walk into any of our modern collection centers for a quick and comfortable experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { area: "Adajan", address: "101, Sahjanand Complex, Adajan Patia, Surat - 395009", phone: "0261-1234567" },
                            { area: "Vesu", address: "G-4, Western Arena, Near Star Bazaar, Vesu, Surat - 395007", phone: "0261-2345678" },
                            { area: "Varachha", address: "SHOP-2, Apple Square, Yogi Chowk, Varachha, Surat - 395010", phone: "0261-3456789" }
                        ].map((branch, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    <MapPin size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{branch.area}</h3>
                                <p className="text-gray-500 mb-6 leading-relaxed h-12">{branch.address}</p>
                                <div className="pt-6 border-t border-gray-100 flex items-center gap-3 text-gray-700 font-semibold">
                                    <Phone size={18} className="text-primary" />
                                    {branch.phone}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
