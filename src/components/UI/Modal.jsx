import React, { Fragment, useContext } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import MainContext from "../store/main-context";


const Backdrop = (props) => {
  return <BackdropContainer onClick={ props.onClose }/>;
};

const ModalOverlay = (props) => {
  return (
    <ModalContainer>
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const mainCtx = useContext(MainContext);
  
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={mainCtx.hideSuccessModal}/>, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  height: auto;
  max-width: 30rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.875rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;


  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-2rem) translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(-50%) translateX(-50%);
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Modal;
