import React, { useEffect, useState } from "react";

import "../Styles/Dropdown.css";

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    value: "none",
    label: "None",
  });

  useEffect(() => {
    console.log("****useEffect***");

    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  //   const getDisplay = () => {
  //     if (selectedValue.value !== "none") {
  //       console.log("SELECTED VALUE", selectedValue.value);
  //       return selectedValue.label;
  //     }
  //     return placeHolder;
  //   };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  return (
    <div className="dropdown-container">
      <div className="dropdown-selected-value">{placeHolder}</div>

      <div
        className={`dropdown-button ${showMenu && "pull-menu-up-button"}`}
        onMouseOver={handleInputClick}
      >
        <img
          src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f53b.svg"
          alt="\/"
        />
      </div>

      <div className="dropdown-input">
        {showMenu && (
          <div className="dropdown-menu">
            {options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={`dropdown-item ${isSelected(option) && "selected"}`}
              >
                {option.label}
                <img src={option.imagesrc} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
      <span className="fav-display">
        {selectedValue.value !== "none" ? (
          <span>
            Your favourite music genre is{" "}
            <span className="fav-genre">
              {selectedValue.label}.
              <img src={selectedValue.imagesrc} alt="" />
            </span>
          </span>
        ) : (
          <p>We would wanna know your favourite music genre!!!</p>
        )}
      </span>
    </div>
  );
};

export default Dropdown;
