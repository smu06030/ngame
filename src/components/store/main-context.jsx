import React from 'react'

const MainContext = React.createContext({
  inputValue: '',
  showModal: false,
  userInfo: {},
  userLank: ()=> {},
  addInputValue: (inputValue)=>{},
  showSuccessModal: ()=>{},
  hideSuccessModal: ()=>{},
});

export default MainContext;