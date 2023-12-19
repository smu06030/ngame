import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import MainContext from "../store/main-context";
import Odometer from "../Style/Odometer";
import Button from "../UI/Button";
const SuccessModal = () => {
  const mainCtx = useContext(MainContext);

  const {
    rank: userInfoRank,
    correct: userInfoCorrect,
    count: userInfoCount,
  } = mainCtx.userInfo;

  const isRankAvailable = !!userInfoRank;

  const modalContentTitle = isRankAvailable
    ? "Hole in!"
    : `${userInfoCount}번째 추측에서 포기!`;

  const userInfoTitle = isRankAvailable ? "순위" : "정답";
  const userInfoValue = isRankAvailable ? userInfoRank : userInfoCorrect;
  const userInfoSubTitle = isRankAvailable ? "위" : "번";

  const handleCloseModal = () => {
    mainCtx.hideSuccessModal();
  };

  return (
    <Modal>
      <CloseButton>
        <span onClick={handleCloseModal}>✕</span>
      </CloseButton>
      <ModalContent>
        <p>{modalContentTitle}</p>
        <UserInfo>
          <UserCount>
            <span>횟수</span> <Odometer value={userInfoCount} />번
          </UserCount>
          <UserRank>
            <span>{userInfoTitle}</span>
            <Odometer value={userInfoValue} />
            {userInfoSubTitle}
          </UserRank>
        </UserInfo>
        <Button onClose={handleCloseModal}>다시하기</Button>
      </ModalContent>
    </Modal>
  );
};
const CloseButton = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  & span {
    font-family: PretandardRegular;
    cursor: pointer;
  }
`;

const ModalContent = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & p {
    font-family: PretandardBold;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  font-family: PretendardRegular;
  font-size: 1rem;
  & span {
    font-family: PretendardBold;
  }
`;

const UserCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserRank = styled(UserCount)``;

export default SuccessModal;
