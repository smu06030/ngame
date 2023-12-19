import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import MainSimilarityCard from "./MainSimilarityCard";
import MainSimilarityList from "./MainSimilarityList";
import MainContext from "../../store/main-context";
import Button from "../../UI/Button";

const MainSimilarity = () => {
  const mainCtx = useContext(MainContext);

  // localStorage에 값이 있으면 가져오고 없으면 빈 배열을 초기값으로 지정
  const storedData =
    JSON.parse(localStorage.getItem("allSimilarityData")) || [];
  // 모든 유사도 데이터를 가지고 있는 state
  const [allSimilarityData, setAllSimilarityData] = useState(storedData);
  // 실제 보여주는 데이터를 가지고 있는 state
  const [displaySimilarityData, setDisplaySimilarityData] = useState([]);

  useEffect(() => {
    fetchSimilarity(mainCtx.inputValue);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCtx.inputValue]);

  useEffect(() => {
    localStorage.setItem(
      "allSimilarityData",
      JSON.stringify(allSimilarityData)
    );
  }, [allSimilarityData]);


  const fetchSimilarity = async(inputValue) => {
    try {
      if (inputValue === "") return;

      const url = `https://www.numbergolf.com/api/v1/shot?answer=${inputValue}`;
      
      const response = await axios.get(url, { withCredentials: true,});

      if (response) {
        handlerApiResponse(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlerApiResponse = ({ similarity, count, status, rank }) => {
    const inputValue = mainCtx.inputValue;

    // 입력 값 포맷팅
    const formattedSimilarityData = {
      inputValue, // 입력 값
      similarity, // 유사도
      count, // 횟수
    };

    if (status === 'FAIL') {
      const formattedData = IncludesInputValue(formattedSimilarityData);
      // 현재 보여줄 데이터 업데이트
      setDisplaySimilarityData(formattedData);

    } else if(status === 'SUCCESS'){

      mainCtx.userLank({count, rank});
      mainCtx.showSuccessModal();
      
      // 데이터 초기화
      resetData();
    }
  }

  const IncludesInputValue = (formattedSimilarityData) => {
    const { inputValue } = formattedSimilarityData;

    // 입력 된 값과 모든 데이터 값을 비교해 있다면 해당 index 저장
    const existingIndex = allSimilarityData.findIndex(
      (allData) => allData.inputValue === inputValue
    );

    // 입력 된 값이 있으면 existingData에 저장
    const existingData = allSimilarityData[existingIndex];

    // 입력 된 값이 있으면 전체 데이터에서 현재 값 count 수정
    if (existingData) {
      const updateItem = {
        ...existingData,
        count: formattedSimilarityData.count,
      };

      // 이전 state를 기반으로 전체 데이터 업데이트
      setAllSimilarityData((prevData) => {
        const updateData = [...prevData];
        updateData[existingIndex] = updateItem;
        return updateData;
      });

      return updateItem;
    } else {
      // 입력 된 값이 없으면 현재 입력 값 전체 데이터에 추가
      setAllSimilarityData((prevData) => {
        return [...prevData, formattedSimilarityData];
      });
    }

    return formattedSimilarityData;
  };

  const resetData = () => {
    setAllSimilarityData([]);
    setDisplaySimilarityData([]);
    mainCtx.addInputValue('');
  };

  const onGiveUpHandler = async() => {
    const url = 'https://www.numbergolf.com/api/v1/giveup';

    try{
      const response = await axios.get(url, { withCredentials: true,});

      const { count, correct } = response.data;
      
      mainCtx.userLank({count, correct});
      mainCtx.showSuccessModal();
      
      // 데이터 초기화
      resetData();

    }catch(error){
      alert(error.response.data.message);
    }
  };

  return (
    <MainWrapper>
      <MainWrap>
        {(mainCtx.inputValue === '' && allSimilarityData.length !== 0) && <h1>이전 기록</h1>}
        <ul>
          {Object.keys(displaySimilarityData).length > 0 && Object.keys(displaySimilarityData).map((data, index) => (
            <MainSimilarityCard
              key={index}
              type={data}
              value={displaySimilarityData[data]}
            />
          ))}
        </ul>
        {allSimilarityData.length > 0 && (
          <MainSimilarityList allSimilarityData={allSimilarityData}/>
        )}
        <Button onGiveUp={onGiveUpHandler}className="target-element-4">포기하기</Button>
      </MainWrap>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 2rem;
  animation: main-wrapper 0.7s ease-out forwards;

  @keyframes main-wrapper {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0;
    overflow: hidden;

    @media screen and (max-width: 768px){
      justify-content: space-between;
    }
  }
`;
const MainWrap = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1{
    font-family: PretendardBold;
    font-size: 1rem;
  }
`;
export default MainSimilarity;
