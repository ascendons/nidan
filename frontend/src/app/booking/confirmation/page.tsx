'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Calendar, Phone, House, MapPin, Share2, Download } from 'lucide-react';
import { motion } from 'framer-motion';

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const bookingId = searchParams.get('id') || 'NID-00000';
    const patientName = searchParams.get('name') || 'Valued Patient';

    const handleSaveReceipt = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: 'Nidan Lab - Booking Confirmation',
            text: `My booking with Nidan Lab is confirmed! Appointment ID: ${bookingId}`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(`Nidan Lab Booking ID: ${bookingId}`);
                alert("Booking ID copied to clipboard!");
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-20 text-center print:py-0 print:m-0">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex justify-center mb-8 print:hidden"
            >
                <div className="bg-green-100 p-8 rounded-full shadow-lg shadow-green-100/50">
                    <CheckCircle className="h-20 w-20 text-green-600" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="print:hidden"
            >
                <h1 className="text-3xl lg:text-5xl font-black mb-4 text-gray-900 tracking-tight">Booking Confirmed!</h1>
                <p className="text-lg lg:text-2xl text-gray-500 mb-12 px-4 lg:px-0">
                    Thank you, <span className="text-primary font-bold">{patientName}</span>.
                    Your health is now our priority.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card bg-blue-50 border-none shadow-2xl p-6 lg:p-10 rounded-[32px] lg:rounded-[50px] mb-16 relative overflow-hidden print:hidden"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 print:hidden">
                    <CheckCircle size={150} className="text-primary" />
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-black mb-4">Your Appointment ID</p>
                <h2 className="text-4xl lg:text-7xl font-black text-primary mb-10 tracking-tighter print:text-5xl break-all">{bookingId}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-sm border border-blue-100"
                    >
                        <div className="bg-blue-50 p-2 rounded-xl">
                            <Calendar className="text-primary" size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase">Status</p>
                            <p className="font-bold text-gray-700">Scheduled</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-sm border border-blue-100"
                    >
                        <div className="bg-blue-50 p-2 rounded-xl">
                            <Phone className="text-primary" size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase">Support</p>
                            <p className="font-bold text-gray-700">+91 98765 43210</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex gap-3 justify-center mt-12 pt-8 border-t border-blue-200/50 print:hidden">
                    <button
                        onClick={handleSaveReceipt}
                        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-primary transition-colors"
                    >
                        <Download size={18} /> Save Receipt
                    </button>
                    <span className="text-blue-200">|</span>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-primary transition-colors"
                    >
                        <Share2 size={18} /> Share Details
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center print:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link href="/" className="btn-primary px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-200">
                    <House size={24} /> Return to Home
                </Link>
                <Link href="/tests" className="btn-outline px-10 py-5 rounded-2xl text-lg font-bold bg-white">
                    Book More Tests
                </Link>
            </motion.div>

            {/* Print-only Receipt Template */}
            <div className="hidden print:block text-left p-8 border-2 border-gray-200 rounded-3xl max-w-xl mx-auto mt-10">
                <div className="flex justify-between items-start mb-10 border-b-2 border-gray-100 pb-6">
                    <div>
                        <h1 className="text-3xl font-black text-primary">Nidan Pathology Lab</h1>
                        <p className="text-sm text-gray-500">Accurate Results. Trusted Care.</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-400 uppercase">Receipt Date</p>
                        <p className="font-bold">{new Date().toLocaleDateString('en-IN')}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Patient Name</p>
                            <p className="text-xl font-bold text-gray-800">{patientName}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Appointment ID</p>
                            <p className="text-xl font-black text-primary">{bookingId}</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 text-center">Important Instructions</p>
                        <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 italic">
                            <li>Please present this digital/printed receipt at the center.</li>
                            <li>For home collection, please keep the testing area ready.</li>
                            <li>Reports will be shared via Whatsapp/Email within 24 hours.</li>
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase">
                        <p>Support: +91 98765 43210</p>
                        <p>nidanlabsurat.com</p>
                    </div>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-gray-400 text-sm italic max-w-md mx-auto leading-relaxed print:hidden"
            >
                A confirmation SMS and Email have been dispatched. Our technician will contact you shortly if you've selected home collection.
            </motion.p>
        </div>
    );
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Loading confirmation...</div>}>
            <ConfirmationContent />
        </Suspense>
    );
}
