import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const onClickHandler = props.onClose ? props.onClose : props.onGiveUp;
  const classNameIsVaild = props.className ? props.className : '' 
  return (
    <Btn onClick={onClickHandler} className={classNameIsVaild} >{props.children}</Btn>
  )
}

const Btn = styled.button`
  width: 90px;
  height: 36px;
  border-radius: 6px;
  background: transparent;
  color: #1a3053;
  border: 1px solid #1a3053;
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
  font-family: PretandardRegular;
  font-size: 0.875rem;
  font-weight: 600;
  transition: 0.3s ease-out;
  box-sizing: border-box;
  cursor: pointer;

  &:hover, :active{
    background: #1a3053;
    color: #fff;
  }
`;

export default Button