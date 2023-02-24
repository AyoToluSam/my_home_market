import styled from 'styled-components';


export const SellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    label {
      font-weight: bold;
    }

    input,
    textarea,
    select {
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      width: 100%;
      cursor: pointer;
    }

    span {
      color: tomato;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
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
  gap: 1rem;
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
    padding: 0.2rem 1rem;
    border-radius: 5px;
  }
`;