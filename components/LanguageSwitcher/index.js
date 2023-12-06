import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languageOptions = [
    { value: "en", label: "English", src: "/content/gb.svg" },
    { value: "jp", label: "Japanese", src: "/content/jp.svg" },
  ];

  useEffect(() => {
    setCurrentLanguage(languageOptions[0].value);
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("preferredLanguage");
      setCurrentLanguage(storedLanguage || languageOptions[0].value);
      console.log(
        "Current Language:",
        storedLanguage || languageOptions[0].value
      );

      if(storedLanguage) {
        changeLanguage(storedLanguage);
      }else {
        changeLanguage(languageOptions[0].value);
      }

    }
  }, []);

  console.log(currentLanguage, languageOptions[0].value);

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

  return (
    <div className="languageSwitcher">
      {/* Toggle button */}
      <div className="dropdownToggle" onClick={toggleDropdown}>
        <img
          src={
            languageOptions.find((option) => option.value === currentLanguage)
              ?.src
          }
          alt="language flag"
          width={30}
          height={30}
        />
      </div>

      {/* Dropdown options */}
      {isDropdownOpen && (
        <div className="dropdownOptions">
          {languageOptions.map((option) => (
            <div
              key={option.value}
              className="option"
              onClick={() => handleLanguageClick(option.value)}
            >
              <img
                src={option.src}
                alt="language flag"
                width={30}
                height={30}
              />
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
