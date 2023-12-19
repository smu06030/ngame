import React, { useEffect, useRef } from 'react'
import { styled } from "styled-components";
import reactOdometer from 'odometer'
import './odometer-theme-default.css';

const Odometer = ({value}) => {

  const odometerRef = useRef(null);

  useEffect(() => {
    const odometers = new reactOdometer({
      el: odometerRef.current,
      value: 0, // 초기값 설정
      format: '(dd).dd', // 숫자 형식 지정
      duration: '2000', // 시간
    });

    odometers.update(value); 
    
  }, [value])

  return (
    <Value ref={odometerRef}>{value}</Value>
  )
}

const Value = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
  font-family: PretendardBold;
  font-size: 2rem;
  font-weight: 700;
  color: #1A3053;
  overflow: hidden;

  @media screen and (max-width: 768px){
    margin: 0.5rem 0 0.25rem 0;
    font-size: 1.5rem;
  }
`;

export default Odometer