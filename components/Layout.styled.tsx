import styled from "styled-components";
import colors from "../utils/colors";

export const Nav = styled.header`
  background-color: ${colors.YELLOW};
  height: 100px;
  position: relative;
`;

export const Container = styled.main`
  padding-left: 10%;
  padding-right: 10%;
  background-color: ${colors.GREY};
  height: 90vh;
  overflow: auto;
  text-aling: center;
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 100%
`
