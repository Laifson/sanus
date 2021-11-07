import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BackgroundWave from '../../assets/waves/bottom-wave.svg'

export const FooterContainer = styled.footer`
  // ::before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   background-image: url(${BackgroundWave});   // todo: make wave bottom-centered but still covering with flex height
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: bottom;
  //   height: 100px;
  //   width: 100%;
  // }

  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
  bottom: 0;
`;

export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #131313;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #131313;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: lightcyan;
    transition: all ease .2s;
  }
`;

export const FooterBottom = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const FooterBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SanusLogo = styled.img`
  width: 50px;
  cursor: pointer;
  display: flex;
  margin-bottom: 0;
  
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const AppRights = styled.small`
  color: #131313;
  margin-bottom: 0;
`;

export const AppVersion = styled.small`
  font-weight: bold;
  color: #131313;

  @media screen and (max-width: 820px) {
    margin-bottom: 6px;
  }
`;