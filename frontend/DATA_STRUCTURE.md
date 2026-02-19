# 📁 Data Structure Overview

## File Location

```
src/data/index.ts
```

## Structure Diagram

```
src/data/index.ts
│
├── 🧪 individualTests[]        (IDs: 1-99)
│   ├── Complete Blood Count (CBC)
│   ├── Thyroid Profile (Total)
│   ├── Lipid Profile (Mini)
│   ├── Diabetes Screening
│   ├── Vitamin D & B12 Combo
│   ├── Vitamin D
│   ├── Vitamin B12
│   ├── Liver Function Test (LFT)
│   └── Kidney Function Test (KFT)
│
├── 📦 packages[]               (IDs: 100+)
│   ├── Basic Health Checkup
│   ├── Comprehensive Full Body Checkup
│   ├── Women's Health Package
│   └── Senior Citizen Health Package
│
├── 🔄 tests[]                  (Auto-combined)
│   └── individualTests + packages
│
└── 🏥 branches[]
    ├── Nidan Lab - Adajan
    ├── Nidan Lab - Vesu
    └── Nidan Lab - Varachha
```

---

## Data Arrays

### 1️⃣ Individual Tests
```typescript
export const individualTests: Test[] = [...]
```
- Contains all individual diagnostic tests
- Use IDs 1-99
- Categories: Blood Studies, Thyroid, Heart, Diabetes, Vitamins, Liver, Kidney

### 2️⃣ Health Packages
```typescript
export const packages: Test[] = [...]
```
- Contains all health packages
- Use IDs 100+
- Category: Always "Packages"

### 3️⃣ Combined Tests (Auto-generated)
```typescript
export const tests: Test[] = [...individualTests, ...packages]
```
- Automatically combines both arrays
- Used for search and filtering across all items

### 4️⃣ Branches
```typescript
export const branches: Branch[] = [...]
```
- Contains all laboratory branch locations

---

## Quick Edit Guide

### To Add a Test:
1. Open `src/data/index.ts`
2. Find the `individualTests` array
3. Add your test object
4. Use ID between 1-99

### To Add a Package:
1. Open `src/data/index.ts`
2. Find the `packages` array
3. Add your package object
4. Use ID 100 or higher

### To Add a Branch:
1. Open `src/data/index.ts`
2. Find the `branches` array
3. Add your branch object

### To Deploy Changes:
```bash
npm run build
# Deploy the 'out/' folder
```

---

## Data Flow

```
src/data/index.ts
    ↓
    ├── Home Page → uses getPopularTests()
    ├── Tests Page → uses individualTests & packages separately
    ├── Booking Page → uses tests (all combined)
    ├── Book Test Page → uses tests (all combined)
    └── Admin Page → uses tests (all combined)
```

---

## Benefits of This Structure

✅ **Separated Management** - Edit tests and packages independently
✅ **No Duplication** - Single source of truth
✅ **Type Safety** - TypeScript ensures data consistency
✅ **Easy Updates** - Change once, reflects everywhere
✅ **Organized IDs** - Tests (1-99), Packages (100+)
✅ **Auto-Combining** - Tests array automatically merges both

---

## Example Usage in Components

```typescript
// Import what you need
import { individualTests, packages, tests, branches } from '@/data';

// Use individual tests only
const tests = individualTests;

// Use packages only
const healthPackages = packages;

// Use everything combined
const allItems = tests;

// Use branches
const locations = branches;
```

---

**Simple, organized, and easy to maintain! 🎯**
