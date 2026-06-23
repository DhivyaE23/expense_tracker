# SpendWise - MERN Stack

### 💰 Track Smart. Spend Less. Save More.

SpendWise is a full-stack expense tracking application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application helps users manage their income and expenses, monitor spending habits, and encourage better saving practices through a clean and intuitive dashboard.

---

## Features

### Current Features

* Add Income Transactions
* Add Expense Transactions
* Delete Transactions
* View All Transactions
* Calculate Total Income
* Calculate Total Expenses
* Calculate Current Balance
* Responsive Tailwind CSS UI
* MongoDB Database Integration
* REST API using Express.js
* React Frontend with Axios

### Upcoming Features

* Pie Chart Analytics
* Monthly Reports
* Budget Tracking
* Dashboard Improvements
* Category-wise Expense Analysis
* Authentication System

---

## Tech Stack

### Frontend

* React.js
* Axios
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## Project Structure

```text
SpendWise/

├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/DhivyaE23/spendwise.git
cd spendwise
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder:

```env
MONGO_URI=mongodb://localhost:27017/expense_tracker
PORT=5000
```

---

## API Endpoints

### Get All Transactions

```http
GET /api/transactions
```

### Add Transaction

```http
POST /api/transactions
```

### Delete Transaction

```http
DELETE /api/transactions/:id
```

### Sample Request

```json
{
  "title": "Salary",
  "amount": 25000,
  "type": "income",
  "category": "Job"
}
```

---

## Application Preview

<img width="1919" height="1020" alt="SpendWise Dashboard" src="https://github.com/user-attachments/assets/f636c87d-1ac4-44d9-9293-9044e53b6afa" />

---

## Future Enhancements

* Interactive Pie Chart Analytics
* Monthly Financial Reports
* Budget Planning and Alerts
* Advanced Dashboard Insights
* Search and Filter Transactions
* User Authentication & Authorization

---

## Author

**Dhivya E**

Built as a MERN Stack learning project to strengthen full-stack development skills using React, Node.js, Express.js, MongoDB, REST APIs, and Tailwind CSS.
