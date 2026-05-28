<div align="center">

<img src="https://i.ibb.co/placeholder/logo.png" alt="StudyNotion Logo" width="80"/>

# 🎓 StudyNotion

### *An EdTech Platform That Redefines Online Learning*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-FFD60A?style=for-the-badge&labelColor=0D0D0D)](https://studynotion-xxxx.vercel.app)
[![Backend](https://img.shields.io/badge/⚙️_Backend-Render-46E3B7?style=for-the-badge&labelColor=0D0D0D)](https://studynotion-backend-tgih.onrender.com)
[![GitHub](https://img.shields.io/badge/📁_Repo-GitHub-white?style=for-the-badge&labelColor=0D0D0D)](https://github.com/sohit-punia/studynotion)

![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About

**StudyNotion** is a full-stack EdTech web application built on the **MERN stack** that enables instructors to create and sell courses, while students can browse, purchase, and learn from them — all in one place.

> *"Education to future-proof your career."*

---

## ✨ Features

### 👨‍🎓 For Students
| Feature | Description |
|---|---|
| 🔐 **OTP-based Signup** | Secure email verification via Gmail SMTP |
| 📚 **Browse Courses** | Explore courses by category with rich details |
| 🛒 **Course Purchase** | Integrated Razorpay payment gateway |
| 🎥 **Video Lectures** | Stream course content with progress tracking |
| ⭐ **Ratings & Reviews** | Rate and review courses after completion |
| 👤 **Profile Management** | Update profile picture, bio, and personal info |

### 👨‍🏫 For Instructors
| Feature | Description |
|---|---|
| ➕ **Create Courses** | Multi-step course creation with builder |
| 📂 **Section & Lecture Management** | Organize content into sections and sub-sections |
| 🖼️ **Media Uploads** | Upload thumbnails and videos via Cloudinary |
| 📊 **Dashboard Analytics** | Track enrollments, revenue, and course stats |
| ✏️ **Edit & Publish** | Draft → Edit → Publish workflow |
| 📢 **Student Announcements** | Notify enrolled students instantly |

### 🛡️ For Admins
| Feature | Description |
|---|---|
| 📁 **Category Management** | Create and manage course categories |
| 👥 **User Management** | Oversee all student and instructor accounts |

---

## 🛠️ Tech Stack

### Frontend
```
React 18          →  UI Framework
Redux Toolkit     →  State Management
React Router v6   →  Client-side Routing
Tailwind CSS      →  Utility-first Styling
React Hook Form   →  Form Handling
Axios             →  HTTP Client
```

### Backend
```
Node.js + Express →  REST API Server
MongoDB + Mongoose→  Database & ODM
JWT               →  Authentication
Bcrypt            →  Password Hashing
Nodemailer        →  Email / OTP Service
Cloudinary        →  Media Storage
Razorpay          →  Payment Gateway
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Gmail account with App Password
- Razorpay account

### 1. Clone the repository
```bash
git clone https://github.com/sohit-punia/studynotion.git
cd studynotion
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `server/.env`:
```env
DB_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/studynotion
PORT=4000
JWT_SECRET=your_jwt_secret

MAIL_HOST=smtp.gmail.com
MAIL_USER=your@gmail.com
MAIL_PASS=your_16char_app_password

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
# In root directory
npm install
npm start
```

> App runs at `http://localhost:3000`

---

## 📁 Project Structure

```
studynotion/
│
├── src/                        # React Frontend
│   ├── components/             # Reusable UI components
│   │   ├── cores/              # Auth, Dashboard, Course components
│   │   └── common/             # Navbar, Footer, etc.
│   ├── pages/                  # Route-level pages
│   ├── services/               # API calls & Redux slices
│   │   ├── apis.js             # All API endpoint URLs
│   │   └── operations/         # Async thunks (auth, course, etc.)
│   ├── slices/                 # Redux state slices
│   └── utils/                  # Helper functions
│
└── server/                     # Node.js Backend
    ├── controllers/            # Route handler logic
    │   ├── Auth.js             # Signup, Login, OTP
    │   ├── Course.js           # Course CRUD
    │   ├── Category.js         # Category management
    │   └── Payment.js          # Razorpay integration
    ├── models/                 # Mongoose schemas
    ├── routes/                 # Express routers
    ├── middlewares/            # Auth, role guards
    ├── utils/                  # mailSender, imageUploader
    └── config/                 # DB, Cloudinary setup
```

---

## 🌐 Deployment

| Service | Platform | URL |
|---|---|---|
| **Frontend** | Vercel | `studynotion-xxxx.vercel.app` |
| **Backend** | Render | `studynotion-backend-tgih.onrender.com` |
| **Database** | MongoDB Atlas | Cloud hosted |
| **Media** | Cloudinary | Cloud storage |

> ⚠️ Free Render instances spin down after inactivity — first request may take ~50 seconds.

---

## 📸 Screenshots

| Page | Preview |
|---|---|
| 🏠 Home | Landing page with course catalog |
| 📝 Signup | OTP-based email verification flow |
| 📚 Course Detail | Rich course info with rating & reviews |
| 🏗️ Course Builder | Multi-step instructor course creation |
| 📊 Dashboard | Instructor analytics and earnings |

---

## 🔮 Future Enhancements

- [ ] 🔔 Real-time notifications with Socket.io
- [ ] 💬 Live Q&A / discussion forums per course
- [ ] 📱 Mobile app (React Native)
- [ ] 🤖 AI-powered course recommendations
- [ ] 📜 Certificate generation on course completion
- [ ] 🌍 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sohit Punia**

[![GitHub](https://img.shields.io/badge/GitHub-sohit--punia-181717?style=flat-square&logo=github)](https://github.com/sohit-punia)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by Sohit Punia

⭐ **Star this repo if you found it helpful!** ⭐

</div>
<div align="center">

<img src="https://i.ibb.co/placeholder/logo.png" alt="StudyNotion Logo" width="80"/>

# 🎓 StudyNotion

### *An EdTech Platform That Redefines Online Learning*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-FFD60A?style=for-the-badge&labelColor=0D0D0D)](https://studynotion-xxxx.vercel.app)
[![Backend](https://img.shields.io/badge/⚙️_Backend-Render-46E3B7?style=for-the-badge&labelColor=0D0D0D)](https://studynotion-backend-tgih.onrender.com)
[![GitHub](https://img.shields.io/badge/📁_Repo-GitHub-white?style=for-the-badge&labelColor=0D0D0D)](https://github.com/sohit-punia/studynotion)

![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About

**StudyNotion** is a full-stack EdTech web application built on the **MERN stack** that enables instructors to create and sell courses, while students can browse, purchase, and learn from them — all in one place.

> *"Education to future-proof your career."*

---

## ✨ Features

### 👨‍🎓 For Students
| Feature | Description |
|---|---|
| 🔐 **OTP-based Signup** | Secure email verification via Gmail SMTP |
| 📚 **Browse Courses** | Explore courses by category with rich details |
| 🛒 **Course Purchase** | Integrated Razorpay payment gateway |
| 🎥 **Video Lectures** | Stream course content with progress tracking |
| ⭐ **Ratings & Reviews** | Rate and review courses after completion |
| 👤 **Profile Management** | Update profile picture, bio, and personal info |

### 👨‍🏫 For Instructors
| Feature | Description |
|---|---|
| ➕ **Create Courses** | Multi-step course creation with builder |
| 📂 **Section & Lecture Management** | Organize content into sections and sub-sections |
| 🖼️ **Media Uploads** | Upload thumbnails and videos via Cloudinary |
| 📊 **Dashboard Analytics** | Track enrollments, revenue, and course stats |
| ✏️ **Edit & Publish** | Draft → Edit → Publish workflow |
| 📢 **Student Announcements** | Notify enrolled students instantly |

### 🛡️ For Admins
| Feature | Description |
|---|---|
| 📁 **Category Management** | Create and manage course categories |
| 👥 **User Management** | Oversee all student and instructor accounts |

---

## 🛠️ Tech Stack

### Frontend
```
React 18          →  UI Framework
Redux Toolkit     →  State Management
React Router v6   →  Client-side Routing
Tailwind CSS      →  Utility-first Styling
React Hook Form   →  Form Handling
Axios             →  HTTP Client
```

### Backend
```
Node.js + Express →  REST API Server
MongoDB + Mongoose→  Database & ODM
JWT               →  Authentication
Bcrypt            →  Password Hashing
Nodemailer        →  Email / OTP Service
Cloudinary        →  Media Storage
Razorpay          →  Payment Gateway
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Gmail account with App Password
- Razorpay account

### 1. Clone the repository
```bash
git clone https://github.com/sohit-punia/studynotion.git
cd studynotion
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `server/.env`:
```env
DB_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/studynotion
PORT=4000
JWT_SECRET=your_jwt_secret

MAIL_HOST=smtp.gmail.com
MAIL_USER=your@gmail.com
MAIL_PASS=your_16char_app_password

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret

RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

```bash
npm run dev
```

### 3. Setup Frontend
```bash
# In root directory
npm install
npm start
```

> App runs at `http://localhost:3000`

---

## 📁 Project Structure

```
studynotion/
│
├── src/                        # React Frontend
│   ├── components/             # Reusable UI components
│   │   ├── cores/              # Auth, Dashboard, Course components
│   │   └── common/             # Navbar, Footer, etc.
│   ├── pages/                  # Route-level pages
│   ├── services/               # API calls & Redux slices
│   │   ├── apis.js             # All API endpoint URLs
│   │   └── operations/         # Async thunks (auth, course, etc.)
│   ├── slices/                 # Redux state slices
│   └── utils/                  # Helper functions
│
└── server/                     # Node.js Backend
    ├── controllers/            # Route handler logic
    │   ├── Auth.js             # Signup, Login, OTP
    │   ├── Course.js           # Course CRUD
    │   ├── Category.js         # Category management
    │   └── Payment.js          # Razorpay integration
    ├── models/                 # Mongoose schemas
    ├── routes/                 # Express routers
    ├── middlewares/            # Auth, role guards
    ├── utils/                  # mailSender, imageUploader
    └── config/                 # DB, Cloudinary setup
```

---

## 🌐 Deployment

| Service | Platform | URL |
|---|---|---|
| **Frontend** | Vercel | `studynotion-xxxx.vercel.app` |
| **Backend** | Render | `studynotion-backend-tgih.onrender.com` |
| **Database** | MongoDB Atlas | Cloud hosted |
| **Media** | Cloudinary | Cloud storage |

> ⚠️ Free Render instances spin down after inactivity — first request may take ~50 seconds.

---

## 📸 Screenshots

| Page | Preview |
|---|---|
| 🏠 Home | Landing page with course catalog |
| 📝 Signup | OTP-based email verification flow |
| 📚 Course Detail | Rich course info with rating & reviews |
| 🏗️ Course Builder | Multi-step instructor course creation |
| 📊 Dashboard | Instructor analytics and earnings |

---

## 🔮 Future Enhancements

- [ ] 🔔 Real-time notifications with Socket.io
- [ ] 💬 Live Q&A / discussion forums per course
- [ ] 📱 Mobile app (React Native)
- [ ] 🤖 AI-powered course recommendations
- [ ] 📜 Certificate generation on course completion
- [ ] 🌍 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Sohit Punia**

[![GitHub](https://img.shields.io/badge/GitHub-sohit--punia-181717?style=flat-square&logo=github)](https://github.com/sohit-punia)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by Sohit Punia

⭐ **Star this repo if you found it helpful!** ⭐

</div>
