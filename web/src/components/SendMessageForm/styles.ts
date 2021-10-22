import styled from "styled-components";

export const SendMessageContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray_400};

  padding: 1.5rem;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;

  & > button {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.gray_200};

    position: absolute;
    left: 1.5rem;
    top: 2rem;

    transition: filter ease-in 0.3s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1090px) {
    margin-top: 5rem;
    width: 60vw;
  }

  @media (max-width: 660px) {
    width: 90vw;
  }
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 0.125rem;
    background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 4px solid ${({ theme }) => theme.colors.black_200};
    }
  }

  strong {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 1rem;
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;

    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray_100};

    svg {
      margin-right: 1rem;
    }
  }
`;

export const SendMessageFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 2.5rem;

  background: ${({ theme }) => theme.colors.black_300};

  label {
    text-align: left;
    padding: 1.1rem;
    font-weight: 700;
    font-size: 1.25rem;
    background: ${({ theme }) => theme.colors.black_200};
  }

  textarea {
    background-color: transparent;
    border: 0;
    padding: 1.5rem;
    resize: none;
    height: 10rem;
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: 1rem;
    line-height: 1.5rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }
  }

  button {
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.pink};
    margin: 1.5rem;
    padding: 0 1.8rem;
    color: ${({ theme }) => theme.colors.white};
    border: 0;

    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    transition: ease-in 0.2s;
    border-radius: 1rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
