# 🎬 Movie Review App

A responsive **Movie Review Application** built using **React JS**, **Tailwind CSS**, and **React Hooks**. The application allows users to browse movies, search and filter them, view detailed movie information, and provide star-based ratings.

---

## 📌 Features

### 🎥 Movie Listings
- Display movies using **OMDB API** or mock JSON data.
- Show movie poster, title, release year, and genre.
- Responsive grid layout for desktop, tablet, and mobile devices.

### 🔍 Search & Filter
- Search movies by title.
- Filter movies by:
  - Genre
  - Release Year
  - Rating
- Instant filtering using React state.

### 📄 Movie Details
- View complete movie information.
- Display:
  - Poster
  - Title
  - Plot/Description
  - Genre
  - Cast
  - Director
  - Runtime
  - Language
  - Release Date
  - IMDB Rating
- Clean and responsive detail page.

### ⭐ Movie Ratings
- Rate movies using a **5-star rating system**.
- Display average movie rating.
- Highlight the user's selected rating.
- Ratings are stored locally using React state (or Local Storage).

### 👤 User Experience
- Easy navigation between movie list and detail page.
- Responsive UI built with Tailwind CSS.
- Fast search and filtering.
- Interactive star rating component.

---

# 🛠️ Tech Stack

- **React JS**
- **Tailwind CSS**
- **React Hooks**
- **React Router DOM**
- **Axios**
- **OMDB API** (or Mock JSON)
- **JavaScript (ES6+)**

---

# 📂 Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── MovieCard.jsx
│   ├── RatingStars.jsx
│   └── Loader.jsx
│
├── pages/
│   ├── Home.jsx
│   └── MovieDetails.jsx
│
├── services/
│   └── movieApi.js
│

├── utils/
│   └── helpers.js
│
├── data/
│   └── movies.json (optional)
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/your-username/movie-review-app.git
```

Navigate to the project folder

```bash
cd movie-review-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 🔑 OMDB API Setup

1. Visit **https://www.omdbapi.com/**
2. Register and obtain a free API key.
3. Create a `.env` file in the project root.

```env
VITE_OMDB_API_KEY=your_api_key
```

Example API request

```javascript
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman
```

---

# 📱 Screens

- Home Page
- Search Movies
- Filter Movies
- Movie Details
- Star Rating
- Responsive Mobile View

---

# ⭐ Rating System

Users can:

- Select ratings from **1 to 5 stars**
- View selected rating instantly
- Display average rating
- Update rating dynamically

---

# 🎯 React Concepts Used

- Functional Components
- useState
- useEffect
- Custom Hooks
- Props
- Conditional Rendering
- Event Handling
- Component Reusability
- React Router
- API Integration
- Local State Management

---

# 🎨 Tailwind CSS Features

- Responsive Grid
- Flexbox
- Hover Effects
- Card Layout
- Buttons
- Typography
- Shadows
- Rounded Components
- Mobile-first Design

---

# 📌 Future Enhancements

- User Authentication
- Favorites/Watchlist
- Infinite Scrolling
- Pagination
- Dark Mode
- Movie Reviews & Comments
- Backend Integration
- Local Storage Persistence
- Sorting by Rating
- Trending Movies
- Recently Viewed Movies

---

# 📸 Sample Workflow

1. Open the application.
2. Browse the list of movies.
3. Search movies by title.
4. Filter by genre, year, or rating.
5. Click a movie card to view detailed information.
6. Rate the movie using the star rating component.
7. See the selected rating reflected immediately.

---

# 📚 Learning Outcomes

This project demonstrates:

- React component architecture
- API integration using Axios
- React Hooks for state management
- Dynamic filtering and searching
- Reusable UI components
- Responsive design using Tailwind CSS
- Routing with React Router
- Interactive star rating implementation

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Create a Pull Request.

---

# 📄 License

This project is developed for educational and learning purposes.

---

## 👩‍💻 Author

**Durgadevi Vadakalur Krishnan**

GitHub: https://github.com/durgadevivk
