# 📊 Data Management Guide

## Overview

All tests, packages, and branch information are centrally managed in one file:

```
src/data/index.ts
```

**Any changes you make to this file will automatically reflect across the entire website.**

---

## 🧪 Managing Individual Tests

### Adding a New Test

Open `src/data/index.ts` and add a new test object to the `individualTests` array:

```typescript
{
    id: 15,  // Use a unique ID
    name: "Iron Profile",
    description: "Measures iron levels and iron-binding capacity in blood.",
    price: 650,
    originalPrice: 950,
    parameters: 4,
    tat: "Same Day",
    category: "Blood Studies",  // Choose from existing categories or create new
    popular: false,  // Set to true to show on homepage
    fastingRequired: true
}
```

### Available Categories for Individual Tests

- `"Blood Studies"`
- `"Thyroid"`
- `"Heart"`
- `"Diabetes"`
- `"Vitamins"`
- `"Liver"`
- `"Kidney"`

You can create new categories by simply using a new name - the website will automatically detect and display them!

---

## 📦 Managing Health Packages

### Adding a New Package

Open `src/data/index.ts` and add a new package object to the `packages` array:

```typescript
{
    id: 104,  // Use IDs 100+ for packages (to avoid conflicts)
    name: "Executive Health Package",
    description: "Premium health package with advanced screenings for busy professionals.",
    price: 5999,
    originalPrice: 12999,
    parameters: 120,
    tat: "2 Days",
    category: "Packages",  // Always keep as "Packages"
    popular: true,
    fastingRequired: true
}
```

### Editing a Package

Find the package in the `packages` array and modify:

```typescript
{
    id: 100,
    name: "Basic Health Checkup",
    price: 899,  // Changed from 999
    originalPrice: 1999,
    // ... other fields
}
```

### Package ID Convention

- **Individual Tests**: Use IDs 1-99
- **Health Packages**: Use IDs 100+

This helps keep them organized and prevents ID conflicts!

### Editing an Existing Test

Find the test by its ID or name and modify any fields:

```typescript
{
    id: 1,
    name: "Complete Blood Count (CBC)",
    price: 299,  // Changed from 350
    originalPrice: 450,
    // ... other fields
}
```

### Deleting a Test

Simply remove the entire test object from the array or comment it out:

```typescript
// {
//     id: 1,
//     name: "Complete Blood Count (CBC)",
//     ...
// }
```

---

## 🏥 Managing Branches

### Adding a New Branch

Add a new branch object to the `branches` array:

```typescript
{
    id: 4,
    name: "Nidan Lab - Rander",
    area: "Rander",
    address: "Shop 5, Galaxy Complex, Rander Road, Surat",
    phone: "+91 98765 43213"
}
```

### Editing Branch Information

```typescript
{
    id: 1,
    name: "Nidan Lab - Adajan",
    area: "Adajan",
    address: "101, Sahjanand Complex, Adajan Patia, Surat",  // Update address
    phone: "+91 99999 88888"  // Update phone
}
```

---

## 🎯 Special Features

### Marking Tests as Popular

Set `popular: true` to display the test on the homepage:

```typescript
{
    id: 1,
    name: "Complete Blood Count (CBC)",
    popular: true,  // ⭐ Will show on homepage
    // ... other fields
}
```

### Fasting Requirements

Set `fastingRequired: true` for tests that need fasting:

```typescript
{
    id: 3,
    name: "Lipid Profile",
    fastingRequired: true,  // Shows fasting badge
    // ... other fields
}
```

---

## 📍 Where This Data Appears

### Individual Tests (`individualTests` array):

| Page | Usage |
|------|-------|
| **Tests Page** (`/tests`) | Displayed when "Individual Tests" tab is selected |
| **Booking Page** (`/booking`) | Available for booking |
| **Book Test** (`/book-test`) | Available in dropdown |
| **Admin** (`/admin`) | Test catalog (demo) |

### Health Packages (`packages` array):

| Page | Usage |
|------|-------|
| **Tests Page** (`/tests`) | Displayed when "Health Packages" tab is selected |
| **Home Page** (`/`) | Popular packages section (if marked popular) |
| **Booking Page** (`/booking`) | Available for booking |
| **Book Test** (`/book-test`) | Available in dropdown |

### All Tests Combined (`tests` array):

Automatically combines `individualTests` + `packages`. Used internally for:
- Search functionality across all items
- Category filtering
- Popular items display on homepage

### Branches Data (`branches` array):

| Page | Usage |
|------|-------|
| **Home Page** (`/`) | Branch locations section |
| **Booking Page** (`/booking`) | Branch selection for lab visits |

---

## 🔧 Available Exports & Helper Functions

### Direct Data Access

```typescript
import {
    individualTests,       // Array of individual tests only
    packages,             // Array of health packages only
    tests,                // Combined array (all tests + packages)
    branches              // Array of all branch locations
} from '@/data';
```

### Helper Functions

```typescript
import {
    getIndividualTests,    // Get all individual tests
    getPackages,           // Get only health packages
    getPopularTests,       // Get popular items (tests + packages)
    getTestsByCategory,    // Get items by category name
    getCategories,         // Get all unique categories
    getTestById,           // Find test/package by ID
    getBranchById          // Find branch by ID
} from '@/data';
```

---

## ⚡ Quick Examples

### Example 1: Adding a New Individual Test

Add to the `individualTests` array:

```typescript
{
    id: 15,
    name: "RT-PCR COVID-19 Test",
    description: "Gold standard molecular test for COVID-19 detection.",
    price: 500,
    originalPrice: 800,
    parameters: 1,
    tat: "24 Hours",
    category: "Infection Screening",  // New category!
    popular: true,
    fastingRequired: false
}
```

### Example 2: Adding a Seasonal Health Package

Add to the `packages` array:

```typescript
{
    id: 104,
    name: "Monsoon Health Package",
    description: "Complete health screening for common monsoon-related ailments.",
    price: 1999,
    originalPrice: 3999,
    parameters: 50,
    tat: "Same Day",
    category: "Packages",  // Always "Packages"
    popular: true,
    fastingRequired: true
}
```

### Example 3: Adding a New Branch

Add to the `branches` array:

```typescript
{
    id: 4,
    name: "Nidan Lab - Piplod",
    area: "Piplod",
    address: "123, VIP Plaza, Near City Mall, Piplod, Surat",
    phone: "+91 98765 43213"
}
```

---

## 🚀 After Making Changes

1. **Save the file** (`src/data/index.ts`)
2. **Rebuild the site:**
   ```bash
   npm run build
   ```
3. **Deploy the `out/` directory** to your hosting service

That's it! Your changes will appear everywhere automatically.

---

## 📝 Important Notes

- ✅ **IDs must be unique** - No two tests/branches can have the same ID
- ✅ **Price changes** affect all pages automatically
- ✅ **New categories** are automatically added to filters
- ✅ **Popular tests** (max 8) appear on homepage
- ✅ **Packages** are separated from individual tests on the Tests page
- ✅ The website is **100% static** - no database required!

---

## 🆘 Need Help?

If something doesn't work after editing:

1. Check for **syntax errors** (missing commas, quotes, brackets)
2. Ensure all **IDs are unique**
3. Run `npm run build` to see any **TypeScript errors**
4. Make sure the file follows the **same format** as existing entries

---

**Happy managing! 🎉**
