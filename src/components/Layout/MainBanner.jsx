import React, { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import MainContext from "../store/main-context";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const MainBanner = () => {
  // mainContext
  const mainCtx = useContext(MainContext);
  // 숫자 유효성 검사 상태
  const [numberIsValid, setNumberIsValid] = useState(true);
  // 입력된 숫자
  const inputValueRef = useRef();

  useEffect(() => {
    const drivers = driver({
      disableActiveInteraction: true, // 강조표시된 요소와 상호작용 비활성화
      showProgress: true,
      nextBtnText: "다음",
      prevBtnText: "이전",
      doneBtnText: "확인",
      steps: [
        {
          element: document.querySelector(".target-element-1"),
          popover: {
            title: "NGame",
            description:
              "0부터 99까지의 숫자를 입력해서 정답을 맞추는 게임입니다.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: document.querySelector(".target-element-2"),
          popover: {
            title: "정답",
            description: "최소한의 시도로 정답을 맞춰야 합니다.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: document.querySelector(".target-element-3"),
          popover: {
            title: "입력 폼",
            description:
              "0부터 99까지의 숫자를 입력하면 유사도를 통해 정답을 유추할 수 있습니다.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: document.querySelector(".target-element-4"),
          popover: {
            title: "포기하기",
            description: "포기하기 버튼을 누르면 정답을 보여줍니다.",
            side: "bottom",
            align: "start",
          },
        },
      ],
    });

    drivers.drive();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const inputValuePlus = +inputValueRef.current.value;

    if (!isValidInput(inputValuePlus)) {
      return;
    }

    mainCtx.addInputValue(inputValuePlus);

    inputValueRef.current.value = "";
    setNumberIsValid(true);
  };

  const isValidInput = (value) => {
    if (isNaN(value) || value < 0 || value > 99 || value === undefined) {
      inputValueRef.current.value = "";
      setNumberIsValid(false);
      return false;
    }
    return true;
  };

  const mainTitle = "NGame - 숫자 유사도 추측 게임";
  const subTitle = "정답에 가까운 숫자를 입력해주세요.";

  return (
    <MainWrapper>
      <MainWrapText>
        <h1 className="target-element-1">{mainTitle}</h1>
        <p className="target-element-2">{subTitle}</p>
      </MainWrapText>
      {!numberIsValid && <ErrorText>숫자를 입력해 주세요. (0 ~ 99)</ErrorText>}
      <form onSubmit={submitHandler} className="target-element-3">
        <Input
          ref={inputValueRef}
          input={{
            id: "search_1",
            type: "number",
            name: "search",
            autoFocus: true,
          }}
        />
      </form>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 20rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const MainWrapText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  flex-direction: column;
  color: #fff;
  font-style: normal;
  line-height: normal;
  & h1 {
    font-family: PretendardBold;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  & p {
    font-family: PretendardRegular;
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
`;

const ErrorText = styled.p`
  font-family: "PretendardRegular";
  font-size: 0.875rem;
  color: #f00;
`;

export default MainBanner;
