import styled from "styled-components";
import { theme } from "../../../styles/global";
import { Button } from "@material-ui/core";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    margin-bottom: 1rem;
  }
`;

export const CreateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Section} {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  color: ${theme.primary.main};
`;

export const CustomButton = styled(Button)`
  &.MuiButton-containedPrimary {
    background-color: ${theme.primary.main};
  }
`;
