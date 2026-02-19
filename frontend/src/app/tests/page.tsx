"use client";

import { Search, Filter, Info, ShoppingCart, Check, ChevronRight, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { tests as allTests, getCategories } from "@/data";

const categories = getCategories();

export default function Tests() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewType, setViewType] = useState<"tests" | "packages">("tests");
    const scrollRef = useRef<HTMLDivElement>(null);

    const filteredTests = allTests.filter(test => {
        const matchesCategory = activeCategory === "All" || test.category === activeCategory;
        const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            test.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = viewType === "packages" ? test.category === "Packages" : test.category !== "Packages";

        // For now showing all items mixed if search is active or category is specifically selected, otherwise filter by type
        if (searchQuery || activeCategory !== "All") return matchesCategory && matchesSearch;
        return matchesCategory && matchesSearch && matchesType;
    });

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header Section */}
            <section className="bg-slate-900 pt-32 pb-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Tests & <span className="text-primary">Health Packages</span></h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                        Official Nidan Laboratory Tests. Precise Results, Trusted Care.
                    </p>

                    {/* Type Toggles */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/5 p-1 rounded-xl backdrop-blur-md inline-flex border border-white/10">
                            <button
                                onClick={() => { setViewType("tests"); setActiveCategory("All"); }}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewType === "tests" ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                Individual Tests
                            </button>
                            <button
                                onClick={() => { setViewType("packages"); setActiveCategory("All"); }}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${viewType === "packages" ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                Health Packages
                            </button>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto relative group px-4 md:px-0">
                        <div className="absolute inset-y-0 left-4 md:left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-4 rounded-2xl border-0 text-gray-900 shadow-2xl shadow-blue-900/20 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-base leading-relaxed transition-all"
                            placeholder="Search for test name, condition, or parameter..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Filter Categories Pill Scroll */}
            <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm py-3 md:top-20">
                <div className="container-custom overflow-x-auto scrollbar-hide" ref={scrollRef}>
                    <div className="flex gap-2 min-w-max px-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${activeCategory === cat
                                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-custom mt-8">
                <div className="flex flex-col">

                    <div className="mb-4 flex justify-between items-center px-2">
                        <h2 className="text-xl font-bold text-gray-900">
                            {activeCategory === "All" ? (viewType === "tests" ? "All Individual Tests" : "Health Packages") : `${activeCategory} Tests`}
                        </h2>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {filteredTests.length} results
                        </span>
                    </div>

                    {filteredTests.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                            <div className="bg-gray-50 text-gray-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No tests found</h3>
                            <p className="text-gray-500">Try adjusting your search or category filter.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                                className="mt-6 text-primary font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredTests.map((test) => (
                                <motion.div
                                    key={test.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all group flex flex-col h-full relative"
                                >
                                    {test.popular && (
                                        <div className="absolute top-0 right-0 p-3">
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wide border border-orange-100">
                                                <Star size={10} fill="currentColor" /> Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-3 pr-16 min-h-[50px]">
                                        <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                            {test.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed">
                                        {test.description}
                                    </p>

                                    <div className="mt-auto space-y-3">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-50 text-slate-500 text-[10px] font-semibold border border-slate-100">
                                                <span className="w-1 h-1 rounded-full bg-blue-400"></span> {test.parameters} Parameters
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-50 text-slate-500 text-[10px] font-semibold border border-slate-100">
                                                <span className="w-1 h-1 rounded-full bg-green-400"></span> {test.tat}
                                            </span>
                                        </div>

                                        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-lg font-bold text-gray-900">₹{test.price}</span>
                                                {test.originalPrice && (
                                                    <span className="text-xs text-gray-400 line-through">₹{test.originalPrice}</span>
                                                )}
                                            </div>
                                            <Link
                                                href={`/book-test?test=${test.name}`}
                                                className="bg-white text-primary hover:bg-primary hover:text-white border border-primary px-4 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1"
                                            >
                                                Book <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Helper component for ArrowRight
const ArrowRight = ({ size }: { size: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);
