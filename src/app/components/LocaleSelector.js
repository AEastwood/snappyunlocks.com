import { countries } from '@/data/locale';
import { useEffect, useRef, useState } from "react";

function LocaleSelector() {
    const locale = localStorage.getItem("locale");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocale, setSelectedLocale] = useState(locale);
    const dropdownRef = useRef(null);

    {/* Check users country on load */ }
    useEffect(() => {
        if (locale) {
            const matchedCountry = countries.find(country => country.locale === locale);
            if (matchedCountry) {
                setSelectedLocale(matchedCountry.name);
            }
        }
    }, []);

    {/* Check users country on load */ }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    {/* Check users country on load */ }
    const handleEscape = (event) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    {/* Handle Country Selection */ }
    const handleSelection = (country) => {
        setSelectedLocale(country.name);
        localStorage.setItem("country", country.name);
        localStorage.setItem("locale", country.locale);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Dropdown Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none transition-all"
            >
                <span className="mr-2 font-medium text-lg text-gray-800">{countries.find(c => c.name === selectedLocale)?.flag.icon || "\ud83c\uddec\ud83c\udde7"}</span>
                <span className="text-sm font-semibold text-gray-800">{selectedLocale}</span>
                <svg
                    className="w-4 h-4 ml-2 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.944l3.71-3.713a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute mt-2 w-[36rem] bg-white text-gray-900 rounded-lg border border-gray-300" style={{ left: '-200px' }}>
                    <ul className="grid grid-cols-3 gap-4 p-4">
                        {countries.map((country, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelection(country)}
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all"
                            >
                                <span className="font-medium text-gray-800">{country.flag.icon}</span>
                                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{country.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LocaleSelector;
