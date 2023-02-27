import React, { useMemo, useState } from "react";
import "./index.scss";

const TopBar = () => {
  const [isOpen, setIsClose] = useState(true)

  if(!isOpen) return null

  return (
    <div className="topbar">
      <div className="topbar__center-container">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.49992 1.33325L10.5599 5.50659L15.1666 6.17992L11.8333 9.42659L12.6199 14.0133L8.49992 11.8466L4.37992 14.0133L5.16659 9.42659L1.83325 6.17992L6.43992 5.50659L8.49992 1.33325Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="topbar__center-container__text">
          Insira aqui o texto ou informação relevante que deseja comunicar
        </span>
      </div>
      <div className="topbar__close" onClick={() => setIsClose(false)}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6" clipPath="url(#clip0_1809_29573)">
            <path
              d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6L6 10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L10 10"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1809_29573">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TopBar;
