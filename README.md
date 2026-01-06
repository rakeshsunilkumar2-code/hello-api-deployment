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
<img width="1470" height="956" alt="output" src="https://github.com/user-attachments/assets/3cdc769c-00d3-4d87-bd05-dd0783eab925" />

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


pm2 start ecosystem.config.js
pm2 status
pm2 logs hello-api
 API Usage
Endpoint: /sayHello

Method: GET

Response:

{
  "message": "Hello User."
}
Test using terminal:

curl http://localhost/sayHello

** Result Screenshot **

The API can be tested in terminal, and the output will be:



{"message":"Hello User."}
Take a screenshot of this output and your PM2 status to show the server is running.
<img width="1470" height="956" alt="output" src="https://github.com/user-attachments/assets/314fdf82-9a9c-4967-b185-02dfa53ec164" />



** PM2 Commands **
Start app: pm2 start ecosystem.config.js

Reload app: pm2 reload ecosystem.config.js

Show status: pm2 status

Show logs: pm2 logs hello-api

Save process list: pm2 save

Stop app: pm2 stop hello-api

Delete app: pm2 delete hello-api

**Author**
Rakesh
