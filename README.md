# Store Rating App 🏪⭐

The **Store Rating App** is a full-stack role-based system that allows users to rate stores, store owners to view feedback, and admins to manage users and stores.

---

## 🔧 Tech Stack

- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Auth:** JWT (cookie-based)
- **Roles Supported:** Admin, StoreOwner, User

---

## 📁 Folder Structure

store-rating-app/
├── backend/
├── frontend/
└── README.md


---

## 🚀 Getting Started

### 📦 Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file inside the backend/ folder:
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET_KEY=your_jwt_secret
FRONTEND_URL=http://localhost:5173
```
4. (Optional but recommended) Seed the database with initial users and stores:
```bash
node seed.js
```
This creates some demo users (admin/user/storeOwner) and a few sample stores.

5. Start the backend server:
```bash
node index.js
```

💻 Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```



