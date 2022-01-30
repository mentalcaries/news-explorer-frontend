# Welcome to News Explorer 📰 🌎
<img src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="MarineGEO circle logo" style="height: 175px; width:100%; object-fit: cover"/>

### Submitted as the Final Project for Practicum
By Devin Jaggernauth

### 👀 [View Live Site here](https://newsxp.students.nomoreparties.sbs/) 

### 🖥 Tech Stack: MERN
- React JS - Frontend
- CSS - Styling
- Node/Express JS - Back end server
- MongoDB - Backend database
- Google Cloud for hosting and deployment

---
### 🧑🏽‍💻 FrontEnd

This project features a React frontend that makes calls to NewsAPI for news articles. The app is fully responsive with all styles done in vanilla CSS. Routing is done via React Router with Higher Order Components such as ProtectedRoutes being used to hide content that requires users to be logged in.

Authentication and authorization are facilitated by use of Javascript Web Tokens that are generated and verified by the backend.

Once logged in, users have the option to search and save articles for later perusal or collection. Articles are labelled according to the keyword from which they were searched and can be deleted once they are no longer needed. Clicking each card will redirect the user to the source page of the article.

The Saved Articles header returns a summary of the top two keywords which is conditionally rendered. Deleting cards will update and adjust this summary in real time.

---

### 🥭 Backend Repository can be viewed here:
https://github.com/mentalcaries/news-explorer-backend
