'use client';

import { countries } from '@/data/locale';
import { useEffect, useRef, useState } from "react";
import { getCookie, setCookie } from 'cookies-next';

function LocaleSelector() {
    const defaultCountry = countries.find(country => country.name === "United States");
    const [selectedLocale, setSelectedLocale] = useState(defaultCountry.name);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dropdownRef = useRef(null);

    // This function updates the locale storage with the selected country and locale.
    const updateLocaleStorage = (country) => {
        setCookie('country', country.name, { maxAge: 60 * 60 * 24 * 365 }); // 1 year
        setCookie('locale', country.locale, { maxAge: 60 * 60 * 24 * 365 });
    };

    // This function closes the dropdown if the user clicks outside of it.
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // This function closes the dropdown if the user presses the Escape key.
    const handleEscape = (event) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    // Handles country selection and updates locale storage.
    const handleSelection = (country) => {
        setSelectedLocale(country.name);
        updateLocaleStorage(country);
        setIsOpen(false);
    };

    useEffect(() => {
        const initializeLocale = () => {
            // Get the cookie value using getCookie
            const storedLocale = getCookie('locale');

            const matchedCountry = countries.find(
                (country) => country.locale === storedLocale
            ) || defaultCountry;
            
            setSelectedLocale(matchedCountry.name);
            updateLocaleStorage(matchedCountry);
            setIsLoading(false);
        };

        initializeLocale();
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="relative inline-block">
                <div className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300">
                    <div className="animate-pulse w-4 h-4 bg-gray-200 rounded mr-2"></div>
                    <div className="animate-pulse w-20 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none transition-all h-[38px] min-h-[38px]"
                type='button'
            >
                <span className="mr-2 font-medium text-lg text-gray-800">
                    <img className='w-4' src={countries.find((country) => country.name === selectedLocale)?.flag.icon || defaultCountry.flag.icon} />
                </span>
                <span className="text-sm font-semibold text-gray-800">
                    {selectedLocale}
                </span>
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

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-900 rounded-lg border border-gray-300 w-auto">
                    <ul className="max-h-[250px] overflow-y-scroll">
                        {countries.map((country, index) => (
                            <li
                                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 transition-all px-4"
                                key={index}
                                onClick={() => handleSelection(country)}
                                title={country.name}
                            >
                                <span className="font-medium text-gray-800">
                                    <img className="w-4" src={country.flag.icon} />
                                </span>
                                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                                    {country.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LocaleSelector;
