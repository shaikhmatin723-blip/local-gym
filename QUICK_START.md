# Quick Start - Deploy F3 Fitness to Netlify in 5 Minutes

## Option 1: Drag & Drop (Easiest - No Git Required)

### Step 1: Build the app
```bash
npm install
npm run build
```

### Step 2: Deploy
1. Go to https://app.netlify.com/drop
2. Drag the `build` folder onto the page
3. Done! Your site is live!

---

## Option 2: GitHub + Netlify (Best for Updates)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/f3-fitness.git
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub → Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

### Step 3: Done!
Your site is live and will auto-deploy on every push!

---

## Option 3: Netlify CLI (For Developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

---

## What You Get

✅ Live website at `https://your-site.netlify.app`  
✅ Free HTTPS certificate  
✅ Global CDN  
✅ Automatic deployments (GitHub method)  
✅ 100GB bandwidth/month (free tier)  

---

## Troubleshooting

**Build fails?**
- Make sure you ran `npm install` first
- Check Node.js version (use v16 or higher)

**404 on page refresh?**
- The `netlify.toml` file handles this (already included)

**Need help?**
- See full guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- Netlify docs: https://docs.netlify.com

---

**That's it! Your gym website is now live! 🚀**
