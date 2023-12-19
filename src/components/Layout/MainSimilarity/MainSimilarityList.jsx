import React from "react";
import styled from "styled-components";

const MainSimilarityList = ({ allSimilarityData }) => {
  const sortAllSimilarityData = allSimilarityData
    .sort((a, b) => b.similarity - a.similarity)
    .map((allData, index) => (
      <tr key={index}>
        <StyledTableCell>{allData.inputValue}</StyledTableCell>
        <StyledTableCell>{allData.similarity.toFixed(2)}</StyledTableCell>
        <StyledTableCell>{allData.count}</StyledTableCell>
      </tr>
    ));

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader>숫자</StyledTableHeader>
          <StyledTableHeader>유사도</StyledTableHeader>
          <StyledTableHeader>횟수</StyledTableHeader>
        </tr>
      </thead>
      <tbody>{sortAllSimilarityData}</tbody>
    </StyledTable>
  );
};

// 전체 테이블 컴포넌트 스타일
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

// 테이블 헤더 스타일
const StyledTableHeader = styled.th`
  padding: 0.625rem;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 2px solid #767676;
`;

// 테이블 셀 스타일
const StyledTableCell = styled.td`
  padding: 0.625rem;
  text-align: center;
  box-sizing: border-box;
`;

export default MainSimilarityList;
