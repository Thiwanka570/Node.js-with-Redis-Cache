# **Node.js with Redis Cache Example**  

A simple Node.js application demonstrating basic Redis caching operations (GET, SET, DELETE) using Express.  

## **📌 Features**  
- **SET** - Store data in Redis cache  
- **GET** - Retrieve cached data by key  
- **DELETE** - Remove cached data  
- **Environment variables** (`.env`) for Redis configuration  

## **🚀 Setup & Run**  

### **Prerequisites**  
- Node.js (v14+)  
- Redis server (running locally or remote)  

### **Installation**  
1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/node-redis-cache-demo.git
   cd node-redis-cache-demo
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Configure `.env` (copy `.env.example`):  
   ```env
   REDIS_HOST=localhost
   REDIS_PORT=6379
   APP_PORT=3000
   ```  

4. Start the server:  
   ```bash
   npm start
   ```  

## **📡 API Endpoints**  

| Method | Endpoint | Description | Example Request |
|--------|----------|-------------|----------------|
| `POST` | `/cache` | Store data | `curl -X POST -H "Content-Type: application/json" -d '{"key":"user1","value":{"name":"Alice"}}' http://localhost:3000/cache` |
| `GET`  | `/cache/:key` | Retrieve data | `curl http://localhost:3000/cache/user1` |
| `DELETE` | `/cache/:key` | Delete data | `curl -X DELETE http://localhost:3000/cache/user1` |

## **📂 Project Structure**  
```
node-redis-cache-demo/
├── .env                # Environment variables
├── src/
│   ├── config/         # Redis connection setup
│   ├── controllers/    # Route handlers
│   ├── services/       # Redis operations
│   └── index.js        # Main server file
└── README.md
```

## **💡 Why Use Redis with Node.js?**  
- **Fast in-memory storage** (ideal for caching)  
- **Reduces database load** by storing frequently accessed data  
- **Supports TTL (Time-To-Live)** for auto-expiring cache  

## **🔧 Troubleshooting**  
- **Redis not running?** Start it with:  
  ```bash
  redis-server
  ```
- **Connection issues?** Check `.env` and Redis logs.  

## **📜 License**  
MIT  

---

### **🎯 Summary**  
This project demonstrates how to integrate **Redis caching** in a **Node.js/Express** app, improving performance by reducing repeated database queries.  

**Try it out and cache all the things!** 🚀🔥  

---

Would you like me to add anything else (e.g., screenshots, deployment steps, or advanced caching strategies)? 😊
