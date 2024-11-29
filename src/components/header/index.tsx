import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
      if (savedMode === "true") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="bg-gray-100 text-white w-full  ">
      <nav className="w-full h-auto lg:h-24 flex flex-col lg:flex-row items-center justify-around py-3 mx-auto text-black dark:bg-zinc-950 dark:text-white">
        <Link
          to="/"
          className="text-red-600 uppercase font-bold text-2xl lg: mb-4 lg:mb-0"
        >
          Master Barber 
        </Link>

        <div className="flex items-center gap-6 font-medium">
          <Link to="/">Home</Link>
          <a href="#about">Sobre nós</a>
          <a href="#services">Serviços</a>
          <Link to="/agendamento" className="text-red-600">
            Agendamento
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/newstylle.barbearia/"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.instagram.com/newstylle.barbearia/"
            target="_blank"
          >
            <FaFacebook size={30} />
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {isDarkMode ? (
              <FaSun size={20} className="text-yellow-500" />
            ) : (
              <FaMoon size={20} className="text-gray-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
