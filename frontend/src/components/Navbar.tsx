"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin, Activity, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { companyDetails, branches } from "@/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Book Test", href: "/book-test" },
  { name: "Tests & Packages", href: "/tests" },
  { name: "Home Collection", href: "/home-collection" },
  { name: "Branches", href: "/branches" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary/95 text-white py-2.5 text-xs md:text-sm font-medium hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone size={14} /> {companyDetails.phone}
            </a>
            <a href={`https://wa.me/${companyDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-300 transition-colors">
              <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp Us
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={14} /> {branches.length} Branches in Surat
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} /> {companyDetails.workingHours}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-sm py-3"
          : "bg-white border-transparent py-4 md:py-5"
          }`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
              <Activity className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 leading-none group-hover:text-primary transition-colors">Nidan</span>
              <span className="text-xs font-semibold text-gray-500 tracking-wider">LABORATORY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20b85c] text-white p-2.5 rounded-lg transition-transform hover:scale-105 shadow-md shadow-green-500/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <Link
              href="/book-test"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Book Test
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="container-custom py-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${isActive
                        ? "bg-primary/10 text-primary pl-6"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </a>
                  <Link
                    href="/book-test"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
                  >
                    Book Test
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
