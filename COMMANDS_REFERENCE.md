# Quick Commands Reference Card 📝

Keep this handy! These are all the commands you'll need.

---

## 🚀 Initial Deployment (One Time Only)

```bash
# 1. Initialize Git
git init

# 2. Stage all files
git add .

# 3. Create first commit
git commit -m "Initial commit - F3 Fitness React App"

# 4. Connect to GitHub (replace YOUR_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_USERNAME/f3-fitness.git

# 5. Rename branch to main
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

**Then go to Netlify and connect your GitHub repository!**

---

## 🔄 Updating Your Site (Every Time You Make Changes)

```bash
# 1. Stage your changes
git add .

# 2. Commit with a descriptive message
git commit -m "Describe what you changed"

# 3. Push to GitHub (Netlify auto-deploys!)
git push
```

**That's it! Netlify will automatically rebuild and deploy your site in 2-3 minutes.**

---

## 📊 Useful Git Commands

### Check Status
```bash
# See what files have changed
git status
```

### View History
```bash
# See all commits
git log

# See last 5 commits
git log -5

# See commits in one line each
git log --oneline
```

### Undo Changes
```bash
# Discard changes to a file (before staging)
git checkout -- filename.js

# Unstage a file (after git add)
git reset filename.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ CAREFUL!
git reset --hard HEAD~1
```

### View Differences
```bash
# See what changed in files
git diff

# See what's staged
git diff --staged
```

### Branch Management
```bash
# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# List all branches
git branch

# Merge a branch into main
git checkout main
git merge feature-name

# Delete a branch
git branch -d feature-name
```

---

## 🛠️ Project Commands

### Development
```bash
# Install dependencies (first time or after pulling changes)
npm install

# Start development server
npm start

# Open in browser: http://localhost:3000
```

### Building
```bash
# Create production build
npm run build

# Build folder will be created with optimized files
```

### Testing
```bash
# Run tests (if you add them)
npm test
```

---

## 🌐 Netlify CLI Commands (Optional)

### Installation
```bash
# Install Netlify CLI globally
npm install -g netlify-cli
```

### Usage
```bash
# Login to Netlify
netlify login

# Deploy to draft URL (for testing)
netlify deploy

# Deploy to production
netlify deploy --prod

# Open site in browser
netlify open:site

# Open Netlify dashboard
netlify open:admin

# Check deployment status
netlify status

# View site info
netlify sites:list
```

---

## 🔍 Troubleshooting Commands

### Check Versions
```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

### Fix Common Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install

# On Windows, use:
rmdir /s node_modules
npm install
```

### Git Issues
```bash
# Check remote URL
git remote -v

# Change remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/f3-fitness.git

# Pull latest changes from GitHub
git pull origin main

# Force push (⚠️ use carefully!)
git push -f origin main
```

---

## 📝 Commit Message Examples

Good commit messages help you track changes:

```bash
# Feature additions
git commit -m "Add new trainer profile section"
git commit -m "Implement contact form validation"

# Bug fixes
git commit -m "Fix mobile menu not closing"
git commit -m "Fix navbar z-index issue"

# Updates
git commit -m "Update membership pricing"
git commit -m "Update hero section background image"

# Style changes
git commit -m "Improve button hover effects"
git commit -m "Adjust mobile responsive layout"

# Content changes
git commit -m "Update about us text"
git commit -m "Add new testimonials"
```

---

## 🎯 Common Workflows

### Workflow 1: Quick Update
```bash
# Make changes to your files
# Then:
git add .
git commit -m "Your message"
git push
```

### Workflow 2: Update Specific Files
```bash
# Make changes to specific files
git add src/pages/Home.js
git add src/components/Navbar.js
git commit -m "Update home page and navbar"
git push
```

### Workflow 3: Check Before Committing
```bash
git status                    # See what changed
git diff                      # See exact changes
git add .                     # Stage changes
git status                    # Verify what's staged
git commit -m "Your message"  # Commit
git push                      # Push to GitHub
```

### Workflow 4: Working on a Feature
```bash
# Create feature branch
git checkout -b new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Switch back to main
git checkout main

# Merge feature
git merge new-feature

# Push to GitHub
git push

# Delete feature branch
git branch -d new-feature
```

---

## 🆘 Emergency Commands

### Messed Up? Start Fresh
```bash
# Discard ALL local changes (⚠️ CAREFUL!)
git reset --hard HEAD

# Pull fresh copy from GitHub
git pull origin main
```

### Accidentally Committed Wrong Files
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Fix what you need to fix, then:
git add .
git commit -m "Correct commit message"
git push
```

### Need to Revert to Previous Version
```bash
# See commit history
git log --oneline

# Revert to specific commit (replace abc1234 with actual commit hash)
git revert abc1234

# Or go back to previous commit
git revert HEAD
```

---

## 📱 Quick Reference Card (Print This!)

```
┌─────────────────────────────────────────────┐
│         F3 FITNESS - QUICK COMMANDS         │
├─────────────────────────────────────────────┤
│ UPDATE SITE:                                │
│   git add .                                 │
│   git commit -m "message"                   │
│   git push                                  │
├─────────────────────────────────────────────┤
│ CHECK STATUS:                               │
│   git status                                │
├─────────────────────────────────────────────┤
│ VIEW CHANGES:                               │
│   git diff                                  │
├─────────────────────────────────────────────┤
│ RUN LOCALLY:                                │
│   npm start                                 │
├─────────────────────────────────────────────┤
│ BUILD:                                      │
│   npm run build                             │
├─────────────────────────────────────────────┤
│ UNDO CHANGES:                               │
│   git reset --hard HEAD                     │
└─────────────────────────────────────────────┘
```

---

## 🔗 Important Links

- **Your Site:** https://your-site-name.netlify.app
- **GitHub Repo:** https://github.com/YOUR_USERNAME/f3-fitness
- **Netlify Dashboard:** https://app.netlify.com
- **Git Documentation:** https://git-scm.com/doc
- **Netlify Docs:** https://docs.netlify.com

---

## 💡 Pro Tips

1. **Commit often** - Small commits are easier to manage
2. **Write clear messages** - Future you will thank you
3. **Pull before push** - Avoid conflicts: `git pull` then `git push`
4. **Use branches** - Keep main branch stable
5. **Check status** - Run `git status` frequently
6. **Test locally** - Run `npm start` before pushing

---

**Save this file for quick reference! 📌**

Need detailed explanations? See [GITHUB_NETLIFY_GUIDE.md](GITHUB_NETLIFY_GUIDE.md)
