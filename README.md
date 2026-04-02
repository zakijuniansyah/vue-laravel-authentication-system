# 🚀 Vue Laravel Authentication System

A fullstack authentication system built with:

* ⚡ Vue.js (Frontend)
* 🔥 Laravel REST API (Backend)
* 🔐 Laravel Sanctum (Authentication)

---

## 📁 Project Structure

```
vue-laravel-auth/
│
├── backend/   # Laravel API
├── frontend/  # Vue App
```

---

## ✨ Features

* User Registration
* User Login
* Token-based Authentication (Sanctum)
* Protected Routes (Frontend & Backend)
* Dashboard (Authenticated User)
* Logout System

---

## 🛠️ Tech Stack

* Vue 3 + Vite
* Axios
* Vue Router
* Laravel 10+
* MySQL
* Laravel Sanctum

---

## ⚙️ Installation

### 1. Clone Repository

```
git clone https://github.com/zakijuniansyah/vue-laravel-authentication-system.git
cd vue-laravel-authentication-system
```

---

## 🔧 Backend Setup

```
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Set database di `.env`, lalu:

```
php artisan migrate
php artisan serve
```

---

## 🎨 Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔐 API Endpoints

| Method | Endpoint      | Description |
| ------ | ------------- | ----------- |
| POST   | /api/register | Register    |
| POST   | /api/login    | Login       |
| GET    | /api/user     | Get User    |
| POST   | /api/logout   | Logout      |

---

## 👨‍💻 Author

**Zaki Juniansyah**
Junior Fullstack Developer

---

## 📌 Notes

This project is built for learning and portfolio purposes.
