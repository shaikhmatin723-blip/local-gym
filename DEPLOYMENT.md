# F3 Fitness - Netlify Deployment Guide

Complete step-by-step guide to deploy your F3 Fitness React app to Netlify.

## Prerequisites

- Git installed on your computer
- GitHub account (or GitLab/Bitbucket)
- Netlify account (free - sign up at https://netlify.com)

---

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Initialize Git Repository

Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - F3 Fitness React App"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `f3-fitness`
5. Keep it public or private (your choice)
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### Step 3: Push Code to GitHub

Copy the commands from GitHub and run them in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/f3-fitness.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy on Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" (authorize if needed)
4. Select your `f3-fitness` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Branch to deploy:** `main`
6. Click "Deploy site"

### Step 5: Wait for Deployment

- Netlify will automatically install dependencies and build your app
- This takes 2-5 minutes
- You'll see a live URL like: `https://random-name-123456.netlify.app`

### Step 6: Customize Domain (Optional)

1. Click "Site settings" → "Change site name"
2. Enter a custom name: `f3-fitness` (if available)
3. Your site will be: `https://f3-fitness.netlify.app`

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser window to authorize.

### Step 3: Build Your App

```bash
npm install
npm run build
```

### Step 4: Deploy

For a draft deployment (test):
```bash
netlify deploy
```

For production deployment:
```bash
netlify deploy --prod
```

When prompted:
- Choose "Create & configure a new site"
- Select your team
- Enter site name (optional)
- Publish directory: `build`

---

## Method 3: Drag & Drop (Quickest)

### Step 1: Build Your App Locally

```bash
npm install
npm run build
```

This creates a `build` folder.

### Step 2: Deploy to Netlify

1. Go to https://app.netlify.com
2. Scroll down to "Want to deploy a new site without connecting to Git?"
3. Drag and drop the `build` folder onto the upload area
4. Wait for deployment to complete

**Note:** This method requires manual re-deployment for updates.

---

## Automatic Deployments (GitHub Method)

Once connected to GitHub, Netlify automatically:
- Deploys when you push to the main branch
- Creates preview deployments for pull requests
- Rebuilds when you update code

To update your site:
```bash
git add .
git commit -m "Update description"
git push
```

Netlify will automatically rebuild and deploy!

---

## Environment Variables (If Needed)

If you add API keys or environment variables later:

1. Go to Netlify Dashboard
2. Site settings → Environment variables
3. Add your variables
4. Redeploy the site

---

## Custom Domain Setup

### Using Netlify Subdomain (Free)
- Already done! Your site is at `https://your-site-name.netlify.app`

### Using Your Own Domain
1. Buy a domain (GoDaddy, Namecheap, Google Domains, etc.)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Follow Netlify's DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

---

## Troubleshooting

### Build Fails
- Check that `package.json` has all dependencies
- Ensure Node version compatibility
- Check build logs in Netlify dashboard

### 404 Errors on Page Refresh
- Make sure `netlify.toml` file exists (already created)
- This file handles React Router redirects

### Blank Page After Deploy
- Check browser console for errors
- Verify `public/index.html` has `<div id="root"></div>`
- Check that build completed successfully

---

## Useful Netlify Features

### Deploy Previews
- Every pull request gets a preview URL
- Test changes before merging

### Form Handling
- Netlify can handle form submissions
- Add `netlify` attribute to forms

### Analytics
- Enable Netlify Analytics for visitor stats
- Paid feature but very useful

### Functions
- Add serverless functions if needed
- Great for API endpoints

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build

# Deploy to Netlify (CLI)
netlify deploy --prod

# Check deployment status
netlify status

# Open site in browser
netlify open:site
```

---

## Your Site URLs

After deployment, you'll have:
- **Production:** `https://your-site-name.netlify.app`
- **Admin Panel:** `https://app.netlify.com/sites/your-site-name`

---

## Next Steps After Deployment

1. ✅ Test all pages and navigation
2. ✅ Test on mobile devices
3. ✅ Check contact form functionality
4. ✅ Share your site URL!
5. ✅ Set up custom domain (optional)
6. ✅ Enable HTTPS (automatic on Netlify)

---

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Community:** https://answers.netlify.com
- **React Docs:** https://react.dev

---

## Cost

- **Netlify Free Tier Includes:**
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Automatic HTTPS
  - Continuous deployment
  - Form handling (100 submissions/month)

This is more than enough for most personal/small business sites!

---

**Congratulations! Your F3 Fitness website is now live! 🎉**
