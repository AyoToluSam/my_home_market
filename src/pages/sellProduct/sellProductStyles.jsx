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
    }

    span {
      color: tomato;
    }

    button {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
    }
  }
`;