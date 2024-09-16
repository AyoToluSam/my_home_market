import styled from "styled-components";

export const SellWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellBody = styled.div`
  padding: 2rem 12rem;

  .background {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
    background: rgba(245, 245, 245, 0.7);
    border-radius: 8px;

    > p {
      margin-bottom: 2rem;
    }
  }
`;

export const BlurBackground = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  position: fixed;
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
  padding: 3rem;
  border-radius: 8px;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
  padding: 3rem;
  border-radius: 8px;

  h2 {
    margin: 0;
  }

  button {
    cursor: pointer;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    border: 1px solid;
  }
`;
