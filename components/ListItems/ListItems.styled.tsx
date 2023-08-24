import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  height: 70vh;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  height: 18vh;
  border-radius: 4px;
  margin: 2%;
  background-color: white;
`;

export const ImgContainer = styled.div`
  width: 20%;
  height: 100%;
  border-right: 1px solid lightgrey;
  margin-right: 2%
`;

export const InfoContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center
`;

export const ZoneContainer = styled.div`
  width: 20%;
  text-align: center;
  padding-top: 10%
`;

export const HiddenMsg = styled.div`
  overflow: hidden;
  width: 1px;
  height: 1px;
`;
