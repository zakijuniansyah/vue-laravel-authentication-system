# 🔥 Laravel Backend API

This is the backend API built with Laravel and Sanctum.

---

## ⚙️ Setup

```
composer install
cp .env.example .env
php artisan key:generate
```

---

## 🗄️ Database

Edit `.env`:

```
DB_DATABASE=backend-auth
DB_USERNAME=root
DB_PASSWORD=
```

Run:

```
php artisan migrate
```

---

## 🔐 Sanctum Setup

```
composer require laravel/sanctum
php artisan migrate
```

---

## 🚀 Run Server

```
php artisan serve
```

---

## 📡 API Endpoints

### Public

* POST `/api/register`
* POST `/api/login`

### Protected (Bearer Token)

* GET `/api/user`
* POST `/api/logout`

---

## 🔑 Authentication

Uses Laravel Sanctum with token-based authentication.

---

## 📌 Notes

Make sure to send token in header:

```
Authorization: Bearer {token}
```
