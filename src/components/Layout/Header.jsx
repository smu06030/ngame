import React, { Fragment } from "react";
import { styled } from "styled-components";
import bannerImg from "../../assets/bannerImg.jpg";
import MainBanner from "./MainBanner";

const Header = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <Logo>
          <div>NGame</div>
        </Logo>
        <HeaderWrapImage>
          <img src={bannerImg} alt="bannerImage" />
        </HeaderWrapImage>
        <MainBanner />
      </HeaderWrapper>
    </Fragment>
  );
};
const HeaderWrapper = styled.header`
  width: 100%;
  height: 20rem;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Logo = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  & div {
    color: #fff;
    font-family: PretendardBold;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: normal;
    margin: 1rem 1.5rem 1.5rem 0;
  }
`;

const HeaderWrapImage = styled.div`
  width: 100vw;
  height: auto;
  position: absolute;
  & img {
    z-index: 1;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

export default Header;
