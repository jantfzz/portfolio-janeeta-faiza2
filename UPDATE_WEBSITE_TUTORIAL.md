# 🚀 Complete Website Update Tutorial

## 📋 **Quick Update Checklist**

### ✅ **Before You Start:**
1. Make sure your development server is running: `npm run dev`
2. Open your browser to `http://localhost:5175` to see changes live
3. Have your images ready (JPG/PNG format recommended)

---

## 🖼️ **STEP 1: Adding Your Pictures**

### **1.1 Prepare Your Images:**
- **Profile Photo**: 400x400px, professional headshot
- **Project Images**: 1200x800px, landscape orientation
- **Research Photos**: 800x600px
- **Award Certificates**: 1000x800px

### **1.2 Add Images to Website:**
1. **Copy your images** to the `public/images/` folder
2. **Rename them** as:
   - `profile.jpg` - Your main profile photo
   - `project1.jpg`, `project2.jpg` - Project screenshots
   - `research1.jpg`, `research2.jpg` - Research images
   - `award1.jpg` - Award certificates

### **1.3 Your Profile Image is Already Set Up!**
- I've already configured the About section to use `/images/profile.jpg`
- Just add your `profile.jpg` file to `public/images/` folder
- If no image is found, it will show your initials as fallback

---

## ✏️ **STEP 2: Editing Text Content**

### **2.1 Personal Information**
**File:** `src/utils/constants.ts` (Lines 2-14)

```typescript
export const PERSONAL_INFO = {
  name: "Janeeta Faiza",                    // ← Change your name
  title: "Bio-Agricultural Engineering Student",  // ← Change your title
  subtitle: "Research Enthusiast & Project Leadership Specialist", // ← Change subtitle
  location: "Bandung, Indonesia",          // ← Change your location
  university: "Institut Teknologi Bandung", // ← Change university
  period: "2022-present",                  // ← Change study period
  email: "your.new.email@example.com",    // ← Change email
  phone: "+62 812-3456-7890",             // ← Change phone
  linkedin: "https://linkedin.com/in/yourprofile", // ← Change LinkedIn
  github: "https://github.com/yourprofile",        // ← Change GitHub
  instagram: "https://instagram.com/yourprofile",  // ← Change Instagram
}
```

### **2.2 Professional Summary**
**File:** `src/utils/constants.ts` (Lines 17-18)

```typescript
export const PROFESSIONAL_SUMMARY = 
  "Write your new professional summary here. Keep it engaging and highlight your key strengths and achievements.";
```

### **2.3 Key Statistics**
**File:** `src/utils/constants.ts` (Lines 21-27)

```typescript
export const KEY_STATS = [
  { label: "Research Papers", value: 30, suffix: "+" },     // ← Change numbers
  { label: "Competition Awards", value: 5, suffix: "" },    // ← Change numbers
  { label: "Students Mentored", value: 150, suffix: "+" },  // ← Change numbers
  { label: "Revenue Growth", value: 80, suffix: "%" },      // ← Change numbers
  { label: "Sponsors Negotiated", value: 20, suffix: "+" }, // ← Change numbers
]
```

### **2.4 Adding New Experience**
**File:** `src/utils/constants.ts` (Lines 30+)

**To add a new experience, copy this template:**

```typescript
{
  id: "my-new-experience",                    // ← Unique ID
  category: "Research & Academic",            // ← Category
  title: "Your New Job Title",               // ← Job title
  organization: "Organization Name",         // ← Company/University
  period: "Jan 2024 – Present",             // ← Time period
  location: "City, Country",                // ← Location
  type: "Academic",                         // ← Type: Academic/Leadership/Professional
  description: "Describe what you do in this role...", // ← Job description
  achievements: [                           // ← List of achievements
    "First achievement with specific results",
    "Second achievement with numbers",
    "Third achievement showing impact"
  ],
  skills: ["Skill1", "Skill2", "Skill3"],  // ← Skills learned
  color: "emerald"                          // ← Color theme
},
```

**Insert this BEFORE the closing `] as const;`**

---

## 📏 **STEP 3: Resizing Elements**

### **3.1 Text Sizes**
**File:** `src/index.css`

```css
/* Hero section title */
.text-hero {
  font-size: clamp(2rem, 5vw, 3.5rem); /* ← Make smaller */
  /* OR */
  font-size: clamp(3rem, 5vw, 5rem);   /* ← Make larger */
}

/* Section headings */
.text-display {
  font-size: clamp(1.5rem, 4vw, 2.5rem); /* ← Adjust size */
}
```

### **3.2 Card Sizes**
**File:** `src/index.css`

```css
.card-premium {
  padding: 1.5rem; /* ← Smaller cards */
  /* OR */
  padding: 3rem;   /* ← Larger cards */
}
```

### **3.3 Section Spacing**
**File:** `src/index.css`

```css
.section-padding {
  padding-top: 3rem;    /* ← Less spacing */
  padding-bottom: 3rem;
  /* OR */
  padding-top: 8rem;    /* ← More spacing */
  padding-bottom: 8rem;
}
```

### **3.4 Container Width**
**File:** `src/index.css`

```css
.container-premium {
  max-width: 70rem; /* ← Narrower */
  /* OR */
  max-width: 90rem; /* ← Wider */
}
```

---

## 🎨 **STEP 4: Changing Colors**

### **Available Color Themes:**
- `"emerald"` - Green
- `"purple"` - Purple  
- `"coral"` - Pink/Coral
- `"gold"` - Gold/Yellow
- `"cyan"` - Blue/Cyan
- `"orange"` - Orange

### **How to Change Experience Colors:**
In `src/utils/constants.ts`, change the `color` property:

```typescript
{
  // ... other properties
  color: "purple"  // ← Change from "emerald" to any color above
}
```

---

## 🚀 **STEP 5: Updating the Live Website**

### **5.1 Test Your Changes Locally:**
1. Make sure `npm run dev` is running
2. Check `http://localhost:5175` in your browser
3. Verify all changes look good

### **5.2 Deploy to Live Website:**
```bash
# 1. Save all files in your editor

# 2. Add all changes to git
git add .

# 3. Commit with a descriptive message
git commit -m "Update profile image, personal info, and experiences"

# 4. Push to GitHub
git push

# 5. Vercel will automatically redeploy (takes 1-2 minutes)
```

### **5.3 Check Your Live Website:**
- Visit your Vercel dashboard: `https://vercel.com/dashboard`
- Or check the deployment URL directly
- Changes should appear within 2-3 minutes

---

## 🆘 **Common Issues & Solutions**

### **Image Not Showing:**
- Check file name exactly matches: `profile.jpg`
- Make sure image is in `public/images/` folder
- Try refreshing the page with Ctrl+F5 (hard refresh)

### **Text Changes Not Appearing:**
- Make sure you saved the `constants.ts` file
- Check the development server is running
- Refresh your browser

### **Website Not Updating:**
- Check git push was successful: `git status`
- Check Vercel dashboard for deployment status
- Wait 2-3 minutes for deployment to complete

### **Layout Looks Broken:**
- Check for missing commas in `constants.ts`
- Make sure all brackets `{}` and arrays `[]` are properly closed
- Check browser console for errors (F12)

---

## 📞 **Need Help?**

If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Make sure all syntax is correct in `constants.ts`
3. Test changes locally first before pushing
4. Commit changes in small batches for easier debugging

**Your website will automatically update every time you push changes to GitHub!** 🎉
