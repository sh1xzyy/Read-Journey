# 📚 Read-Journey

**BookTracker** is a web application for managing and tracking your book reading. Users can register, log in, explore recommended books, add books to their personal library, and monitor their reading progress.

---

## 🚀 Features

### **1. Registration & Login**
- Forms `RegisterForm` and `LoginForm` with **react-hook-form + Yup** validation.
- Field rules:
  - **Name:** string
  - **Email:** valid email format `/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/`
  - **Password:** minimum 7 characters
- Errors are displayed to users, backend errors appear as **popup notifications**.
- Automatic login after successful registration and redirect to `/recommended`.

---

### **2. Header & Navigation**
- Company **logo** and navigation menu `UserNav`:
  - `/recommended` → Recommended page
  - `/library` → My Library page
- Active page highlighted.
- Mobile/tablet friendly with **burger menu**.
- **Log out** button clears user session and Redux store, redirects to `Welcome page`.

---

### **3. Recommended Books (`/recommended`)**
- **Dashboard** component wraps:
  - Filters form
  - App description with link to My Library
  - Static quote block
- **RecommendedBooks** component:
  - Server-side pagination with "prev" / "next" arrows
  - Book cards with cover, title, and author
  - Click on book cover opens **modal** with detailed info and **Add to library** button

---

### **4. My Library (`/library`)**
- **Dashboard** with `AddBook` form (3 inputs + "Add book" button)
- User's book list with **filter by reading status**
- Book cards:
  - Cover, title, author
  - Delete button to remove book from library
  - Modal window with **Start reading** button

---

### **5. Reading Page (`/reading`)**
- **Dashboard** with `AddReading` form:
  - Button shows **"To start"** or **"To stop"** depending on reading phase
  - Updates reading progress on backend
  - Displays notifications for backend errors
- **MyBook** shows reading progress
- **Details** block:
  - **Diary**: logs reading events by date (pages read, time, progress %)
  - **Statistics**: chart visualizing reading progress
- Modal appears when book is finished

---

## 🛠 Technologies Used

- React, React Router, Redux, axios, react-hook-form

---

