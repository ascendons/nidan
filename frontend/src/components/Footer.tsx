"use client";

import Link from "next/link";
import { Activity, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { companyDetails } from "@/data";

export default function Footer() {
    const [year, setYear] = useState(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-slate-900 text-slate-300 py-16 print:hidden font-sans">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand & About */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="bg-primary p-2 rounded-full shadow-lg shadow-blue-900/20 group-hover:bg-primary-hover transition-colors">
                                <Activity className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Nidan Laboratory
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Trusted pathology laboratory in Surat with 10+ years of excellence. NABL accredited with state-of-the-art facilities and expert pathologists.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <Clock size={18} className="text-primary shrink-0" />
                            <span>Open: {companyDetails.workingHours} (All Days)</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Book a Test", href: "/book-test" },
                                { name: "Tests & Packages", href: "/tests" },
                                { name: "Home Collection", href: "/home-collection" },
                                { name: "Our Branches", href: "/branches" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Popular Tests */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Popular Tests</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Complete Blood Count", href: "/tests/cbc" },
                                { name: "Thyroid Profile", href: "/tests/thyroid" },
                                { name: "Lipid Profile", href: "/tests/lipid" },
                                { name: "Liver Function Test", href: "/tests/lft" },
                                { name: "Kidney Function Test", href: "/tests/kft" },
                                { name: "Vitamin D & B12", href: "/tests/vitamins" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li>
                                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                                    <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-slate-500 uppercase font-semibold mb-0.5">Call Us</span>
                                        <span className="text-white text-sm font-medium">{companyDetails.phone}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                    <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-[#25D366] transition-colors text-[#25D366] group-hover:text-white">
                                        <Phone size={18} /> {/* Using Phone icon as placeholder for WhatsApp if specific icon not available */}
                                    </div>
                                    <div>
                                        <span className="block text-xs text-slate-500 uppercase font-semibold mb-0.5">WhatsApp</span>
                                        <span className="text-white text-sm font-medium">Chat with us</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@nidanlab.com" className="flex items-start gap-3 group">
                                    <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-slate-500 uppercase font-semibold mb-0.5">Email Us</span>
                                        <span className="text-white text-sm font-medium">{companyDetails.email}</span>
                                    </div>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="bg-slate-800 p-2 rounded-lg text-primary shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-500 uppercase font-semibold mb-0.5">Visit Us</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">
                                        {companyDetails.address}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {year} Nidan Laboratory, Surat. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
