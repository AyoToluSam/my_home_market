import styled from "styled-components";

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;

  button {
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    img {
      max-width: 20px;
      border-radius: 50%;
    }
  }
`;

export const ConfirmationTag = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 14px;
  }
`;
