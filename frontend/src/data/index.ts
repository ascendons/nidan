/**
 * Central Data File - Nidan Laboratory
 *
 * Edit this file to update tests, packages, and branch information
 * across the entire website.
 */

export interface Test {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    parameters: number;
    tat: string; // Turnaround time
    category: string;
    popular: boolean;
    fastingRequired: boolean;
}

export interface Branch {
    id: number;
    name: string;
    area: string;
    address: string;
    phone: string;
    mapUrl: string;
    image: string;
}


// ============================================
// COMPANY DETAILS
// ============================================

export const companyDetails = {
    name: "Nidan Laboratory",
    phone: "+91 7046251043",
    whatsapp: "+91 7046251043",
    email: "pankajpream524@gmail.com",
    address: "A/107, swapna Srushti Complex, Beside Sai Baba Temple, Near I Mata Chowk, Parvat Patiya, Surat 395010",
    googleMapsUrl: "https://www.google.com/maps/place/Nidan+Laboratory/@21.1910385,72.8568552,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04fce9fd5de29:0xa006218c5056e7aa!8m2!3d21.1910386!4d72.8617208!16s%2Fg%2F11qyw57b5q?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
    workingHours: "7:00 AM - 9:00 PM"
};

// ============================================
// INDIVIDUAL TESTS
// ============================================

export const individualTests: Test[] = [
    // Blood Studies
    {
        id: 1,
        name: "Complete Blood Count (CBC)",
        description: "Evaluates overall health and detects a wide range of disorders, including anemia, infection and leukemia.",
        price: 350,
        originalPrice: 450,
        parameters: 24,
        tat: "Same Day",
        category: "Blood Studies",
        popular: true,
        fastingRequired: false
    },

    // Thyroid
    {
        id: 2,
        name: "Thyroid Profile (Total)",
        description: "Measures T3, T4, and TSH levels to evaluate thyroid function.",
        price: 550,
        originalPrice: 800,
        parameters: 3,
        tat: "Same Day",
        category: "Thyroid",
        popular: true,
        fastingRequired: false
    },

    // Heart
    {
        id: 3,
        name: "Lipid Profile (Mini)",
        description: "Measures cholesterol and triglycerides to assess heart health risk.",
        price: 600,
        originalPrice: 900,
        parameters: 5,
        tat: "Same Day",
        category: "Heart",
        popular: false,
        fastingRequired: true
    },

    // Diabetes
    {
        id: 4,
        name: "Diabetes Screening (HbA1c & Fasting Glucose)",
        description: "Gold standard test for diabetes screening and monitoring.",
        price: 499,
        originalPrice: 750,
        parameters: 2,
        tat: "Same Day",
        category: "Diabetes",
        popular: true,
        fastingRequired: true
    },
    {
        id: 9,
        name: "HbA1c",
        description: "Measures average blood sugar levels over the past 2-3 months for diabetes management.",
        price: 499,
        originalPrice: 750,
        parameters: 1,
        tat: "Same Day",
        category: "Diabetes",
        popular: true,
        fastingRequired: false
    },

    // Vitamins
    {
        id: 6,
        name: "Vitamin D & B12 Combo",
        description: "Essential screenings for bone health and nerve function.",
        price: 1200,
        originalPrice: 2200,
        parameters: 2,
        tat: "24 Hours",
        category: "Vitamins",
        popular: false,
        fastingRequired: false
    },
    {
        id: 10,
        name: "Vitamin D",
        description: "Measures vitamin D levels essential for bone health and immunity.",
        price: 800,
        originalPrice: 1500,
        parameters: 1,
        tat: "24 Hours",
        category: "Vitamins",
        popular: true,
        fastingRequired: false
    },
    {
        id: 11,
        name: "Vitamin B12",
        description: "Measures B12 levels essential for nerve health and blood cell formation.",
        price: 800,
        originalPrice: 1500,
        parameters: 1,
        tat: "24 Hours",
        category: "Vitamins",
        popular: true,
        fastingRequired: false
    },

    // Liver
    {
        id: 7,
        name: "Liver Function Test (LFT)",
        description: "Screening for liver inflammation and damage.",
        price: 700,
        originalPrice: 1000,
        parameters: 11,
        tat: "Same Day",
        category: "Liver",
        popular: false,
        fastingRequired: true
    },

    // Kidney
    {
        id: 8,
        name: "Kidney Function Test (KFT)",
        description: "Assessment of kidney health including Creatinine and Urea.",
        price: 750,
        originalPrice: 1100,
        parameters: 9,
        tat: "Same Day",
        category: "Kidney",
        popular: false,
        fastingRequired: true
    }
];

// ============================================
// HEALTH PACKAGES
// ============================================

export const packages: Test[] = [
    {
        id: 100,
        name: "Basic Health Checkup",
        description: "Essential health screening including CBC, Blood Sugar, and Lipid Profile.",
        price: 999,
        originalPrice: 1999,
        parameters: 32,
        tat: "Same Day",
        category: "Packages",
        popular: true,
        fastingRequired: true
    },
    {
        id: 101,
        name: "Comprehensive Full Body Checkup",
        description: "Extensive health evaluation including Liver, Kidney, Thyroid, Heart, and Vitamin profiles.",
        price: 2499,
        originalPrice: 4999,
        parameters: 75,
        tat: "Next Day",
        category: "Packages",
        popular: true,
        fastingRequired: true
    },
    {
        id: 102,
        name: "Women's Health Package",
        description: "Complete health evaluation designed for women including hormonal and nutritional screening.",
        price: 3499,
        originalPrice: 6999,
        parameters: 85,
        tat: "Next Day",
        category: "Packages",
        popular: true,
        fastingRequired: true
    },
    {
        id: 103,
        name: "Senior Citizen Health Package",
        description: "Comprehensive screening for age-related health concerns including cardiac and bone health.",
        price: 4499,
        originalPrice: 8999,
        parameters: 95,
        tat: "Next Day",
        category: "Packages",
        popular: true,
        fastingRequired: true
    }
];

// Combined array of all tests and packages
export const tests: Test[] = [...individualTests, ...packages];

// ============================================
// BRANCH LOCATIONS
// ============================================

export const branches: Branch[] = [
    {
        id: 1,
        name: "Nidan Lab - Parvat Patiya",
        area: "Parvat Patiya",
        address: "A/107, swapna Srushti Complex, Beside Sai Baba Temple, Near I Mata Chowk, Parvat Patiya, Surat - 395010",
        phone: "+91 7046251043",
        mapUrl: "https://www.google.com/maps/place/Nidan+Laboratory/@21.1910385,72.8568552,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04fce9fd5de29:0xa006218c5056e7aa!8m2!3d21.1910386!4d72.8617208!16s%2Fg%2F11qyw57b5q?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        name: "Nidan Lab - Dindoli",
        area: "Dindoli",
        address: "209, Swastik Square, navagam Sabji Mandi, Navagam Dindoli, Surat - 394210",
        phone: "+91 98765 43211",
        mapUrl: "https://www.google.com/maps/place/Swastik+Rd,+Royal+Star+Town+ship,+Dindoli,+Surat,+Gujarat+394210/@21.1525107,72.8750993,17z/data=!3m1!4b1!4m6!3m5!1s0x3be050221d14838d:0xc3c496f48cf26f0f!8m2!3d21.1525107!4d72.8776796!16s%2Fg%2F11fxdxmp2c?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all individual tests (excluding packages)
 */
export const getIndividualTests = () => {
    return individualTests;
};

/**
 * Get only health packages
 */
export const getPackages = () => {
    return packages;
};

/**
 * Get popular tests only
 */
export const getPopularTests = () => {
    return tests.filter(test => test.popular);
};

/**
 * Get tests by category
 */
export const getTestsByCategory = (category: string) => {
    if (category === "All") return tests;
    return tests.filter(test => test.category === category);
};

/**
 * Get all unique categories
 */
export const getCategories = () => {
    const categories = ["All", ...new Set(tests.map(test => test.category))];
    return categories;
};

/**
 * Get test by ID
 */
export const getTestById = (id: number) => {
    return tests.find(test => test.id === id);
};

/**
 * Get branch by ID
 */
export const getBranchById = (id: number) => {
    return branches.find(branch => branch.id === id);
};
