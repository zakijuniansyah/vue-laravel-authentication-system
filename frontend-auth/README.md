# ⚡ Vue Frontend

Frontend built with Vue 3 + Vite.

---

## ⚙️ Setup

```
npm install
npm run dev
```

---

## 📦 Dependencies

* Vue 3
* Vue Router
* Axios

---

## 🔗 API Configuration

Edit:

```
src/api/axios.js
```

```
baseURL: http://127.0.0.1:8000/api
```

---

## 🔐 Authentication Flow

1. User login → receive token
2. Token saved in localStorage
3. Axios sends token in header
4. Protected routes require login

---

## 📌 Notes

Make sure backend is running before starting frontend.
