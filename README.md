# Expense Tracker - MERN Stack

A full-stack Expense Tracker application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

## Features

### Current Features

* Add Income Transactions
* Add Expense Transactions
* View All Transactions
* MongoDB Database Integration
* Calculate Total Income
* Calculate Total Expenses
* Calculate Current Balance
* REST API using Express.js
* React Frontend with Axios

### Upcoming Features

* Delete Transactions
* Tailwind CSS UI
* Pie Chart Analytics
* Monthly Reports
* Budget Tracking
* Dashboard Improvements

## Tech Stack

### Frontend

* React.js
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Project Structure

expense-tracker/

├── client/

│   ├── src/

│   └── package.json

│

├── server/

│   ├── models/

│   ├── routes/

│   ├── .env

│   └── package.json

│

└── README.md

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker
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

## Environment Variables

Create a `.env` file inside the server folder:

```env
MONGO_URI=mongodb://localhost:27017/expense_tracker
PORT=5000
```

## API Endpoints

### Get All Transactions

```http
GET /api/transactions
```

### Add Transaction

```http
POST /api/transactions
```

Sample Request:

```json
{
  "title": "Salary",
  "amount": 25000,
  "type": "income",
  "category": "Job"
}
```

## Screenshots

<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/f636c87d-1ac4-44d9-9293-9044e53b6afa" />


## Future Enhancements

* Transaction Deletion
* Category-wise Analytics
* Monthly Expense Reports
* Budget Alerts
* Responsive Design
* Authentication

## Author

Dhivya E
Built as a MERN Stack learning project.
