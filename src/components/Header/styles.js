import styled from "styled-components";
import { theme } from "../../styles/global";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${theme.primary.main};
`;

export const NavBar = styled.nav`
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderLink = styled.li`
  margin-right: 2rem;

  a {
    color: ${({ isRoute }) =>
      isRoute ? theme.secondary.contrastText : theme.primary.contrastText};
  }
`;
