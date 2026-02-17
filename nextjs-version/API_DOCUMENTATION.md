# F3 Fitness API Documentation

Complete API reference for the F3 Fitness backend.

## Base URL

```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

## Authentication

Currently, the API does not require authentication. Future versions will implement JWT-based authentication.

---

## 📬 Contact API

### Submit Contact Form

Creates a new contact form submission and optionally sends an email notification.

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "message": "I'm interested in joining the gym"
}
```

**Required Fields:**
- `name` (string, max 100 characters)
- `email` (string, valid email format)
- `message` (string, max 1000 characters)

**Optional Fields:**
- `phone` (string, max 20 characters)

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you within 24 hours.",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "message": "I'm interested in joining the gym",
    "status": "new",
    "createdAt": "2026-02-16T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Please provide name, email, and message"
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Something went wrong. Please try again later.",
  "error": "Error details"
}
```

**Example Usage:**
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '555-1234',
    message: 'I want to join!'
  })
});
const data = await response.json();
```

---

## 👥 Members API

### Get All Members

Retrieves a list of all gym members.

**Endpoint:** `GET /api/members`

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "555-5678",
      "membershipPlan": "Standard",
      "startDate": "2026-02-16T00:00:00.000Z",
      "endDate": "2026-03-18T00:00:00.000Z",
      "status": "active",
      "createdAt": "2026-02-16T10:30:00.000Z"
    }
  ]
}
```

### Create New Member

Creates a new gym membership application.

**Endpoint:** `POST /api/members`

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "555-5678",
  "membershipPlan": "Standard"
}
```

**Required Fields:**
- `name` (string, max 100 characters)
- `email` (string, valid email, unique)
- `phone` (string)
- `membershipPlan` (string, enum: 'Basic', 'Standard', 'Premium')

**Success Response (201):**
```json
{
  "success": true,
  "message": "Membership application submitted successfully!",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "555-5678",
    "membershipPlan": "Standard",
    "startDate": "2026-02-16T00:00:00.000Z",
    "endDate": "2026-03-18T00:00:00.000Z",
    "status": "pending",
    "createdAt": "2026-02-16T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "A member with this email already exists"
}
```

### Get Member by ID

Retrieves a specific member's information.

**Endpoint:** `GET /api/members/[id]`

**URL Parameters:**
- `id` - MongoDB ObjectId of the member

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "555-5678",
    "membershipPlan": "Standard",
    "status": "active"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Member not found"
}
```

### Update Member

Updates an existing member's information.

**Endpoint:** `PUT /api/members/[id]`

**URL Parameters:**
- `id` - MongoDB ObjectId of the member

**Request Body:**
```json
{
  "status": "active",
  "membershipPlan": "Premium"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Smith",
    "status": "active",
    "membershipPlan": "Premium"
  }
}
```

### Delete Member

Deletes a member from the database.

**Endpoint:** `DELETE /api/members/[id]`

**URL Parameters:**
- `id` - MongoDB ObjectId of the member

**Success Response (200):**
```json
{
  "success": true,
  "message": "Member deleted successfully"
}
```

---

## 💪 Trainers API

### Get All Trainers

Retrieves a list of all active trainers.

**Endpoint:** `GET /api/trainers`

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Mike Stevens",
      "initials": "MS",
      "role": "Head Trainer & CrossFit Coach",
      "experience": "8 years experience",
      "description": "Former competitive powerlifter...",
      "specialties": ["Strength Training", "CrossFit", "Powerlifting"],
      "active": true,
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ]
}
```

### Create New Trainer

Adds a new trainer to the database.

**Endpoint:** `POST /api/trainers`

**Request Body:**
```json
{
  "name": "Mike Stevens",
  "initials": "MS",
  "role": "Head Trainer & CrossFit Coach",
  "experience": "8 years experience",
  "description": "Former competitive powerlifter with expertise in strength training",
  "specialties": ["Strength Training", "CrossFit", "Powerlifting"],
  "active": true
}
```

**Required Fields:**
- `name` (string)
- `initials` (string)
- `role` (string)
- `experience` (string)
- `description` (string)

**Optional Fields:**
- `specialties` (array of strings)
- `image` (string, URL)
- `active` (boolean, default: true)

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Mike Stevens",
    "initials": "MS",
    "role": "Head Trainer & CrossFit Coach",
    "experience": "8 years experience",
    "description": "Former competitive powerlifter...",
    "specialties": ["Strength Training", "CrossFit", "Powerlifting"],
    "active": true,
    "createdAt": "2026-02-16T10:30:00.000Z"
  }
}
```

---

## 🔒 Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Resource doesn't exist |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

---

## 📝 Common Error Responses

### Validation Error
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

### Not Found Error
```json
{
  "success": false,
  "message": "Member not found"
}
```

### Method Not Allowed
```json
{
  "success": false,
  "message": "Method not allowed"
}
```

### Server Error
```json
{
  "success": false,
  "message": "Something went wrong. Please try again later.",
  "error": "Detailed error message"
}
```

---

## 🧪 Testing with cURL

### Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-1234",
    "message": "I want to join!"
  }'
```

### Create Member
```bash
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "555-5678",
    "membershipPlan": "Standard"
  }'
```

### Get All Members
```bash
curl http://localhost:3000/api/members
```

### Get Member by ID
```bash
curl http://localhost:3000/api/members/507f1f77bcf86cd799439011
```

### Update Member
```bash
curl -X PUT http://localhost:3000/api/members/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "active"
  }'
```

### Delete Member
```bash
curl -X DELETE http://localhost:3000/api/members/507f1f77bcf86cd799439011
```

### Get All Trainers
```bash
curl http://localhost:3000/api/trainers
```

### Create Trainer
```bash
curl -X POST http://localhost:3000/api/trainers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mike Stevens",
    "initials": "MS",
    "role": "Head Trainer",
    "experience": "8 years",
    "description": "Expert trainer",
    "specialties": ["Strength Training", "CrossFit"]
  }'
```

---

## 🔐 Future Authentication

Future versions will include JWT-based authentication:

```javascript
// Login endpoint (planned)
POST /api/auth/login
{
  "email": "admin@f3fitness.com",
  "password": "password"
}

// Response
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { ... }
}

// Protected requests
headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 📊 Rate Limiting

Currently, there is no rate limiting. Production deployments should implement rate limiting to prevent abuse.

---

## 🌐 CORS

The API allows requests from any origin in development. Configure CORS appropriately for production.

---

## 📚 Additional Resources

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [REST API Best Practices](https://restfulapi.net/)

---

**Need help? Check the main README.md or create an issue on GitHub.**
