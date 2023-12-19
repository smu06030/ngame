import React from "react";
import { styled } from "styled-components";
import Odometer from "../../Style/Odometer";

const MainSimilarityCard = ({ type, value }) => {
  let title, subTitle;

  if (type === "inputValue") {
    title = "숫자";
    subTitle = "번";
  } else if (type === "similarity") {
    title = "유사도";
    subTitle = "%";
  } else if (type === "count") {
    title = "횟수";
    subTitle = "번";
  }

  return (
    <Li>
      <Title>{title}</Title>
      <Odometer value={value} />
      <SubTitle>{subTitle}</SubTitle>
    </Li>
  );
};

const Li = styled.li`
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: 2px solid #f1f1f5;
  background: transparent;
  color: #111;
  box-sizing: border-box;
  transition: 0.3s ease-out;

  &:hover {
    border: 2px solid #2362c6;
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    border: 1px solid #f1f1f5;

    &:hover {
      border: 1px solid #2362c6;
      box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

const Title = styled.div`
  font-family: PretendardMedium;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SubTitle = styled.div`
  font-family: PretendardMedium;
  font-size: 0.875rem;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default MainSimilarityCard;
