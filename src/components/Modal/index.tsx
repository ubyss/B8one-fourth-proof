import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./index.scss";
import ModalStepOne from "./Step1";
import ModalStepTwo from "./Step2";

const Modal = () => {
  const { modalStep, setModalStep } = useContext(UserContext);

  if (!modalStep) return null;
  

  const haveLocalStorage = () => {
    const state = window.localStorage.getItem('state')

    state ? setModalStep(0) : null
    
  }

  return (
    <>
      <div className="modal-overlay" onClick={haveLocalStorage}></div>
      <div className="modal-container">
        {modalStep === 1 && <ModalStepOne setModalStep={setModalStep} />}
        {modalStep === 2 && <ModalStepTwo setModalStep={setModalStep} />}
      </div>
    </>
  );
};

export default Modal;
