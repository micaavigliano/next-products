import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 70vh;
  padding: 2%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`;

export const Info = styled.div`
  width: 50%;
  height: 70%;
`;

export const ImgContainer = styled.div`
  width: 30%;
  height: 70%;
  background-color: green;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const DescContainer = styled.div`
  height: 50%;
  width: 100%;
  overflow: auto;
`;
