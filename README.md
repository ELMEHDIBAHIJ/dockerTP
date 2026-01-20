
A fully containerized web application served using Docker and Docker Compose.  
All dependencies are handled inside containers no local runtime setup required.

---

Features :
- Fully containerized app
- Production-ready setup
- Easy to run with a single command

---

tech and tools :
- Frontend: React
- backend: springboot
- Web Server: NGINX
- data base : MariaDB
- Containerization: Docker
- Orchestration: Docker Compose

---

Prerequisites:
- Docker

---

Steps:

1: Make sure the **Docker daemon is running**
   - **Windows / macOS**: start **Docker Desktop**
   - **Linux**: ensure the Docker service is running

2: Build and start the application:
**docker-compose up --build**

caution: 
 **default ports used by this app**
  - frontend : 3000
  - backend : 8089
  - database : 3307 
    