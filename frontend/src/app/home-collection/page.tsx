"use client";

import { Calendar, Clock, MapPin, TestTube, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { companyDetails } from "@/data";

export default function HomeCollection() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "91",
        address: "",
        date: "",
        time: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*Home Collection Request* 🏠\n\n` +
            `*Patient Details:*\n` +
            `👤 Name: ${formData.name}\n` +
            `📱 Mobile: ${formData.mobile}\n\n` +
            `*Location Details:*\n` +
            `📍 Address: ${formData.address}\n\n` +
            `*Preferred Slot:*\n` +
            `📅 Date: ${formData.date}\n` +
            `⏰ Time: ${formData.time}\n\n` +
            `--------------------------------\n` +
            `Sent via Nidan Lab Website 🌐`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${companyDetails.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* ... (Hero and Process sections remain unchanged) ... */}

            {/* Booking Form Section */}
            <section id="booking-form" className="py-24 bg-slate-50">
                <div className="container-custom">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-16 bg-primary text-white flex flex-col justify-center">
                            <h2 className="text-3xl lg:text-4xl font-black mb-6">Schedule Your Visit</h2>
                            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                                Fill in your details and we'll get back to you within 15 minutes to confirm your slot.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: "Zero Collection Charges for orders above ₹500", icon: CheckCircle2 },
                                    { label: "NABL Accredited Labs", icon: CheckCircle2 },
                                    { label: "Vaccinated Phlebotomists", icon: CheckCircle2 },
                                    { label: "Temperature Controlled Transport", icon: CheckCircle2 }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 lg:p-16 bg-white">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Patient Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900"
                                        placeholder="Enter full name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+</span>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900"
                                                placeholder="91 98765 43210"
                                                value={formData.mobile}
                                                onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Slot Preference</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <input
                                                type="date"
                                                required
                                                className="w-full px-2 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900"
                                                value={formData.date}
                                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            />
                                            <input
                                                type="time"
                                                required
                                                className="w-full px-2 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900"
                                                value={formData.time}
                                                onChange={e => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Address</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-900 resize-none"
                                        placeholder="House No., Building Name, Street, Landmark, Area..."
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] hover:bg-[#20b85c] text-white px-8 py-4.5 rounded-xl font-bold text-lg shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    Confirm Home Visit via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
