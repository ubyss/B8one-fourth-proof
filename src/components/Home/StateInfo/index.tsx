import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./index.scss";

const StateInfo = () => {
  const { setModalStep, storeRegionalization } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="state-info">
        <div className="state-info__left">
          <div className="state-info__left__top">
            <span className="state-info__left__top__name">
              {storeRegionalization?.name} |
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z"
                fill="#042CA6"
              />
              <path
                d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33124 13.2763 3.74739 11.5374 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16638 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2526 11.5366 19.669 13.2747 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60901 13.7963C6.61051 13.7963 6.78451 14.0272 6.82426 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2746 12.6308 18.7517 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.49291 3.71116 7.22704 4.97703C5.96117 6.2429 5.25001 7.95979 5.25001 9.75C5.24844 11.2112 5.72534 12.6326 6.60901 13.7963Z"
                fill="#042CA6"
              />
            </svg>

            <p className="state-info__left__top__location">
              <span>{storeRegionalization?.address}</span>
              <span>Bairro: {storeRegionalization?.neighborhood}</span>
              <span>
                Cidade: {storeRegionalization?.city} -{" "}
                {storeRegionalization?.state}
              </span>
              <span>CEP {storeRegionalization?.postalCode}</span>
            </p>
          </div>
          <div className="state-info__left__bottom">
            <div className="state-info__left__bottom__hour">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.745 9.41566 20.7162 6.93859 18.8888 5.11118C17.0614 3.28378 14.5843 2.25496 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75V11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12Z"
                  fill="#042CA6"
                />
              </svg>
              {storeRegionalization?.hour}
            </div>
            <div className="state-info__left__bottom__phone">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 20.9999C9.05625 20.9999 3 14.9436 3 7.49989C3.00281 6.22306 3.46919 4.99071 4.31243 4.03194C5.15566 3.07317 6.31837 2.45323 7.58437 2.28739C7.90711 2.2516 8.23284 2.31955 8.51435 2.48138C8.79586 2.6432 9.01851 2.89049 9.15 3.18739L11.0344 7.58426C11.1321 7.81249 11.1713 8.06151 11.1484 8.30873C11.1255 8.55594 11.0412 8.79352 10.9031 8.99989L9.34687 11.3811C10.0516 12.8113 11.2127 13.9658 12.6469 14.6624L15 13.0968C15.2061 12.9578 15.4443 12.8737 15.692 12.8524C15.9397 12.831 16.1888 12.8732 16.4156 12.9749L20.8125 14.8499C21.1094 14.9814 21.3567 15.204 21.5185 15.4855C21.6803 15.767 21.7483 16.0928 21.7125 16.4155C21.5467 17.6815 20.9267 18.8442 19.9679 19.6875C19.0092 20.5307 17.7768 20.9971 16.5 20.9999ZM7.77187 3.77801C6.86714 3.89431 6.03582 4.3364 5.43356 5.02149C4.8313 5.70658 4.4994 6.58771 4.5 7.49989C4.50248 10.6817 5.76756 13.7325 8.01746 15.9824C10.2674 18.2323 13.3182 19.4974 16.5 19.4999C17.4122 19.5005 18.2933 19.1686 18.9784 18.5663C19.6635 17.9641 20.1056 17.1327 20.2219 16.228L15.825 14.353L13.4812 15.9186C13.2656 16.0612 13.0168 16.1456 12.7589 16.1637C12.501 16.1818 12.2428 16.1329 12.0094 16.0218C10.2628 15.1769 8.84994 13.7707 7.99687 12.028C7.8844 11.7954 7.83393 11.5376 7.85036 11.2798C7.86678 11.0219 7.94955 10.7726 8.09062 10.5561L9.65625 8.17489L7.77187 3.77801Z"
                  fill="#042CA6"
                />
              </svg>
              {storeRegionalization?.phone}
            </div>
          </div>
        </div>

        <button className="state-info__button" onClick={() => setModalStep(1)}>
          <div className="state-info__button__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="state-info__button__text">Trocar de Estado</span>
        </button>
      </div>

      <div className="state-info__mobile">
        <div className="state-info__mobile__header">
          <span className="state-info__mobile__name">
            {storeRegionalization?.name}
          </span>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10.0016L8 6.00156L4 10.0016" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>

        <div
          className={`state-info__mobile__dropdown dropdown-${isDropdownOpen}`}>
          <div className="modal-container__store-container">
            <div className="modal-container__localization">
              <div className="modal-container__localization-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 18C15.0111 18 14.0444 17.7068 13.2222 17.1574C12.3999 16.6079 11.759 15.8271 11.3806 14.9134C11.0022 13.9998 10.9031 12.9945 11.0961 12.0246C11.289 11.0546 11.7652 10.1637 12.4645 9.46447C13.1637 8.76521 14.0546 8.289 15.0246 8.09608C15.9945 7.90315 16.9998 8.00217 17.9134 8.3806C18.8271 8.75904 19.6079 9.39991 20.1574 10.2222C20.7068 11.0444 21 12.0111 21 13C20.9984 14.3256 20.4711 15.5964 19.5338 16.5338C18.5964 17.4711 17.3256 17.9984 16 18ZM16 10C15.4067 10 14.8266 10.1759 14.3333 10.5056C13.8399 10.8352 13.4554 11.3038 13.2284 11.852C13.0013 12.4001 12.9419 13.0033 13.0576 13.5853C13.1734 14.1672 13.4591 14.7018 13.8787 15.1213C14.2982 15.5409 14.8328 15.8266 15.4147 15.9424C15.9967 16.0581 16.5999 15.9987 17.1481 15.7716C17.6962 15.5446 18.1648 15.1601 18.4944 14.6667C18.8241 14.1734 19 13.5933 19 13C18.9992 12.2046 18.6829 11.442 18.1204 10.8796C17.558 10.3171 16.7954 10.0008 16 10Z"
                    fill="#042CA6"
                  />
                  <path
                    d="M16 30L7.56401 20.051C7.44679 19.9016 7.33079 19.7513 7.21601 19.6C5.77499 17.7018 4.99652 15.3832 5.00001 13C5.00001 10.0826 6.15894 7.28473 8.22184 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27.0035 15.3821 26.2254 17.6996 24.785 19.597L24.784 19.6C24.784 19.6 24.484 19.994 24.439 20.047L16 30ZM8.81201 18.395C8.81401 18.395 9.04601 18.703 9.09901 18.769L16 26.908L22.91 18.758C22.954 18.703 23.188 18.393 23.189 18.392C24.3662 16.8411 25.0023 14.947 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.387 4 16 4C13.6131 4 11.3239 4.94821 9.63605 6.63604C7.94822 8.32387 7.00001 10.6131 7.00001 13C6.99791 14.9482 7.63379 16.8434 8.81201 18.395Z"
                    fill="#042CA6"
                  />
                </svg>
              </div>
              <div className="modal-container__localization-info">
                <span>Endereço: {storeRegionalization?.address}</span>
                <span>Bairro: {storeRegionalization?.neighborhood}</span>
                <span>
                  Cidade: {storeRegionalization?.city} -{" "}
                  {storeRegionalization?.state}
                </span>
                <span>CEP: {storeRegionalization?.postalCode}</span>
              </div>
            </div>

            <div className="modal-container__hour">
              <div className="modal-container__hour-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9934 12.5542 27.6216 9.25145 25.1851 6.81491C22.7486 4.37837 19.4458 3.00661 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16Z"
                    fill="#042CA6"
                  />
                </svg>
              </div>
              <div className="modal-container__hour-info">
                <span>{storeRegionalization?.hour}</span>
              </div>
            </div>

            <div className="modal-container__phone">
              <div className="modal-container__phone-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 28C12.075 28 4 19.925 4 10C4.00375 8.29758 4.62559 6.65444 5.7499 5.37608C6.87421 4.09773 8.42449 3.27114 10.1125 3.05001C10.5428 3.0023 10.9771 3.0929 11.3525 3.30866C11.7278 3.52443 12.0247 3.85415 12.2 4.25001L14.7125 10.1125C14.8428 10.4168 14.8951 10.7488 14.8645 11.0785C14.834 11.4081 14.7216 11.7249 14.5375 12L12.4625 15.175C13.4021 17.0819 14.9503 18.6213 16.8625 19.55L20 17.4625C20.2749 17.2772 20.5924 17.1651 20.9227 17.1366C21.253 17.1082 21.585 17.1644 21.8875 17.3L27.75 19.8C28.1459 19.9753 28.4756 20.2722 28.6913 20.6475C28.9071 21.0229 28.9977 21.4572 28.95 21.8875C28.7289 23.5755 27.9023 25.1258 26.6239 26.2501C25.3456 27.3744 23.7024 27.9963 22 28ZM10.3625 5.03751C9.15619 5.19258 8.04776 5.78203 7.24474 6.69548C6.44173 7.60894 5.9992 8.78377 6 10C6.00331 14.2425 7.69008 18.3102 10.6899 21.3101C13.6898 24.3099 17.7576 25.9967 22 26C23.2162 26.0008 24.3911 25.5583 25.3045 24.7553C26.218 23.9523 26.8074 22.8438 26.9625 21.6375L21.1 19.1375L17.975 21.225C17.6875 21.4151 17.3557 21.5277 17.0118 21.5517C16.668 21.5758 16.3237 21.5106 16.0125 21.3625C13.6837 20.236 11.7999 18.361 10.6625 16.0375C10.5125 15.7273 10.4452 15.3837 10.4671 15.0398C10.489 14.696 10.5994 14.3637 10.7875 14.075L12.875 10.9L10.3625 5.03751Z"
                    fill="#042CA6"
                  />
                </svg>
              </div>
              <div className="modal-container__phone-info">
                <span>{storeRegionalization?.phone}</span>
                <span>{storeRegionalization?.celphone}</span>
              </div>
            </div>
          </div>
        </div>

        <button className="state-info__button" onClick={() => setModalStep(1)}>
          <div className="state-info__button__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="state-info__button__text">Trocar de Estado</span>
        </button>
      </div>
    </>
  );
};

export default StateInfo;
