import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    font-weight: 400;
  }

  body{
    color:  ${({ theme }) => theme.colors.gray_200};
    background-color: ${({ theme }) => theme.colors.black_400};
    overflow-x: hidden;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  ::-webkit-scrollbar{
    background: #202024;
    width: 0.4rem;
  }
  ::-webkit-scrollbar-thumb{
    background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
  }
`;
