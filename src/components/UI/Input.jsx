import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/SearchIcon";
const Input = React.forwardRef(({ input }, ref) => {
  return (
    <InputDiv>
      <input {...input} ref={ref} placeholder="추측할 숫자를 입력하세요."/>
      <label htmlFor={input.id}><SearchIcon /></label>
    </InputDiv>
  );
});
const InputDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  & label {
    position: absolute;
    padding: 1rem 1rem 1rem 1.5rem;
  }

  & input {
    width: 100%;
    border-radius: 50px;
    padding: 1rem 1.5rem 1rem 3.5rem;
    color: #656f79;
    text-overflow: ellipsis;
    font-family: PretendardRegular;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 0;
    outline: 0;
  }
`;

export default Input;
