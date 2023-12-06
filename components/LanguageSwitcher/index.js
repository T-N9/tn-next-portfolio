import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("preferredLanguage");
      setCurrentLanguage(storedLanguage || i18n.language);
      console.log("Current Language:", storedLanguage || i18n.language);

      changeLanguage(storedLanguage);
    }
  }, []);

  console.log(currentLanguage);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", lng);
    }
    closeDropdown(); // Close the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLanguageClick = (value) => {
    changeLanguage(value);
  };

  const languageOptions = [
    { value: "en", label: "English", src: "/content/gb.svg" },
    { value: "jp", label: "Japanese", src: "/content/jp.svg" },
    // Add more languages if needed
  ];

  return (
    <div className='languageSwitcher'>
      {/* Toggle button */}
      <div className='dropdownToggle' onClick={toggleDropdown}>
        <img
          src={languageOptions.find((option) => option.value === currentLanguage)?.src}
          alt="language flag"
          width={50}
          height={50}
        />
      </div>

      {/* Dropdown options */}
      {isDropdownOpen && (
        <div className='dropdownOptions'>
          {languageOptions.map((option) => (
            <div
              key={option.value}
              className='option'
              onClick={() => handleLanguageClick(option.value)}
            >
              <img src={option.src} alt="language flag" width={50} height={50} />
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
