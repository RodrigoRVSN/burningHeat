import styled from "styled-components";

export const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 1.75rem;
    margin: 2rem 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex: 1;
    justify-content: center;
    padding: 2rem;

    li {
      max-width: 27.5rem;
      animation: up 1s;

      &:nth-child(2) {
        margin-left: 10rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 28px;
      }

      a {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};

        div {
          padding: 0.125rem;
          background: linear-gradient(104.3deg, #ff008e 0.48%, #ffcd1e 100%);
          border-radius: 50%;
          line-height: 0;
          height: 3.1rem;
          width: 3.1rem;

          img {
            width: 2.875rem;
            height: 2.875rem;
            border-radius: 50%;
            border: 4px solid ${({ theme }) => theme.colors.black_200};
          }
        }
        span {
          margin-left: 12px;
          font-size: 16px;
        }
      }
    }

    @keyframes up {
      from {
        opacity: 0.6;
      }

      to {
        opacity: 1;
      }
    }
  }
`;
