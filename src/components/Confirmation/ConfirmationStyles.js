import styled from 'styled-components';

export const ConfirmationWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const ConfirmationTag = styled.div`
  margin: 1rem;

  h1 {
    font-weight: bold;
  }
  span {
    margin: 0 2rem;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 0.5rem;

  p {
    color: red;
  }
`;

export const FormLabel = styled.label`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const FormInput = styled.input`
  margin-top: 0.2rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;