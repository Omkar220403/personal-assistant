import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    //Apply theme to the document
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-5 right-5 p-3 rounded-full bg-coffee-light dark:bg-coffee-dark shadow-md hover:scale-105 transition-transform"
        >
            {theme === "light" ? (
                <FiMoon className="text-coffee-dark" size={22} />
            ) : (
                <FiSun className="text-coffee-light" size={22} />
            )}
        </button>
    )
}

export default ThemeToggle;