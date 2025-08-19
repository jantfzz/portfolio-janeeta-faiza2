# 📝 Website Editing Guide

## 🎯 **Main Content File: `src/utils/constants.ts`**

This file contains ALL your website content. Here's what you can edit:

### **1. Personal Information (Lines 2-14)**
```typescript
export const PERSONAL_INFO = {
  name: "Janeeta Faiza",                    // ← Edit your name
  title: "Bio-Agricultural Engineering Student",  // ← Edit your title
  subtitle: "Research Enthusiast & Project Leadership Specialist", // ← Edit subtitle
  location: "Bandung, Indonesia",          // ← Edit your location
  university: "Institut Teknologi Bandung", // ← Edit university
  period: "2022-present",                  // ← Edit study period
  email: "janeeta.faiza@students.itb.ac.id", // ← Edit email
  phone: "+62 812-3456-7890",             // ← Edit phone
  linkedin: "https://linkedin.com/in/janeetafaiza", // ← Edit LinkedIn
  github: "https://github.com/janeetafaiza",        // ← Edit GitHub
  instagram: "https://instagram.com/janeetafaiza",  // ← Edit Instagram
}
```

### **2. Professional Summary (Lines 17-18)**
```typescript
export const PROFESSIONAL_SUMMARY = 
  "Your new professional summary here..."; // ← Edit this text
```

### **3. Key Statistics (Lines 21-27)**
```typescript
export const KEY_STATS = [
  { label: "Research Papers", value: 25, suffix: "+" },     // ← Edit numbers
  { label: "Competition Awards", value: 3, suffix: "" },    // ← Edit numbers
  { label: "Students Mentored", value: 100, suffix: "+" },  // ← Edit numbers
  { label: "Revenue Growth", value: 60, suffix: "%" },      // ← Edit numbers
  { label: "Sponsors Negotiated", value: 15, suffix: "+" }, // ← Edit numbers
]
```

### **4. Experience Section (Lines 30-150)**
Each experience has this structure:
```typescript
{
  id: "unique-id",
  category: "Research & Academic", // or "Leadership & Management"
  title: "Your Job Title",         // ← Edit title
  organization: "Organization Name", // ← Edit organization
  period: "Jan 2024 – Present",    // ← Edit dates
  location: "City, Country",       // ← Edit location
  type: "Academic",                // ← Edit type
  description: "Your job description...", // ← Edit description
  achievements: [                  // ← Edit achievements list
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  skills: ["Skill1", "Skill2"],   // ← Edit skills
  color: "emerald"                 // ← Color theme
}
```

### **5. Research Achievements (Lines 152-200)**
```typescript
{
  id: "unique-id",
  title: "Award Title",           // ← Edit title
  level: "National Level",        // ← Edit level
  field: "Research Field",        // ← Edit field
  year: "2024",                   // ← Edit year
  research: "Research topic...",  // ← Edit research description
  description: "Award description...", // ← Edit description
  impact: "Impact achieved...",   // ← Edit impact
  medal: "gold", // or "silver", "bronze"
  color: "emerald"
}
```

### **6. Skills (Lines 202-250)**
```typescript
export const SKILLS = {
  programming: [
    { name: "Python", level: 85, description: "Data analysis, automation" }, // ← Edit
    { name: "C++", level: 70, description: "Algorithm development" },        // ← Edit
  ],
  // ... more categories
}
```

## 🖼️ **Adding Images**

### **Step 1: Add Your Photos**
1. Copy your images to `public/images/` folder
2. Recommended names:
   - `profile.jpg` - Your professional headshot
   - `project1.jpg`, `project2.jpg` - Project images
   - `research1.jpg` - Research images
   - `award1.jpg` - Award certificates

### **Step 2: Update Image References**
In the About section component (`src/components/sections/About.tsx`), replace the placeholder with your image:

```typescript
// Find this section and replace with:
<img 
  src="/images/profile.jpg" 
  alt="Janeeta Faiza" 
  className="w-full h-full object-cover rounded-3xl"
/>
```

## 📏 **Resizing Elements**

### **Common Size Adjustments in `src/index.css`:**

1. **Hero Section Text Size:**
```css
.text-hero {
  font-size: clamp(2.5rem, 5vw, 4.5rem); /* ← Make smaller/larger */
}
```

2. **Card Sizes:**
```css
.card-premium {
  padding: 2rem; /* ← Increase/decrease padding */
}
```

3. **Section Spacing:**
```css
.section-padding {
  padding-top: 5rem;    /* ← Adjust top spacing */
  padding-bottom: 5rem; /* ← Adjust bottom spacing */
}
```

4. **Container Width:**
```css
.container-premium {
  max-width: 80rem; /* ← Make wider/narrower */
}
```

## 🚀 **Updating the Live Website**

After making changes:

1. **Save all files**
2. **Test locally:** `npm run dev`
3. **Commit changes:** `git add . && git commit -m "Update content and images"`
4. **Push to GitHub:** `git push`
5. **Vercel will automatically redeploy** (takes 1-2 minutes)

## 🎨 **Color Themes**

Available colors for experiences and achievements:
- `"emerald"` - Green theme
- `"purple"` - Purple theme  
- `"coral"` - Pink theme
- `"gold"` - Gold theme
- `"cyan"` - Blue theme
- `"orange"` - Orange theme
