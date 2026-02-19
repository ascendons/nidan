"use client";

import { useState, Suspense, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, CheckCircle2, MapPin, Search, User, Phone, TestTube, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { tests, branches, companyDetails } from "@/data";

const availableTests = tests.map(test => test.name);

const areas = [
    "Adajan", "Vesu", "Varachha", "Katargam", "City Light", "Piplod", "Bhatar", "Athwa Lines"
];

function BookTestContent() {
    const searchParams = useSearchParams();
    const preSelectedTest = searchParams.get('test') || "";

    const [formData, setFormData] = useState<{
        name: string;
        mobile: string;
        tests: string[];
        collectionType: 'home' | 'lab';
        address: string;
        branch: string;
        date: string;
    }>({
        name: "",
        mobile: "91",
        tests: preSelectedTest ? [preSelectedTest] : [],
        collectionType: "home",
        address: "",
        branch: "",
        date: ""
    });

    const [isTestDropdownOpen, setIsTestDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsTestDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTest = (testName: string) => {
        setFormData(prev => {
            if (prev.tests.includes(testName)) {
                return { ...prev, tests: prev.tests.filter(t => t !== testName) };
            } else {
                return { ...prev, tests: [...prev.tests, testName] };
            }
        });
    };

    const removeTest = (testName: string) => {
        setFormData(prev => ({ ...prev, tests: prev.tests.filter(t => t !== testName) }));
    };

    const filteredTests = availableTests.filter(test =>
        test.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format Tests List
        const testList = formData.tests.length > 0
            ? formData.tests.map(t => `• ${t}`).join('\n')
            : 'None';

        // Format Location Details
        let locationHeader = "";
        let locationValue = "";

        if (formData.collectionType === 'home') {
            locationHeader = "🏠 *Home Collection Address:*";
            locationValue = formData.address;
        } else {
            locationHeader = "🏥 *Visiting Branch:*";
            locationValue = formData.branch;
        }

        // Construct Message
        const message = `*Health Checkup Booking Request* 🩺\n\n` +
            `*Patient Details:*\n` +
            `👤 Name: ${formData.name}\n` +
            `📱 Mobile: ${formData.mobile}\n\n` +
            `*Booking Information:*\n` +
            `🧪 *Selected Tests:*\n${testList}\n\n` +
            `📅 *Preferred Date:* ${formData.date}\n\n` +
            `${locationHeader}\n${locationValue}\n\n` +
            `--------------------------------\n` +
            `Sent via Nidan Lab Website 🌐`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${companyDetails.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-32 text-center rounded-b-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                    >
                        Book a <span className="text-primary">Test</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Fill the form below and confirm your booking via WhatsApp. We'll contact you within 30 minutes.
                    </p>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="-mt-20 pb-20 px-4">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Trust Badges */}
                        <div className="bg-blue-50/50 border-b border-blue-50 p-4 flex flex-wrap justify-center gap-6 text-sm font-semibold text-primary">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-success" /> 100% Secure
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-success" /> Quick Confirmation
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-success" /> Easy Booking
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-8">

                                {/* Personal Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <User size={20} className="text-primary" /> Personal Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="Enter full name"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+</span>
                                                <input
                                                    type="tel"
                                                    required
                                                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                    placeholder="91 98765 43210"
                                                    value={formData.mobile}
                                                    onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Test Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <TestTube size={20} className="text-primary" /> Test Selection
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative" ref={dropdownRef}>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Tests/Packages</label>

                                            {/* Custom Multi-Select Trigger */}
                                            <div
                                                className="w-full min-h-[50px] px-4 py-3 rounded-xl border border-gray-200 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 outline-none transition-all cursor-pointer bg-white relative"
                                                onClick={() => setIsTestDropdownOpen(!isTestDropdownOpen)}
                                            >
                                                <div className="flex flex-wrap gap-2 pr-8">
                                                    {formData.tests.length === 0 && (
                                                        <span className="text-gray-400 select-none py-0.5">Choose tests...</span>
                                                    )}
                                                    {formData.tests.map(test => (
                                                        <span key={test} className="bg-blue-50 text-primary text-sm font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                                                            {test}
                                                            <button
                                                                type="button"
                                                                onClick={(e) => { e.stopPropagation(); removeTest(test); }}
                                                                className="hover:bg-blue-100 rounded-full p-0.5 transition-colors"
                                                            >
                                                                <X size={12} />
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>
                                                <ChevronDown className={`absolute right-4 top-4 text-gray-400 transition-transform ${isTestDropdownOpen ? 'rotate-180' : ''}`} size={20} />
                                            </div>

                                            {/* Dropdown Menu */}
                                            <AnimatePresence>
                                                {isTestDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                                                    >
                                                        <div className="p-2 border-b border-gray-100 sticky top-0 bg-white z-10">
                                                            <div className="relative">
                                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search tests..."
                                                                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border-none outline-none text-sm focus:ring-2 focus:ring-primary/20"
                                                                    value={searchTerm}
                                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    autoFocus
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="max-h-[300px] overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                                            {filteredTests.length > 0 ? (
                                                                filteredTests.map(test => {
                                                                    const isSelected = formData.tests.includes(test);
                                                                    return (
                                                                        <div
                                                                            key={test}
                                                                            onClick={() => toggleTest(test)}
                                                                            className={`px-4 py-3 rounded-xl cursor-pointer text-sm font-medium transition-all flex items-center justify-between ${isSelected
                                                                                ? 'bg-blue-50 text-primary'
                                                                                : 'hover:bg-slate-50 text-gray-700'
                                                                                }`}
                                                                        >
                                                                            {test}
                                                                            {isSelected && <CheckCircle2 size={16} className="text-primary" />}
                                                                        </div>
                                                                    );
                                                                })
                                                            ) : (
                                                                <div className="p-4 text-center text-gray-400 text-sm">No tests found</div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                                            <div className="flex gap-4 p-1 bg-gray-50 rounded-xl border border-gray-100">
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, collectionType: 'home' })}
                                                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${formData.collectionType === 'home'
                                                        ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200'
                                                        : 'text-gray-500 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    <MapPin size={16} /> Home Collection
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, collectionType: 'lab' })}
                                                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${formData.collectionType === 'lab'
                                                        ? 'bg-white text-primary shadow-sm ring-1 ring-gray-200'
                                                        : 'text-gray-500 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    <MapPin size={16} /> Visit Lab
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Time */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Calendar size={20} className="text-primary" /> Date & Location
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                {formData.collectionType === 'home' ? 'Home Address' : 'Select Branch'}
                                            </label>

                                            {formData.collectionType === 'home' ? (
                                                <textarea
                                                    required
                                                    rows={1}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                                                    placeholder="Enter your full address"
                                                    value={formData.address}
                                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                                ></textarea>
                                            ) : (
                                                <select
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none bg-white"
                                                    value={formData.branch}
                                                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                                                    required
                                                >
                                                    <option value="" disabled>Choose a branch...</option>
                                                    {branches.map(branch => (
                                                        <option key={branch.id} value={branch.name}>{branch.name} - {branch.area}</option>
                                                    ))}
                                                </select>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                                            <input
                                                type="date"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                                value={formData.date}
                                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#25D366] hover:bg-[#20b85c] text-white py-4.5 rounded-xl font-black text-lg shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        Confirm Booking via WhatsApp
                                    </button>
                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        By clicking Confirm, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>

                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default function BookTest() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
            <BookTestContent />
        </Suspense>
    );
}
