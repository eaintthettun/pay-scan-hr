# PayScan HR — IT Department HR Admin Dashboard

A mini Human Resource admin dashboard for managing employees, payments, and activity tracking.  
This project integrates both **software and hardware** components including employee QR card scanning with Arduino for tracking leave requests and salary payment confirmation.

---

## Features

- Employee management with roles (Teacher, Professor, Staff, etc.)
- Payment tracking and status
- QR code scanning integration via Arduino hardware
- React + Vite frontend using Flowbite React UI components
- Express.js backend API
- PostgreSQL database managed with Prisma ORM
- Environment variable management with `.env` files

---

## Tech Stack

- Frontend: React 18, Vite, TypeScript, Flowbite React
- Backend: Node.js, Express.js
- Database: PostgreSQL
- ORM: Prisma
- Hardware: Arduino UNO with QR scanner and LCD display
- Styling: Tailwind CSS + Flowbite

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL database
- Arduino IDE (for hardware programming)

---

### Installation

1. Clone this repo:

   git clone https://github.com/eaintthettun/pay-scan-hr.git
   cd pay-scan-hr

````

2. Install dependencies:

   npm install

3. Create a `.env` file in the backend folder and add your environment variables (example):

   DATABASE_URL="postgresql://your_user_name:your_password@localhost:5432/your_db_name"
   PORT=4000
   JWT_SECRET=your_jwt_secret

4. Set up your PostgreSQL database and run Prisma migrations:

   npx prisma migrate dev --name init

5. Start the development servers written in package.json(open two terminals of root project):

   - Backend (Express API):
     npm run server

   - Frontend (Vite React app):
     npm run dev

---

## Prisma Setup

- The Prisma schema is located in `backend/schema.prisma`.
- It defines the `Employee`, `Payment`, and other related models.
- Use Prisma Client to query and manage your database records in backend routes.

---

## Environment Variables (`.env`)

Use the `.env` file to keep sensitive data like database URLs, JWT secrets, API keys, and ports.
Make sure **not to commit** this file to public repositories.

Example variables:

DATABASE_URL="your_postgres_connection_string"
PORT=4000
JWT_SECRET="your_secret_key"

---

## Hardware Integration

- Arduino UNO reads employee QR codes via a scanner.
- After scanning, the employee's attendance will be recorded.
- At the end of the month, the app calculates his leave days(30 days-leave days)
- The subtracted days are used in calculating his salary.
- The employee gets his salary by mobile banking.
- After the payment is successful, the qr code will be scanned again to mark payment success.
- This project uses serial communication between Arduino and backend.

## Constraints

- No employee can have the salary two times within the same month.

---

## Folder Structure

```
/backend         # Express API server with Prisma integration
/src             # React + Vite + Flowbite React dashboard
/prisma          # Prisma schema and migrations
/hardware        # Arduino source code for QR scanning and LCD display

---

## Scripts

- `npm run dev` — Start frontend dev server
- `npm run server` — Start backend Express server
- `npx prisma migrate dev` — Run Prisma migrations
- `npx prisma generate` — Generate Prisma client

---

## Contributions

Contributions are welcome! Please open issues or submit pull requests.

---
````
