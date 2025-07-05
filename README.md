# Unipost

**Unipost** is a simple web application that allows users to create, view, and delete posts after authentication.

🔗 **Live demo:** [https://unipost.wallte.one](https://unipost.wallte.one)  
(Login: `admin` | Password: `admin`)



## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Frontend:** Vanilla HTML & CSS (basic responsive design)  
- **Database:** MongoDB Atlas  
- **Templating:** EJS  
- **Testing:** Jest  
- **CI/CD:** GitHub Actions  
- **Containerization & Hosting:** Docker, Docker Hub, Traefik, Let's Encrypt  



## 🚀 Features

- User authentication (`/auth`)
- Post management (`/posts`)
  - View all posts in descending order
  - Create and delete posts
- Posts are fetched from MongoDB on page load
- Basic responsive design for desktop and mobile



## ⚙️ Deployment

Deployment is fully automated via **GitHub Actions**:

1. A Docker image is built and pushed to Docker Hub.
2. The server pulls the latest image and restarts the app using Docker Compose.
3. **Traefik** is used as the reverse proxy and automatically issues SSL certificates via **Let's Encrypt**.


