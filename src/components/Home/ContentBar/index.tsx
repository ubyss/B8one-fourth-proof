import "./index.scss";

const ContentBar = () => {
  return (
    <div className="content-bar">
      <div className="content-bar__mobile-hamburguer">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20H29" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 14H29" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 26H29" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      <svg
        width="128"
        height="80"
        viewBox="0 0 128 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.3963 50.373H37.635V46.649H32.6786V33.8305H38.2298V30.1457H32.6786V24.8928H28.3963V30.1457H26.2155V33.8305H28.3963V50.373ZM0 40.2593C0 46.4922 4.12371 51.0002 10.3093 51.0002C13.8779 51.0002 16.6931 49.2754 17.7637 46.8842H17.8826C17.843 47.433 17.8033 48.021 17.8033 48.9226V50.373H21.7288V30.1457H17.8033V31.2825C17.8033 32.3409 17.843 32.8505 17.8826 33.2817H17.7637C16.7724 31.2433 14.1158 29.5185 10.4679 29.5185C4.36161 29.5185 0 34.0265 0 40.2593ZM10.9833 47.1978C7.17684 47.1978 4.32196 44.2578 4.32196 40.2201C4.32196 36.1433 7.17684 33.2425 10.9833 33.2425C14.8691 33.2425 17.6447 36.1433 17.6447 40.2201C17.6447 44.2578 14.8691 47.1978 10.9833 47.1978ZM62.0768 40.2593C62.0768 46.4138 57.4376 51.0002 51.1727 51.0002C44.8682 51.0002 40.3084 46.4138 40.3084 40.2593C40.3084 34.0657 44.9079 29.5185 51.1727 29.5185C57.4376 29.5185 62.0768 34.0657 62.0768 40.2593ZM44.6303 40.2201C44.6303 44.2578 47.3662 47.1978 51.1727 47.1978C55.0189 47.1978 57.7152 44.2578 57.7152 40.2201C57.7152 36.1433 55.0189 33.2425 51.1727 33.2425C47.3662 33.2425 44.6303 36.1433 44.6303 40.2201ZM94.4339 37.1625C94.4339 32.6545 91.1428 29.5185 86.5037 29.5185C83.847 29.5185 81.7455 30.6161 80.3974 32.4585C79.0889 30.6161 76.9874 29.5185 74.2911 29.5185C69.7313 29.5185 66.242 32.6545 66.242 37.1625V50.373H70.5243V37.1233C70.5243 34.8497 72.1103 33.2425 74.3308 33.2425C76.5909 33.2425 78.1769 34.8497 78.1769 37.1233V50.373H82.4592V37.1233C82.4592 34.8497 84.0453 33.2425 86.2657 33.2425C88.5259 33.2425 90.1516 34.8497 90.1516 37.1233V50.373H94.4339V37.1625ZM119.673 29.5185C123.202 29.5185 126.057 31.0081 127.96 33.5953L125.343 36.1825C124.154 34.4577 122.33 33.2425 119.673 33.2425C115.827 33.2425 113.091 36.1433 113.091 40.2201C113.091 44.2578 115.827 47.1978 119.673 47.1978C122.409 47.1978 124.312 45.865 125.462 44.101L128 46.649C126.414 49.1578 123.4 51.0002 119.673 51.0002C113.289 51.0002 108.73 46.4138 108.73 40.2593C108.73 34.0657 113.408 29.5185 119.673 29.5185ZM104.336 30.1051V50.3324H100.054V30.1051H104.336Z"
          fill="#101820"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.5245 41.4043V50.3726H66.2422V41.4043H70.5245Z"
          fill="#5576D1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.054 28.1571L100.054 24L104.336 24L104.336 28.1571L100.054 28.1571Z"
          fill="#E0E27C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.6787 33.832H28.3964V33.8305H26.2156V30.1457H28.3964V24.8928H32.6787V30.1457H38.2298V33.8305H32.6787V33.832Z"
          fill="#FF6A39"
        />
      </svg>
      </div>
      <input
        type="text"
        placeholder="O que você procura?"
        className="content-bar__input"
      />
      <div className="content-bar__buttons-area">
        <div className="buttons-area__my-account">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="my-account__text">Minha conta</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6L8 10L12 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="content-bar__mobile-search">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 29L24.65 24.65" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
        <div className="buttons-area__cart-button">
          <svg
            width="56"
            height="48"
            viewBox="0 0 56 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 34C24.5523 34 25 33.5523 25 33C25 32.4477 24.5523 32 24 32C23.4477 32 23 32.4477 23 33C23 33.5523 23.4477 34 24 34Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 34C35.5523 34 36 33.5523 36 33C36 32.4477 35.5523 32 35 32C34.4477 32 34 32.4477 34 33C34 33.5523 34.4477 34 35 34Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13H20L22.68 26.39C22.7714 26.8504 23.0219 27.264 23.3875 27.5583C23.7532 27.8526 24.2107 28.009 24.68 28H34.4C34.8693 28.009 35.3268 27.8526 35.6925 27.5583C36.0581 27.264 36.3086 26.8504 36.4 26.39L38 18H21"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContentBar;
