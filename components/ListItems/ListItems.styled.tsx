import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: green;
  margin-top: 2%;
  height: 70vh;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  padding: 2%;
  height: 18vh;
`;

export const ImgContainer = styled.div`
  width: 20%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  width: 60%;
  height: auto;
`;

export const ZoneContainer = styled.div`
  width: 20%;
`;

export const HiddenMsg = styled.div`
  overflow: hidden;
  width: 1px;
  height: 1px;
`;
