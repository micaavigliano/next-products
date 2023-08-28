import styled from "styled-components";
import colors from "@/utils/colors";

export const Nav = styled.header`
  background-color: ${colors.YELLOW};
  height: 100px;
  position: relative;
`;
export const ContainerMain = styled.main`
  padding-left: 10%;
  padding-right: 10%;
  background-color: ${colors.GREY};
  height: 90vh;
  overflow: auto;
  text-aling: center;
`;

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
  padding: 2%;
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 70%;
  position: relative;
  padding-left: 10%
`;

export const Img = styled.img`
  width: 60%;
  height: 100%;
  position: absolute;
`;

export const DescContainer = styled.div`
  height: 50%;
  width: 100%;
  overflow: auto;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3483fa;
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 100%
`