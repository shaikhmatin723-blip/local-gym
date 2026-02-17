# F3 Fitness - Next.js with Backend API

A professional, full-stack gym website built with Next.js, MongoDB, and RESTful APIs.

## 🚀 Features

### Frontend
- **Next.js 14** - React framework with SSR and SSG
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Image Optimization** - Next.js Image component
- **SEO Optimized** - Meta tags and semantic HTML

### Backend & API
- **RESTful API** - Built with Next.js API routes
- **MongoDB** - NoSQL database with Mongoose ODM
- **Email Integration** - Nodemailer for contact form
- **Data Validation** - Server-side validation
- **Error Handling** - Comprehensive error responses

### API Endpoints

#### Contact API
- `POST /api/contact` - Submit contact form
  - Saves to database
  - Sends email notification
  - Returns success/error response

#### Members API
- `GET /api/members` - Get all members
- `POST /api/members` - Create new membership
- `GET /api/members/[id]` - Get member by ID
- `PUT /api/members/[id]` - Update member
- `DELETE /api/members/[id]` - Delete member

#### Trainers API
- `GET /api/trainers` - Get all active trainers
- `POST /api/trainers` - Add new trainer

## 📋 Prerequisites

- Node.js 16+ installed
- MongoDB installed locally OR MongoDB Atlas account
- Git installed

## 🛠️ Installation

### 1. Clone or Navigate to Next.js Version

```bash
cd nextjs-version
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/f3-fitness
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/f3-fitness

# Email Configuration (Optional - for contact form)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@f3fitness.com
EMAIL_TO=admin@f3fitness.com

# JWT Secret (for future authentication)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Setup MongoDB

#### Option A: Local MongoDB

1. Install MongoDB: https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

#### Option B: MongoDB Atlas (Cloud)

1. Create account: https://www.mongodb.com/cloud/atlas
2. Create a cluster (free tier available)
3. Get connection string
4. Add to `.env.local` as `MONGODB_URI`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nextjs-version/
├── components/          # React components
│   ├── Navbar.js
│   └── Footer.js
├── lib/                # Utility functions
│   └── mongodb.js      # MongoDB connection
├── models/             # Mongoose models
│   ├── Contact.js
│   ├── Member.js
│   └── Trainer.js
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   ├── contact.js
│   │   ├── members/
│   │   │   ├── index.js
│   │   │   └── [id].js
│   │   └── trainers/
│   │       └── index.js
│   ├── _app.js
│   ├── _document.js
│   ├── index.js       # Home page
│   ├── about.js
│   ├── services.js
│   ├── membership.js
│   ├── trainers.js
│   ├── testimonials.js
│   └── contact.js
├── public/            # Static files
├── styles/            # CSS files
│   └── globals.css
├── .env.example       # Environment variables template
├── .env.local         # Your environment variables (create this)
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## 🔌 API Usage Examples

### Contact Form Submission

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-1234',
    message: 'I want to join!'
  }),
});

const data = await response.json();
console.log(data);
// { success: true, message: "Thank you for your message!", data: {...} }
```

### Create Membership

```javascript
const response = await fetch('/api/members', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '555-5678',
    membershipPlan: 'Standard'
  }),
});

const data = await response.json();
console.log(data);
// { success: true, message: "Membership application submitted!", data: {...} }
```

### Get All Members

```javascript
const response = await fetch('/api/members');
const data = await response.json();
console.log(data);
// { success: true, data: [{...}, {...}] }
```

### Get All Trainers

```javascript
const response = await fetch('/api/trainers');
const data = await response.json();
console.log(data);
// { success: true, data: [{...}, {...}] }
```

## 📧 Email Configuration

To enable email notifications for contact form:

### Using Gmail

1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password:
   - Go to Google Account → Security
   - 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Add to `.env.local`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

### Using Other Email Services

Update `.env.local` with your SMTP settings:
- **Outlook**: smtp-mail.outlook.com, port 587
- **Yahoo**: smtp.mail.yahoo.com, port 587
- **SendGrid**: smtp.sendgrid.net, port 587

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder
3. Configure environment variables
4. Set build command: `npm run build`
5. Set publish directory: `.next`

### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your hosting platform:
- MONGODB_URI
- EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD
- EMAIL_FROM, EMAIL_TO
- JWT_SECRET
- NEXT_PUBLIC_API_URL

## 🧪 Testing APIs

### Using cURL

```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'

# Get all members
curl http://localhost:3000/api/members

# Create membership
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"555-1234","membershipPlan":"Standard"}'
```

### Using Postman

1. Download Postman: https://www.postman.com/downloads/
2. Import the API collection (create one with the endpoints above)
3. Test each endpoint

## 📊 Database Models

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String,
  message: String (required),
  status: String (enum: 'new', 'read', 'replied'),
  createdAt: Date
}
```

### Member Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  membershipPlan: String (enum: 'Basic', 'Standard', 'Premium'),
  startDate: Date,
  endDate: Date,
  status: String (enum: 'active', 'inactive', 'pending'),
  createdAt: Date
}
```

### Trainer Model
```javascript
{
  name: String (required),
  initials: String (required),
  role: String (required),
  experience: String (required),
  description: String (required),
  specialties: [String],
  image: String,
  active: Boolean,
  createdAt: Date
}
```

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Adding New API Endpoints

1. Create file in `pages/api/` directory
2. Export default async function
3. Handle different HTTP methods
4. Connect to database if needed
5. Return JSON response

Example:
```javascript
// pages/api/example.js
import connectDB from '../../lib/mongodb';

export default async function handler(req, res) {
  await connectDB();
  
  if (req.method === 'GET') {
    res.status(200).json({ success: true, message: 'Hello!' });
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
```

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error: "MongooseServerSelectionError"**
- Check if MongoDB is running
- Verify MONGODB_URI in `.env.local`
- Check network/firewall settings

### Email Not Sending

- Verify email credentials in `.env.local`
- Check if 2FA is enabled (use app password)
- Check spam folder
- Review server logs for errors

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎯 Next Steps

- [ ] Add user authentication (JWT)
- [ ] Add admin dashboard
- [ ] Add payment integration (Stripe)
- [ ] Add booking system for classes
- [ ] Add member portal
- [ ] Add trainer scheduling
- [ ] Add analytics dashboard

## 📝 License

© 2026 F3 Fitness. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Next.js, MongoDB, and Tailwind CSS**
