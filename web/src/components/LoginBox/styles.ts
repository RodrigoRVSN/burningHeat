import styled from "styled-components";

import banner_girl from "../../assets/banner-girl.png";

export const LoginBoxWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.black_300} url(${banner_girl})
    no-repeat center top;

  padding: 27.5rem 5rem 0;
  display: flex;
  text-align: center;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 2rem;
    line-height: 2.1rem;
  }

  svg {
    margin-right: 1rem;
  }

  a {
    height: 3.5rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    margin-top: 2rem;
    padding: 0 1.8rem;
    color: ${({ theme }) => theme.colors.black_200};

    font-size: 0.875rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;

    transition: ease-in 0.2s;
    border-radius: 1rem;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;
