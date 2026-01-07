# Hello API Deployment

**Author:** Rakesh  
---

## Project Overview
This is a simple **Node.js backend API** built with **Express.js** and deployed using **PM2**.  
The API provides a single endpoint `/sayHello` that returns a greeting message in JSON format.  

**Features:**
- Node.js + Express backend
- `/sayHello` endpoint
- Deployed using **PM2** for process management
- Supports cluster mode for production

---
** Output Screenshot **

The API can be tested in terminal, and the output will be:

<img width="1407" height="792" alt="image" src="https://github.com/user-attachments/assets/74119f3d-cb1c-4cb3-8314-c79b136cc6ea" />



##  Prerequisites
Make sure you have installed:
- Node.js (v18 or above recommended)
- npm
- PM2 (`npm install -g pm2`)

---



##  Project Structure
simple-backend-api/
│
├─ index.js # Main server file
├─ package.json # Node.js dependencies and scripts
├─ ecosystem.config.js # PM2 deployment configuration
├─ node_modules/ # Installed packages
├─ package-lock.json

---

##  Installation & Setup
1. Clone the repository:
```bash
git clone https://github.com/rakeshsunilkumar2-code/hello-api-deployment.git
cd hello-api-deployment
Install dependencies:


npm install
Start the server locally:


npm start
OR start using PM2 (recommended for production):


pm2 start index.js --name hello-api -i max
pm2 status
pm2 logs 
 API Usage
Endpoint: /sayHello

Method: GET

Response:

{
  "message": "Hello User."
}
Test using terminal:

curl http://localhost/sayHello

** Result **

{"message":"Hello User."}


**Author**
Rakesh
