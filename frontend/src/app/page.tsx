"use client";

import { Search, ShieldCheck, Clock, FlaskConical, Award, Phone, MapPin, ArrowRight, CheckCircle2, Factory, Monitor, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getPopularTests, branches, companyDetails } from "@/data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Get popular tests from central data
  const popularTests = getPopularTests().slice(0, 8).map(test => ({
    name: test.name,
    price: test.price,
    originalPrice: test.originalPrice,
    code: test.category
  }));

  const features = [
    { icon: MapPin, label: "Home Sample", desc: "Safe collection at your doorstep" },
    { icon: Monitor, label: "Digital Reports", desc: "Get reports on WhatsApp & Email" },
    { icon: ShieldCheck, label: "NABL Certified", desc: "Highest quality standards" },
    { icon: Users, label: "Expert Doctors", desc: "Qualified pathologist team" },
    { icon: Award, label: "Best Quality", desc: "State-of-the-art equipment" },
    { icon: Clock, label: "Fast Service", desc: "Same day report delivery" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] opacity-10"></div>
        <motion.div style={{ y: y1, x: -50 }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />
        <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10 mb-8 shadow-2xl hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                <ShieldCheck size={18} className="text-green-400 relative z-10" />
              </div>
              <span className="text-sm font-bold tracking-wide text-green-100">NABL Accredited Laboratory</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
            >
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Pathology</span> <br className="hidden md:block" />
              in <span className="text-primary relative inline-block">
                Surat
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-light"
            >
              Combining advanced technology with medical expertise to deliver accurate results. Book your test today for a healthier tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link href="/book-test" className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book a Test <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <a href={`https://wa.me/${companyDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
                <Phone size={20} className="text-green-400" /> WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Check Stats */}
      <div className="container-custom -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-6 md:p-10 border border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "50,000+", label: "Tests Conducted", icon: FlaskConical, color: "text-blue-500", bg: "bg-blue-50" },
            { number: "15,000+", label: "Happy Patients", icon: Users, color: "text-green-500", bg: "bg-green-50" },
            { number: "10+", label: "Years Experience", icon: Award, color: "text-orange-500", bg: "bg-orange-50" },
            { number: "24/7", label: "Support", icon: Clock, color: "text-purple-500", bg: "bg-purple-50" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center gap-3 group">
              <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={28} />
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.number}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Why Choose Nidan?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto text-xl"
            >
              We combine advanced technology with medical expertise to deliver results you can trust.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group cursor-default"
              >
                <div className="p-4 bg-slate-50 text-slate-600 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.label}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-primary font-bold tracking-widest uppercase mb-2 block"
              >
                Diagnostics
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black mb-4"
              >
                Popular Tests
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-slate-400 max-w-xl text-lg"
              >
                Most frequently booked diagnostic tests by our patients. High accuracy, affordable prices.
              </motion.p>
            </div>
            <Link href="/tests" className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl backdrop-blur-md transition-all border border-white/5">
              View All Tests <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-3xl p-6 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col"
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-slate-300 mb-4">{test.code}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">{test.name}</h3>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-2xl font-bold text-white">₹{test.price}</span>
                    <span className="text-sm text-slate-500 line-through">₹{test.originalPrice}</span>
                  </div>
                  <Link href={`/book-test?test=${test.name}`} className="bg-primary text-white p-3 rounded-xl hover:bg-white hover:text-primary transition-all shadow-lg shadow-black/20">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Collection Section */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Free Home Visit</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Lab Test <br /> at Home</h2>
                <p className="text-blue-100 text-xl mb-10 leading-relaxed max-w-lg">
                  Skip the queue and stay safe. Our certified phlebotomists will collect samples from your home at your preferred time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/home-collection" className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95">
                    Book Home Collection <ChevronRight size={20} />
                  </Link>
                </div>
              </motion.div>

              {/* Animated Illustration Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] hidden lg:block"
              >
                <div className="absolute top-10 right-10 z-20 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl max-w-[250px] animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 size={24} /></div>
                    <div className="font-bold">Safe Collection</div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full mb-2"></div>
                  <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                </div>

                <div className="absolute bottom-10 left-10 z-20 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl max-w-[250px] animate-bounce-reverse-slow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Clock size={24} /></div>
                    <div className="font-bold">On-Time Arrival</div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full w-full mb-2"></div>
                  <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                </div>

                <div className="absolute inset-20 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 rotate-6"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-slate-900 mb-4"
            >
              Our Branches
            </motion.h2>
            <p className="text-slate-500 text-xl">Visit our modern centers across Surat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all group duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-slate-900">{branch.area}</h3>
                  <div className="bg-slate-50 p-4 rounded-2xl text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                </div>
                <p className="text-slate-500 mb-8 font-medium text-lg leading-relaxed">{branch.address}</p>
                <div className="flex flex-col gap-4">
                  <a href="#" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors">
                    Get Directions
                  </a>
                  <a href={`tel:${branch.phone}`} className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-black shadow-lg shadow-black/20 transition-all">
                    <Phone size={20} /> Call Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
