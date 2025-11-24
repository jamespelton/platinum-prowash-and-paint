# ProWash – Professional Exterior Services Website

A stunning, modern, one-page marketing website for ProWash, showcasing professional pressure washing, painting, and restoration services in Lincoln and Beatrice, Nebraska.

## 🎯 Project Overview

This website was built to showcase ProWash's 12+ years of experience in exterior cleaning, painting, and restoration services. The site emphasizes trust, professionalism, and customer satisfaction while providing clear pathways for visitors to request quotes and contact the business.

## ✨ Features

- **Modern, Responsive Design**: Fully responsive layout that looks great on all devices
- **One-Page Navigation**: Smooth scrolling between sections with sticky header
- **Interactive Gallery**: Before/after photos with lightbox modal viewer
- **Netlify Form Integration**: Contact form with built-in spam protection
- **SEO Optimized**: JSON-LD structured data for local business SEO
- **Performance Optimized**: Compressed images, lazy loading, and optimized assets
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Animations**: AOS (Animate On Scroll)
- **Fonts**: Google Fonts (Inter & Poppins)
- **Hosting**: Netlify

## 📦 Project Structure

```
ProWash/
├── public/
│   └── images/
│       ├── hero/           # Hero section images
│       ├── gallery/        # Gallery & before/after photos
│       └── services/       # Service-related images
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx             # Main app component
│   ├── App.css
│   ├── index.css           # Global styles
│   └── main.tsx            # Entry point
├── index.html              # HTML template with SEO meta tags
├── netlify.toml            # Netlify configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd /Users/jamespelton/Apps/React/ProWash
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploying to Netlify

### Method 1: Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize and deploy**:
   ```bash
   netlify init
   ```

   Follow the prompts to:
   - Create a new site or link to an existing one
   - Set build command: `npm run build`
   - Set publish directory: `dist`

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Netlify Drop (Drag & Drop)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder to deploy

### Method 3: Git-Based Deployment

1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [Netlify](https://app.netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Select your repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

6. Click "Deploy site"

## 🔧 Configuration

### Contact Information

To update contact details, modify the following files:

- **Phone Number**: Search for `5177557966` or `(517) 755-7966` and replace
- **Email**: Search for `Bryceredman83@icloud.com` and replace
- **Address**: Update in `Contact.tsx` and `index.html` (structured data)

### Images

To replace images:

1. Add new images to `public/images/` in the appropriate subdirectory
2. Update the image paths in the component files:
   - Hero: `Hero.tsx` and `Hero.css`
   - Gallery: `Gallery.tsx`
   - About: `About.tsx`

### Content/Copy

All text content can be edited directly in the component files:
- `Hero.tsx` – Hero section text
- `Services.tsx` – Service descriptions
- `WhyUs.tsx` – Trust factors
- `Testimonials.tsx` – Customer reviews
- `About.tsx` – Company story
- `FAQ.tsx` – Questions and answers

### Styling/Colors

The color scheme is defined in `src/index.css` using CSS variables:

```css
:root {
  --color-navy: #16334A;
  --color-slate: #2A3B4C;
  --color-turquoise: #3AAFA9;
  --color-light-grey: #F5F7F9;
  --color-mid-grey: #6E7E90;
  --color-white: #FFFFFF;
}
```

To change colors, update these variables.

## 📧 Netlify Forms

The contact form is configured to use Netlify Forms. After deployment:

1. Go to your site in Netlify dashboard
2. Navigate to "Forms" in the sidebar
3. You'll see form submissions there
4. Optional: Set up email notifications in Form settings

## 🔍 SEO Features

The site includes:

- **Meta Tags**: Title, description, keywords in `index.html`
- **Open Graph Tags**: For social media sharing (can be added)
- **JSON-LD Structured Data**: LocalBusiness schema for Google
- **Semantic HTML**: Proper heading hierarchy and structure
- **Alt Text**: All images have descriptive alt text
- **Mobile-Friendly**: Responsive design passes Google's mobile test

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#16334A) – Trust and professionalism
- **Secondary**: Turquoise (#3AAFA9) – Freshness and water
- **Neutral**: Light Grey (#F5F7F9) for backgrounds

### Typography
- **Headings**: Poppins (Bold, Modern)
- **Body**: Inter (Readable, Clean)

### Spacing
- Consistent spacing scale using CSS variables
- Generous white space for breathing room

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project was created for ProWash. All rights reserved.

## 🙏 Credits

- **Built with**: React, TypeScript, Vite
- **Icons**: React Icons
- **Animations**: AOS Library
- **Fonts**: Google Fonts
- **Hosting**: Netlify

## 📞 Support

For questions or issues with the website:
- **Email**: Bryceredman83@icloud.com
- **Phone**: (517) 755-7966

---

**Built with ❤️ by [Claude Code](https://claude.ai)**
