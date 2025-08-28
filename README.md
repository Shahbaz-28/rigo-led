# RIGO Lighting - Complete Project

A complete lighting products catalog system with modern frontend and scalable backend architecture.

## 📁 Project Structure

```
rigoled/
├── frontend/              # Next.js Frontend Application
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── data/            # Product data and configurations
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
├── backend/              # Backend API (Future)
│   ├── src/             # Source code
│   ├── routes/          # API routes
│   ├── models/          # Data models
│   └── package.json     # Backend dependencies
├── docs/                # Documentation
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Quick Start

### Frontend (Next.js)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Backend (Future Implementation)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Run development server
npm run dev

# API will be available at http://localhost:5000
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis

### Backend (Planned)
- **Framework**: Node.js with Express
- **Database**: MongoDB/PostgreSQL
- **Authentication**: JWT
- **File Upload**: Multer
- **Validation**: Joi/Zod

## 📱 Features

### Frontend Features
- ✅ Responsive design across all devices
- ✅ Interactive product catalog
- ✅ Card parallax animations
- ✅ Search and filtering
- ✅ WhatsApp integration
- ✅ Product galleries
- ✅ Modern UI/UX

### Backend Features (Planned)
- 🔄 RESTful API
- 🔄 Product management
- 🔄 User authentication
- 🔄 File upload system
- 🔄 Database integration
- 🔄 Admin dashboard

## 🎯 Current Status

### ✅ Completed
- Frontend application with full functionality
- Product catalog with 11 products
- Responsive design
- Interactive parallax sections
- WhatsApp integration
- Search and filtering

### 🔄 In Progress
- Backend API development
- Database integration
- Admin panel

### 📋 Planned
- User authentication
- Order management
- Analytics dashboard
- Mobile app

## 📦 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
npm start
```

### Backend Deployment (Future)
```bash
cd backend
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` files in respective directories:

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WHATSAPP_NUMBER=your-whatsapp-number
```

**Backend (.env.local)**
```env
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and inquiries:
- WhatsApp: [Your WhatsApp Number]
- Email: [Your Email]
- Website: [Your Website]

---

Built with ❤️ by RIGO Lighting Team
