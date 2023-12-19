import React, { useState } from 'react'
import MainContext from './main-context'

const MainProvider = (props) => {

  const [inputValue, setInputValue] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const setInputValueHandler = (inputValueNumber) => {
    setInputValue(inputValueNumber);
  };
  // 모달 표시
  const showSuccessModalHandler = () => {
    setShowModal(true)
  }
  // 모달 숨김
  const hideSuccessModalHandler = () => {
    setShowModal(false)
  }
  // 유저 정보 설정
  const userInfoHandler = (info) => {
    setUserInfo(info)
  }
  
  const mainContext = {
    inputValue,
    showModal,
    userInfo,
    userLank: userInfoHandler,
    addInputValue: setInputValueHandler,
    showSuccessModal: showSuccessModalHandler,
    hideSuccessModal: hideSuccessModalHandler
  }

  return (
    <MainContext.Provider value={mainContext}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainProvider