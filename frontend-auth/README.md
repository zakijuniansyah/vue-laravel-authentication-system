# ⚡ Vue Frontend

Frontend application built with **Vue 3 + Vite**.
This project implements authentication system with API integration.

---

## 🚀 Features

* 🔐 Authentication (Login & Register)
* 📦 API Integration (Axios)
* 💾 Token-based Authentication (localStorage)
* 🧭 Protected Routes (Vue Router)
* 🌙 Modern Dark UI (Tailwind CSS)
* 📊 Dashboard Page

---

## ⚙️ Setup

Clone project:

git clone https://github.com/zakijuniansyah/vue-laravel-authentication-system.git

cd vue-laravel-authentication-system

Install dependencies:

npm install

Run development server:

npm run dev

---

## 📦 Dependencies

* Vue 3
* Vue Router
* Axios
* Tailwind CSS

---

## 🔗 API Configuration

Edit file:

src/api/axios.js

Set base URL sesuai backend kamu:

baseURL: "http://127.0.0.1:8000/api"

---

## 🔐 Authentication Flow

1. User melakukan login
2. Backend mengembalikan token
3. Token disimpan di localStorage
4. Axios otomatis mengirim token di header
5. User dapat mengakses halaman yang dilindungi

---

## 🧭 Routing

* / → Login
* /register → Register
* /dashboard → Dashboard (Protected)

---

## 📁 Project Structure

src/
│
├── api/
│   └── axios.js
│
├── views/
│   ├── Login.vue
│   ├── Register.vue
│   └── Dashboard.vue
│
├── router/
│   └── index.js
│
└── App.vue

---

## 📌 Notes

* Pastikan backend Laravel sudah berjalan sebelum menjalankan frontend
* Token harus valid untuk mengakses dashboard
* Gunakan browser console untuk debugging jika terjadi error

---

## 💼 Author

Zaki Juniansyah
Frontend Developer (Vue + Laravel)

---

## 📄 License

This project is open-source and available for learning purposes.
