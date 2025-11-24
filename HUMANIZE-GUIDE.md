# Guide: Humanizing ProWash Copy

The website copy is currently written in a professional, marketing style. As requested, you can run it through [HumanizeAI.pro](https://www.humanizeai.pro/) to make it sound more conversational and down-to-earth.

## 📝 Sections to Humanize

### 1. Hero Section (`src/components/Hero.tsx`)

**Current text (lines 16-20)**:
```
Transform Your Home's Exterior Beauty
Professional pressure washing, soft-wash cleaning, and painting services in Lincoln & Beatrice, NE.
Over 12 years of trusted service with honest pricing and guaranteed satisfaction.
```

**HumanizeAI Prompt**:
"Please rewrite this hero section for a pressure washing company so it sounds like a friendly, down-to-earth contractor talking to a homeowner. Keep it concise and avoid corporate buzzwords."

---

### 2. Services Section (`src/components/Services.tsx`)

**Current service descriptions (lines 11-52)**:
Each service has a title and description. For example:
```
Low-Pressure House Washing
Safe, effective cleaning that removes dirt, mold, mildew, and algae...
```

**HumanizeAI Prompt**:
"Rewrite these service descriptions for a small pressure washing business. Make them sound like a skilled contractor explaining their work to a neighbor—friendly, confident, but not salesy."

---

### 3. Why Choose Us (`src/components/WhyUs.tsx`)

**Current trust factors (lines 11-37)**:
```
12+ Years of Excellence
Over a decade of trusted service in Lincoln and Beatrice...
```

**HumanizeAI Prompt**:
"Rewrite these 'why choose us' points to sound like honest reasons from a small business owner, not marketing copy. Keep them genuine and conversational."

---

### 4. About Section (`src/components/About.tsx`)

**Current story (lines 22-41)**:
```
ProWash is a local, family-run business dedicated to restoring and protecting...
```

**HumanizeAI Prompt**:
"Rewrite this 'about us' section as if the owner (Bryce) is telling their story to a potential customer over coffee. Keep it warm, genuine, and personal without sounding like a corporate website."

---

### 5. Testimonials (`src/components/Testimonials.tsx`)

**Current reviews (lines 11-38)**:
These are already written to sound like real reviews, but you can still humanize them if they seem too polished.

**HumanizeAI Prompt**:
"Make these customer reviews sound more natural and conversational, like something a real person would say, with occasional informal language and genuine enthusiasm."

---

### 6. FAQ Section (`src/components/FAQ.tsx`)

**Current Q&A (lines 11-52)**:
```
Do you offer free estimates?
Yes! We provide completely free, no-obligation estimates...
```

**HumanizeAI Prompt**:
"Rewrite these FAQ answers to sound like a contractor answering questions in person—friendly, straightforward, and helpful without being overly formal or salesy."

---

## 🔄 Workflow

1. **Copy original text** from the component file
2. **Paste into HumanizeAI.pro**
3. **Use the prompt above** for that specific section
4. **Review the output** - make sure it still conveys the key info
5. **Replace the text** in the component file
6. **Test locally**: `npm run dev`
7. **Rebuild**: `npm run build`
8. **Redeploy** to Netlify

## 💡 Tips for Humanizing

When reviewing HumanizeAI output:

✅ **Keep**:
- Conversational tone
- Genuine enthusiasm
- Simple, clear language
- Personal touches

❌ **Avoid**:
- Overly casual or unprofessional language
- Losing important details (pricing, services, guarantees)
- Making it too long or wordy
- Removing calls-to-action

## 📍 Key Info to Preserve

Make sure these remain clear after humanizing:
- **12+ years of experience**
- **Up-front, honest pricing**
- **Licensed and insured**
- **Emergency services 24/7**
- **Free estimates**
- **Satisfaction guarantee**
- **Service area** (Lincoln & Beatrice)

## 🎯 Example Before/After

### Before (Corporate):
"ProWash is a local, family-run business dedicated to restoring and protecting the beauty of homes and properties throughout Lincoln, Beatrice, and the surrounding Nebraska communities."

### After (Humanized):
"We're a local family business here in Lincoln and Beatrice, and we really care about making your home look its best. Been doing this for over 12 years now, and we treat every property like it's our own."

---

**Need help?** The current copy is professional and effective, but adding that human touch will make it stand out even more!
