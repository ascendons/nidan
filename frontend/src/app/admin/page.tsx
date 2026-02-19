'use client';

import { useState } from 'react';
import {
    LayoutDashboard,
    FlaskConical,
    Settings,
    LogOut,
    Search,
    CheckCircle2,
    XCircle,
    Clock,
    Edit,
    Trash2,
    Plus,
    AlertCircle
} from 'lucide-react';
import { tests } from '@/data';

interface Booking {
    id: number;
    bookingId: string;
    patientName: string;
    mobile: string;
    type: string;
    status: string;
    bookingDate: string;
    timeSlot: string;
    test: { name: string };
}

// Static demo data - no backend integration
const STATIC_BOOKINGS: Booking[] = [
    {
        id: 1,
        bookingId: "NID001",
        patientName: "Rahul Sharma",
        mobile: "+91 98765 43210",
        type: "HOME_COLLECTION",
        status: "PENDING",
        bookingDate: "2024-02-20",
        timeSlot: "9:00 AM",
        test: { name: "Complete Blood Count (CBC)" }
    },
    {
        id: 2,
        bookingId: "NID002",
        patientName: "Priya Patel",
        mobile: "+91 98765 43211",
        type: "VISIT_BRANCH",
        status: "COMPLETED",
        bookingDate: "2024-02-19",
        timeSlot: "10:00 AM",
        test: { name: "Thyroid Profile (Total)" }
    },
    {
        id: 3,
        bookingId: "NID003",
        patientName: "Amit Kumar",
        mobile: "+91 98765 43212",
        type: "HOME_COLLECTION",
        status: "PENDING",
        bookingDate: "2024-02-21",
        timeSlot: "11:00 AM",
        test: { name: "Lipid Profile (Mini)" }
    }
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('bookings');
    const [bookings] = useState<Booking[]>(STATIC_BOOKINGS);
    const [loading] = useState(false);

    const updateStatus = (id: number, status: string) => {
        alert("This is a static demo. No backend integration available. Status updates are disabled.");
    };

    const deleteTest = (id: number) => {
        alert("This is a static demo. No backend integration available. Delete operations are disabled.");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Static Demo Notice */}
            <div className="fixed top-0 left-0 right-0 bg-amber-50 border-b border-amber-200 px-4 py-3 z-50">
                <div className="flex items-center justify-center gap-2 text-amber-800">
                    <AlertCircle size={18} />
                    <p className="text-sm font-semibold">
                        Static Demo Mode - This admin dashboard displays sample data only. No backend integration available.
                    </p>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:block mt-12">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-extrabold text-primary uppercase tracking-wider">Lab Admin</h2>
                </div>
                <nav className="p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'bookings' ? "bg-primary text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-100"
                            }`}
                    >
                        <LayoutDashboard size={20} /> Bookings
                    </button>
                    <button
                        onClick={() => setActiveTab('tests')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${activeTab === 'tests' ? "bg-primary text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-100"
                            }`}
                    >
                        <FlaskConical size={20} /> Manage Tests
                    </button>
                    <div className="pt-10">
                        <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all">
                            <LogOut size={20} /> Logout
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto mt-12">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {activeTab === 'bookings' ? "Manage Appointments" : "Test Catalog"}
                    </h1>
                    <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                        Today: {new Date().toLocaleDateString()}
                    </div>
                </header>

                {loading ? (
                    <div className="text-center py-20">Loading data...</div>
                ) : (
                    <>
                        {activeTab === 'bookings' && (
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                                        <tr>
                                            <th className="px-6 py-4">Booking ID</th>
                                            <th className="px-6 py-4">Patient</th>
                                            <th className="px-6 py-4">Test</th>
                                            <th className="px-6 py-4">Schedule</th>
                                            <th className="px-6 py-4">Type</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {bookings.map(book => (
                                            <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-primary">{book.bookingId}</td>
                                                <td className="px-6 py-4">
                                                    <div className="font-bold">{book.patientName}</div>
                                                    <div className="text-xs text-gray-500">{book.mobile}</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm">{book.test.name}</td>
                                                <td className="px-6 py-4 text-sm">
                                                    <div>{book.bookingDate}</div>
                                                    <div className="text-xs text-primary font-medium">{book.timeSlot}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded text-[10px] font-black ${book.type === 'HOME_COLLECTION' ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                                                        }`}>
                                                        {book.type.replace('_', ' ')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`flex items-center gap-1 text-sm font-bold ${book.status === 'COMPLETED' ? "text-green-600" :
                                                            book.status === 'CANCELLED' ? "text-red-500" : "text-amber-500"
                                                        }`}>
                                                        {book.status === 'COMPLETED' && <CheckCircle2 size={14} />}
                                                        {book.status === 'CANCELLED' && <XCircle size={14} />}
                                                        {book.status === 'PENDING' && <Clock size={14} />}
                                                        {book.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => updateStatus(book.id, 'SAMPLE_COLLECTED')}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg title='Mark Sample Collected'"
                                                        >
                                                            <Activity className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(book.id, 'COMPLETED')}
                                                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg title='Complete'"
                                                        >
                                                            <CheckCircle2 className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => updateStatus(book.id, 'CANCELLED')}
                                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg title='Cancel'"
                                                        >
                                                            <XCircle className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'tests' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-gray-100">
                                    <div className="relative w-96">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="text" placeholder="Search tests..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-1 focus:ring-primary" />
                                    </div>
                                    <button className="btn-primary flex items-center gap-2">
                                        <Plus size={20} /> Add New Test
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {tests.map(test => (
                                        <div key={test.id} className="card border-none flex flex-col group">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-blue-50 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase">{test.category}</span>
                                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                                                    <button onClick={() => deleteTest(test.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-lg mb-1">{test.name}</h4>
                                            <p className="text-2xl font-black text-primary mb-4">₹{test.price}</p>
                                            <div className="mt-auto flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-xl font-medium">
                                                <FlaskConical size={14} className="text-primary" />
                                                Fasting: <span className={test.fastingRequired ? "text-orange-600" : "text-green-600"}>{test.fastingRequired ? "Yes" : "No"}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

function Activity({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}
