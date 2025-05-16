import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";
import { fetchWeatherData } from "./api/weather";   

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); //store api response
  const [error, setError] = useState(""); // store any error

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(""); // clear any previous error
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };
  
  const fetchWeather = async () => {
    if (!city) return;

    try {
        const data = await fetchWeatherData(city); 
        console.log("Weather data:", data);
    } catch (error) {
        console.error("Error fetching weather:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
  bg-gradient-to-r from-white via-blue-200 to-indigo-200 
  bg-[length:200%_200%] animate-[gradient-animation_8s_ease-in-out_infinite]
  relative overflow-hidden">
      <div className="flex flex-col items-center gap-1">
        {/* Title + Cloud */}
        <div className="flex items-center space-x-3">
          <h1 className="text-5xl font-bold text-indigo-800">Aeris</h1>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cloud size={50} className="text-indigo-800" />
          </motion.div>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-indigo-800 font-medium mt-2">
          Your daily weather, simplified.
        </p>

        {/* Search Bar */}
        <div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-2 bg-white rounded-full shadow-lg p-2 mt-6 max-w-md w-full">
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full text-gray-700 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-full transition"
          >
            Search
          </button>
          </motion.div>
        </div>

        {/* Weather results dsiplay */}
        {error && (
            <p className="text-red-600 font-medium mt-4">{error}</p>
        )}

        {weather && (
            <div className="mt-6 bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl text-indigo-800 w-full max-w-md text-left border border-white/30">
                <h2 className="text-3xl font-extrabold mb-1 tracking-wide">
                {weather.name}, {weather.sys.country}
                </h2>
                <p className="text-xl font-semibold">Temperature: {weather.main.temp}°C</p>
                <p className="text-md capitalize">Condition: {weather.weather[0].description}</p>
                <p className="text-sm text-gray-700 mt-2">
                Feels like: {weather.main.feels_like}°C, Humidity: {weather.main.humidity}%
                </p>
                <motion.img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
                className="w-24 h-24 mx-auto"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        )}
      </div>
    </div>
  );
}
