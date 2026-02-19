'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    FlaskConical,
    Truck,
    Store,
    Calendar,
    User,
    MapPin,
    CheckCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { tests, branches, type Test, type Branch } from '@/data';

function BookingForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const testIdParam = searchParams.get('testId');

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        testId: testIdParam || '',
        type: 'VISIT_BRANCH',
        branchId: '',
        homeAddress: '',
        bookingDate: '',
        timeSlot: '',
        patientName: '',
        mobile: '',
        email: ''
    });

    useEffect(() => {
        if (testIdParam) {
            setFormData(prev => ({ ...prev, testId: testIdParam }));
            setStep(2);
        }
    }, [testIdParam]);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const [direction, setDirection] = useState(1);

    const paginate = (newStep: number) => {
        setDirection(newStep > step ? 1 : -1);
        setStep(newStep);
    };

    const handleSubmit = () => {
        // Static website - send booking details via WhatsApp instead of backend
        const selectedTest = tests.find(t => t.id.toString() === formData.testId);
        const selectedBranch = branches.find(b => b.id.toString() === formData.branchId);

        const bookingDetails = `New Booking Request%0a%0aPatient: ${formData.patientName}%0aMobile: ${formData.mobile}%0aEmail: ${formData.email}%0aTest: ${selectedTest?.name}%0aPrice: ₹${selectedTest?.price}%0aType: ${formData.type === 'HOME_COLLECTION' ? 'Home Collection' : 'Visit Branch'}%0a${formData.type === 'HOME_COLLECTION' ? `Address: ${formData.homeAddress}` : `Branch: ${selectedBranch?.name}`}%0aDate: ${formData.bookingDate}%0aTime: ${formData.timeSlot}`;

        // Open WhatsApp with booking details
        window.open(`https://wa.me/919876543210?text=${bookingDetails}`, '_blank');

        // Redirect to confirmation page
        setTimeout(() => {
            router.push(`/booking/confirmation?name=${formData.patientName}`);
        }, 1000);
    };

    const selectedTest = tests.find(t => t.id.toString() === formData.testId);

    if (loading) return (
        <div className="p-20 text-center flex flex-col items-center gap-4">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
                <FlaskConical size={48} className="text-primary" />
            </motion.div>
            <p className="text-gray-500 font-medium">Preparing your booking experience...</p>
        </div>
    );

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12">
                {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="flex items-center flex-1 last:flex-none">
                        <motion.div
                            initial={false}
                            animate={{
                                backgroundColor: step >= s ? "var(--primary)" : "#ffffff",
                                borderColor: step >= s ? "var(--primary)" : "#e5e7eb",
                                color: step >= s ? "#ffffff" : "#9ca3af",
                                scale: step === s ? 1.1 : 1
                            }}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 text-sm md:text-base"
                        >
                            {step > s ? <CheckCircle className="h-5 w-5 md:h-6 md:w-6" /> : s}
                        </motion.div>
                        {s < 5 && (
                            <div className="flex-1 h-1 mx-2 bg-gray-100 overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: step > s ? "100%" : "0%" }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="relative min-h-[500px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="card border-none shadow-2xl p-6 lg:p-8 bg-white rounded-[32px] lg:rounded-[40px] w-full"
                    >
                        {/* Step 1: Select Test */}
                        {step === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <FlaskConical className="text-primary" /> Select Diagnostic Test
                                </h2>
                                <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {tests.map(test => (
                                        <motion.div
                                            key={test.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setFormData({ ...formData, testId: test.id.toString() })}
                                            className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${formData.testId === test.id.toString() ? "border-primary bg-blue-50" : "border-gray-100 hover:border-blue-200"
                                                }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-lg">{test.name}</h4>
                                                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{test.category}</span>
                                                </div>
                                                <span className="text-xl font-black text-primary">₹{test.price}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <button
                                    disabled={!formData.testId}
                                    onClick={() => paginate(2)}
                                    className="btn-primary w-full mt-8 py-4 rounded-2xl disabled:opacity-50"
                                >
                                    Continue Selection
                                </button>
                            </div>
                        )}

                        {/* Step 2: Choose Collection Type */}
                        {step === 2 && (
                            <div className="text-center">
                                <h2 className="text-3xl font-black mb-10">Sample Collection Method</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <motion.div
                                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                        onClick={() => setFormData({ ...formData, type: 'HOME_COLLECTION' })}
                                        className={`p-10 border-2 rounded-[40px] cursor-pointer flex flex-col items-center gap-5 transition-all ${formData.type === 'HOME_COLLECTION' ? "border-primary bg-blue-50" : "border-gray-50 bg-white"
                                            }`}
                                    >
                                        <div className={`p-5 rounded-full ${formData.type === 'HOME_COLLECTION' ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                                            <Truck size={48} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Home Collection</h4>
                                            <p className="text-sm text-gray-500 mt-2 italic">Standard across Surat</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                        onClick={() => setFormData({ ...formData, type: 'VISIT_BRANCH' })}
                                        className={`p-10 border-2 rounded-[40px] cursor-pointer flex flex-col items-center gap-5 transition-all ${formData.type === 'VISIT_BRANCH' ? "border-primary bg-blue-50" : "border-gray-50 bg-white"
                                            }`}
                                    >
                                        <div className={`p-5 rounded-full ${formData.type === 'VISIT_BRANCH' ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                                            <Store size={48} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Visit Branch</h4>
                                            <p className="text-sm text-gray-500 mt-2 italic">3 convenient locations</p>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex gap-4 mt-12">
                                    <button onClick={() => paginate(1)} className="btn-outline flex-1 py-4 rounded-2xl">Back</button>
                                    <button onClick={() => paginate(3)} className="btn-primary flex-1 py-4 rounded-2xl">Continue</button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Location Details */}
                        {step === 3 && (
                            <div>
                                {formData.type === 'VISIT_BRANCH' ? (
                                    <>
                                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 underline decoration-primary decoration-4 underline-offset-8">
                                            Select Your Nearest Center
                                        </h2>
                                        <div className="space-y-4">
                                            {branches.map(branch => (
                                                <motion.div
                                                    key={branch.id}
                                                    whileHover={{ x: 10 }}
                                                    onClick={() => setFormData({ ...formData, branchId: branch.id.toString() })}
                                                    className={`p-6 border-2 rounded-2xl cursor-pointer ${formData.branchId === branch.id.toString() ? "border-primary bg-blue-50" : "border-gray-100"
                                                        }`}
                                                >
                                                    <h4 className="font-bold text-lg">{branch.name}</h4>
                                                    <p className="text-sm text-gray-500 mt-1">{branch.address}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 underline decoration-primary decoration-4 underline-offset-8">
                                            Collection Address in Surat
                                        </h2>
                                        <textarea
                                            placeholder="Street name, Building No, Area, Landmark..."
                                            className="w-full h-40 p-6 border-2 border-gray-100 rounded-[30px] focus:border-primary focus:outline-none transition-colors text-lg"
                                            value={formData.homeAddress}
                                            onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
                                        />
                                    </>
                                )}
                                <div className="flex gap-4 mt-10">
                                    <button onClick={() => paginate(2)} className="btn-outline flex-1 py-4 rounded-2xl">Back</button>
                                    <button
                                        disabled={formData.type === 'VISIT_BRANCH' ? !formData.branchId : !formData.homeAddress}
                                        onClick={() => paginate(4)}
                                        className="btn-primary flex-1 py-4 rounded-2xl disabled:opacity-50"
                                    >
                                        Select Slot
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Slot Selection */}
                        {step === 4 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-8">When should we schedule?</h2>
                                <div className="bg-gray-50 p-6 rounded-3xl mb-8">
                                    <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-tighter">DATE</p>
                                    <input
                                        type="date"
                                        className="w-full p-4 border-none bg-white rounded-2xl shadow-sm font-bold text-xl text-primary"
                                        min={new Date().toISOString().split('T')[0]}
                                        value={formData.bookingDate}
                                        onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                                    />
                                </div>

                                <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-tighter">AVAILABLE TIME SLOTS</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map(slot => (
                                        <motion.button
                                            key={slot}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                            className={`p-4 rounded-2xl text-sm font-bold transition-all ${formData.timeSlot === slot ? "bg-primary text-white shadow-lg shadow-blue-200" : "bg-white border-2 border-gray-100 text-gray-700 hover:border-blue-200"
                                                }`}
                                        >
                                            {slot}
                                        </motion.button>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-12">
                                    <button onClick={() => paginate(3)} className="btn-outline flex-1 py-4 rounded-2xl">Back</button>
                                    <button
                                        disabled={!formData.bookingDate || !formData.timeSlot}
                                        onClick={() => paginate(5)}
                                        className="btn-primary flex-1 py-4 rounded-2xl disabled:opacity-50"
                                    >
                                        Almost Done
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Patient Details */}
                        {step === 5 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-black mb-2">Patient Details</h2>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-primary"
                                            placeholder="e.g. Rahul Sharma"
                                            value={formData.patientName}
                                            onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase">Mobile Number</label>
                                            <input
                                                type="tel"
                                                className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-primary"
                                                placeholder="10 digit number"
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-400 uppercase">Email (Optional)</label>
                                            <input
                                                type="email"
                                                className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-primary"
                                                placeholder="For reports"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-blue-50/50 rounded-[40px] border-2 border-dashed border-blue-100 flex items-center justify-between">
                                    <div>
                                        <h4 className="font-extrabold text-blue-900 text-lg">{selectedTest?.name}</h4>
                                        <p className="text-blue-600 font-medium">Scheduled for {formData.bookingDate} at {formData.timeSlot}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-black text-primary">₹{selectedTest?.price}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button onClick={() => paginate(4)} className="btn-outline flex-1 py-4 rounded-2xl font-bold">Review</button>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        disabled={!formData.patientName || !formData.mobile}
                                        onClick={handleSubmit}
                                        className="btn-primary flex-[2] py-4 rounded-2xl text-xl shadow-xl shadow-blue-200"
                                    >
                                        Complete Booking
                                    </motion.button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
            <BookingForm />
        </Suspense>
    );
}
