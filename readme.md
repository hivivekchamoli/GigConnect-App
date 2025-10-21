# 🌐 GigConnect

**A Modern Freelance Collaboration Platform Built with MERN Stack**

---

## 🚀 Overview

**GigConnect** is a full-featured freelance and gig collaboration platform designed to streamline how **freelancers** and **clients** connect, collaborate, and manage projects.

With real-time chat, gig management, task tracking, and secure authentication, GigConnect offers an all-in-one ecosystem for remote teams and individuals.

---

## 🧩 Key Features

### 👥 User Management

* User authentication using **JWT (JSON Web Tokens)**
* Separate roles for **Clients** and **Freelancers**
* User profile with skills, bio, ratings, and portfolio

### 💼 Gig Management

* Clients can **post gigs** with project details and budgets
* Freelancers can **browse, apply, and bid** for gigs
* Proposal management system for offers and approvals

### 🧾 Project Dashboard

* Task assignment and tracking
* Status updates and milestone progress
* Real-time collaboration for active projects

### 💬 Real-Time Chat

* Built using **Socket.IO** for instant messaging
* Read receipts and typing indicators
* File and image sharing within chat rooms

### 📊 Analytics & Insights

* Track income, projects, and deadlines
* Client dashboard for project performance metrics

---

## 🏗️ Tech Stack

| Category           | Technologies                                                 |
| ------------------ | ------------------------------------------------------------ |
| **Frontend**       | React.js / Next.js, Tailwind CSS, Framer Motion              |
| **Backend**        | Node.js, Express.js                                          |
| **Database**       | **MongoDB (Mongoose ORM)**                                   |
| **Real-time**      | Socket.IO                                                    |
| **Authentication** | JWT                                                          |
| **Media Storage**  | MongoDB                                        |
| **Deployment**     | Vercel (Frontend), Render / Railway (Backend), MongoDB Atlas |

---

## 📁 Folder Structure

```
GigConnect/
├── frontend/                     # Frontend (React / Next.js)
│   ├── src/
│   │   ├── components/         # UI Components
│   │   ├── pages/              # Pages / Routes
│   │   ├── context/            # Global State
│   │   └── styles/             # CSS / Tailwind
│   └── package.json
│
├── backend/                     # Backend (Node + Express)
│   ├── config/                 # Database & Cloud Config
│   ├── controllers/            # Route Controllers
│   ├── models/                 # Mongoose Schemas
│   ├── routes/                 # API Routes
│   ├── middleware/             # Auth & Validation
│   ├── utils/                  # Helper Functions
│   ├── server.js               # Entry Point
│   └── package.json
│
├── .env.example
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gigconnect.git
cd gigconnect
```

### 2. Install Dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 3. Setup MongoDB Connection

1. Create a **MongoDB Atlas** account.
2. Create a new cluster and get your **MongoDB URI**.
3. Create a `.env` file inside the `server` folder:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/gigconnect
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 4. Run the Application

In two separate terminals:

```bash
# Terminal 1: Run backend
cd server
npm start

# Terminal 2: Run frontend
cd client
npm run dev
```

By default:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 🧠 MongoDB Data Models

### User Model

```js
{
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["client", "freelancer"] },
  skills: [String],
  rating: Number,
  bio: String,
  portfolio: [String]
}
```

### Gig Model

```js
{
  title: String,
  description: String,
  budget: Number,
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: String, default: "open" }
}
```

### Chat Model

```js
{
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [{
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    createdAt: Date
  }]
}
```

---

## 💡 Future Enhancements

* Integrated payment gateway (Stripe / Razorpay)
* AI-driven gig suggestions
* Skill verification and certification badges
* Email & push notifications
* Mobile app using React Native

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch:

   ```bash
   git checkout -b feature/yourFeature
   ```
3. Commit your changes
4. Push and open a pull request

---

## 🛡️ License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Vivek Chamoli**
📧 [[hivivekchamoli@gmail.com]
💻 [GitHub](https://github.com/hivivekchamoli) 
