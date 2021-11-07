import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(25deg,#CFBAF0,#A3C4F3);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #131313;
  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #131313;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 1rem;
  color: #131313;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  color: #131313;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,.6);
    color: white;
    transition: background-color .5s, color .5s;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 20px;
  color: #131313;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: white;
    transition: all ease .3s;
  }
`;
