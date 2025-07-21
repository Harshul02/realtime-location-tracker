# 🌍 Real-Time Location Tracker

A real-time location tracking web app built using **Node.js**, **Express.js**, **Template Engine (EJS)**, **Socket.IO**, and **Leaflet.js** — Dockerized for easy deployment. It allows users to share their live location and view others on a collaborative map interface.

---

## ✨ Features

- 🔁 **Live Geolocation Updates** using WebSockets
- 🗺️ **Interactive Map** with Leaflet and OpenStreetMap
- 👤 **Username-based Identification** on Markers
- 📱 **Mobile + Desktop Support**
- 🔐 **Permission Handling** for Location Access
- 🐳 **Dockerized** for Simple Deployment

---

## 📦 Docker Image

The app is published on Docker Hub.

👉 **Pull Image:**

```bash
docker pull harshuljain/realtime-location-tracker
```

Run Image
```bash
docker run -p 3000:3000 harshuljain/realtime-location-tracker
```
---

## 🧪 Running Locally (Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Harshul02/realtime-location-tracker.git
cd realtime-location-tracker
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Server
```bash
node app.js
```
Visit: http://localhost:3000


## 🐳 Docker Setup

### Build and Run
```bash
docker build -t realtime-location-tracker .
docker run -p 3000:3000 realtime-location-tracker
```
