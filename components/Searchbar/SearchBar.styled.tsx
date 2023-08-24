import styled from "styled-components";

export const HiddenH1 = styled.h1`
  overflow: hidden;
  width: 1px;
  height: 1px;
`;

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 10%;
  width: 80%;
`;

export const Form = styled.form`
  background-color: #fff;
  width: 100%;
  height: 2.5rem;
  box-shadow: 0px 0px 2px black;
  display: flex;
  align-items: center;
  margin-left: 3%;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding: 8px 16px 8px 16px;
  border-radius: 2px;
  color: #333;
  font-size: 18px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  ::placeholder {
    color: lightgrey;
  }
`;

export const LinkContainer = styled.span`
  width: 200px;
`;

export const Separator = styled.div`
  color: lightgrey;
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const HiddenLabel = styled.label`
  overflow: hidden;
  width: 1px;
  height: 1px;
`;
