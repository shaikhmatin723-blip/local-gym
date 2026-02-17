# F3 Fitness Next.js - Complete Setup Guide

Step-by-step guide to get your F3 Fitness website running with backend API.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:

- [ ] Node.js 16 or higher installed
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] MongoDB installed OR MongoDB Atlas account

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Navigate to Project

```bash
cd nextjs-version
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your settings
```

Minimum required for development:
```env
MONGODB_URI=mongodb://localhost:27017/f3-fitness
```

### Step 4: Start MongoDB

```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 🎉

---

## 📦 Detailed Installation

### 1. Install Node.js

**Check if installed:**
```bash
node --version
npm --version
```

**If not installed:**
- Download from: https://nodejs.org/
- Install LTS version (recommended)
- Restart terminal after installation

### 2. Install MongoDB

#### Option A: Local Installation

**Windows:**
1. Download: https://www.mongodb.com/try/download/community
2. Run installer
3. Choose "Complete" installation
4. Install as Windows Service
5. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

**Mac:**
```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

**Linux (Ubuntu/Debian):**
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

#### Option B: MongoDB Atlas (Cloud - Recommended for Beginners)

1. **Create Account:**
   - Go to: https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose "FREE" tier
   - Select region closest to you
   - Click "Create Cluster"

3. **Setup Database Access:**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Save credentials!

4. **Setup Network Access:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Add to `.env.local`

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/f3-fitness?retryWrites=true&w=majority
```

### 3. Setup Project

```bash
# Navigate to project
cd nextjs-version

# Install dependencies
npm install

# This installs:
# - Next.js
# - React
# - Mongoose
# - Nodemailer
# - Tailwind CSS
# - and more...
```

### 4. Configure Environment Variables

Create `.env.local` file:

```bash
# Copy example file
cp .env.example .env.local
```

Edit `.env.local`:

```env
# ===== REQUIRED =====

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/f3-fitness
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/f3-fitness

# ===== OPTIONAL (for email functionality) =====

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@f3fitness.com
EMAIL_TO=admin@f3fitness.com

# ===== OPTIONAL (for future features) =====

# JWT Secret
JWT_SECRET=your-super-secret-key-change-this

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 5. Setup Email (Optional)

To enable contact form email notifications:

#### Using Gmail:

1. **Enable 2-Factor Authentication:**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password

3. **Add to .env.local:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_FROM=noreply@f3fitness.com
   EMAIL_TO=admin@f3fitness.com
   ```

#### Using Other Services:

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

---

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

- Opens at: http://localhost:3000
- Hot reload enabled
- Shows detailed errors

### Production Mode

```bash
# Build the application
npm run build

# Start production server
npm start
```

- Optimized for performance
- No hot reload
- Production-ready

---

## 🧪 Testing the API

### Test Contact Form

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check MongoDB for new entry:
   ```bash
   # Open MongoDB shell
   mongosh
   
   # Switch to database
   use f3-fitness
   
   # View contacts
   db.contacts.find()
   ```

### Test with cURL

```bash
# Test contact API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'

# Test members API
curl http://localhost:3000/api/members

# Create member
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"555-1234","membershipPlan":"Standard"}'
```

### Test with Postman

1. Download: https://www.postman.com/downloads/
2. Create new request
3. Set method to POST
4. URL: http://localhost:3000/api/contact
5. Body → raw → JSON:
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "message": "Hello!"
   }
   ```
6. Click "Send"

---

## 📊 Verify MongoDB Connection

### Using MongoDB Compass (GUI)

1. Download: https://www.mongodb.com/try/download/compass
2. Install and open
3. Connect to: `mongodb://localhost:27017`
4. You should see `f3-fitness` database after first API call

### Using MongoDB Shell

```bash
# Open MongoDB shell
mongosh

# Show databases
show dbs

# Use f3-fitness database
use f3-fitness

# Show collections
show collections

# View contacts
db.contacts.find().pretty()

# View members
db.members.find().pretty()

# View trainers
db.trainers.find().pretty()
```

---

## 🔧 Troubleshooting

### Port 3000 Already in Use

```bash
# Find process using port 3000
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000

# Kill the process or use different port
PORT=3001 npm run dev
```

### MongoDB Connection Error

**Error: "MongooseServerSelectionError"**

**Solutions:**
1. Check if MongoDB is running:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac
   brew services list
   
   # Linux
   sudo systemctl status mongod
   ```

2. Verify MONGODB_URI in `.env.local`

3. Check firewall settings

4. For Atlas: Check IP whitelist

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Or on Windows
rmdir /s node_modules
npm install
```

### Email Not Sending

1. Check email credentials in `.env.local`
2. Verify 2FA and app password (for Gmail)
3. Check spam folder
4. Review server logs for errors
5. Email is optional - app works without it

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## 📁 Project Structure Explained

```
nextjs-version/
├── components/          # Reusable React components
│   ├── Navbar.js       # Navigation bar
│   └── Footer.js       # Footer component
│
├── lib/                # Utility functions
│   └── mongodb.js      # MongoDB connection handler
│
├── models/             # Mongoose schemas
│   ├── Contact.js      # Contact form model
│   ├── Member.js       # Membership model
│   └── Trainer.js      # Trainer model
│
├── pages/              # Next.js pages (routes)
│   ├── api/           # API endpoints
│   │   ├── contact.js          # POST /api/contact
│   │   ├── members/
│   │   │   ├── index.js        # GET/POST /api/members
│   │   │   └── [id].js         # GET/PUT/DELETE /api/members/:id
│   │   └── trainers/
│   │       └── index.js        # GET/POST /api/trainers
│   │
│   ├── _app.js        # App wrapper
│   ├── _document.js   # HTML document
│   ├── index.js       # Home page (/)
│   ├── about.js       # About page (/about)
│   ├── services.js    # Services page (/services)
│   ├── membership.js  # Membership page (/membership)
│   ├── trainers.js    # Trainers page (/trainers)
│   ├── testimonials.js # Testimonials page (/testimonials)
│   └── contact.js     # Contact page (/contact)
│
├── public/            # Static files (images, etc.)
├── styles/            # CSS files
│   └── globals.css    # Global styles
│
├── .env.example       # Environment variables template
├── .env.local         # Your environment variables (create this)
├── .gitignore         # Git ignore rules
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── package.json       # Dependencies and scripts
├── README.md          # Main documentation
├── API_DOCUMENTATION.md # API reference
└── SETUP_GUIDE.md     # This file
```

---

## 🎯 Next Steps

After setup is complete:

1. **Explore the site:**
   - Visit all pages
   - Test navigation
   - Try the contact form

2. **Test the API:**
   - Use Postman or cURL
   - Create test data
   - View in MongoDB

3. **Customize:**
   - Update content
   - Change colors
   - Add your branding

4. **Deploy:**
   - See README.md for deployment instructions
   - Deploy to Vercel or Netlify

---

## 📚 Additional Resources

- **Next.js:** https://nextjs.org/docs
- **MongoDB:** https://docs.mongodb.com/
- **Mongoose:** https://mongoosejs.com/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Nodemailer:** https://nodemailer.com/

---

## 🆘 Getting Help

**Still stuck?**

1. Check error messages carefully
2. Review the logs in terminal
3. Check MongoDB connection
4. Verify environment variables
5. Read API_DOCUMENTATION.md
6. Search for error on Google/Stack Overflow

**Common issues:**
- MongoDB not running
- Wrong environment variables
- Port already in use
- Missing dependencies

---

## ✅ Setup Checklist

- [ ] Node.js installed
- [ ] MongoDB installed/configured
- [ ] Project dependencies installed (`npm install`)
- [ ] `.env.local` file created and configured
- [ ] MongoDB running
- [ ] Development server starts (`npm run dev`)
- [ ] Can access http://localhost:3000
- [ ] Contact form works
- [ ] Data saves to MongoDB
- [ ] Email sending works (optional)

---

**Congratulations! Your F3 Fitness website with backend API is ready! 🎉**
