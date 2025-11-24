# ProWash - Quick Deployment Guide

## 🚀 Deploy to Netlify in 5 Minutes

### Option 1: Netlify CLI (Fastest)

1. **Install Netlify CLI globally** (one-time):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```
   This will open your browser to authenticate.

3. **Deploy from the project directory**:
   ```bash
   cd /Users/jamespelton/Apps/React/ProWash
   netlify deploy --prod
   ```

4. When prompted:
   - **Create a new site**: Yes
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. Your site will be live at a URL like: `https://prowash-xyz.netlify.app`

### Option 2: Netlify Drop (No CLI Required)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Open Netlify Drop**:
   Go to https://app.netlify.com/drop

3. **Drag & Drop**:
   Drag the `dist` folder onto the page

4. **Done!** Your site is live.

### Option 3: Git + Continuous Deployment

1. **Initialize git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial ProWash website"
   ```

2. **Push to GitHub**:
   ```bash
   # Create a repo on GitHub first, then:
   git remote add origin https://github.com/yourusername/prowash.git
   git push -u origin main
   ```

3. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Enable Netlify Forms**:
   After deployment, the contact form will automatically work!

## 🎯 Post-Deployment Checklist

- [ ] Test the contact form submission
- [ ] Check all images are loading correctly
- [ ] Test on mobile devices
- [ ] Verify smooth scrolling navigation works
- [ ] Test gallery lightbox functionality
- [ ] Check FAQ accordion
- [ ] Verify phone and email links work
- [ ] Test mobile menu

## 🔧 Custom Domain (Optional)

1. Go to your site in Netlify dashboard
2. Click "Domain settings"
3. Add custom domain (e.g., prowash.com)
4. Follow DNS instructions provided by Netlify
5. Netlify will auto-provision SSL certificate

## 📧 Form Notifications

To receive email notifications for form submissions:

1. Go to your site in Netlify
2. Navigate to "Forms" → Click on "contact"
3. Click "Form notifications"
4. Add email notification with your email address

## 🔄 Updating the Site

After making changes:

```bash
# Build
npm run build

# Deploy
netlify deploy --prod
```

Or if using Git deployment, just push:
```bash
git add .
git commit -m "Update content"
git push
```

Netlify will automatically rebuild and deploy!

## 📞 Support

Need help? Contact:
- **Netlify Support**: https://www.netlify.com/support/
- **ProWash**: (517) 755-7966

---

Ready to launch? Run `netlify deploy --prod` or drag your `dist` folder to Netlify Drop!
