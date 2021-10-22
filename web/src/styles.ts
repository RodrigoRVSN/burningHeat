import styled from "styled-components";

import background from "../src/assets/background.svg";

export const ContentWrapper = styled.main`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  @media (max-width: 1090px) {
    display: flex;
    flex-direction: column;
    &.contentSigned::before {
      width: 16.25rem;
    }
  }

  &.contentSigned::before {
    content: "";
    height: 100vh;
    width: 26.25rem;

    background: url(${background}) no-repeat;
    background-size: cover;
    position: absolute;
    right: -12.5rem;
    top: 0;
  }
`;
