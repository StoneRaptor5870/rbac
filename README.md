<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="nestdotjs" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="prisma" />
    <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres" />
  </div>

  <h3 align="center">Role Based Access Control API</h3>

   <div align="center">
     A simplified Role-Based Access Control (RBAC) system in a NestJS application
     using Prisma and TypeScript. The project includes a minimal schema, implementing
     JWT-based authentication, and ensuring that only authorized users can access specific
     routes.
    </div>
</div>

---

## 📋 Table of Contents

1. ⚙️ [API Endpoints](#api-endpoints)
2. 🔋 [How to Run Project Locally](#how-to-run-project-locally)

---

## ⚙️ API Endpoints

### **Authentication Routes**
| Method | Endpoint          | Description              | Body                                      |
|--------|-------------------|--------------------------|-------------------------------------------|
| POST   | `/auth/register`  | Register a new user      | `{ "name", "email", "password", "role" }` |
| POST   | `/auth/login`     | Authenticate and get JWT | `{ "email", "password" }`                 |

### **Protected Resource Routes**
| Method | Endpoint             | Description                           | Role Required         |
|--------|----------------------|---------------------------------------|-----------------------|
| GET    | `/resource/admin`    | Access resources for admin users      | `ADMIN`               |
| GET    | `/resource/manager`  | Access resources for manager users    | `MANAGER` or `ADMIN`  |
| GET    | `/resource/customer` | Access resources for customer users   | `CUSTOMER` or `ADMIN` |
| GET    | `/resource/public`   | Access public resources               | None                  |

---

## 🔋 How to Run Project Locally

**Steps:**
   ```bash
   git clone https://github.com/StoneRaptor5870/rbac.git
   cd rbac
   npm install
   Create a .env file in the root directory as .env.example
   npx prisma migrate dev
   npm run start:dev
   Navigate to http://localhost:3000
