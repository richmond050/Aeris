# Aeris Weather App
# Live Demo [https://aeris-app.netlify.app/]

A clean, modern weather application built with React, Vite, and Tailwind CSS.

## Features

- Real-time weather data from OpenWeatherMap API
- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Loading states and error handling

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the project root with your OpenWeatherMap API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
   You can get an API key by signing up at [OpenWeatherMap](https://openweathermap.org/api)

4. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

- `src/App.jsx` - Main application component
- `src/index.css` - CSS styles with Tailwind imports
- `postcss.config.js` - PostCSS configuration for Tailwind

## Technologies Used

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- react-tsparticles
- OpenWeatherMap API

## License

MIT
