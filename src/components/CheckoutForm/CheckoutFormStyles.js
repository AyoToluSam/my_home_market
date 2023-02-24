import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckoutForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

export const FormSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
`;

export const FormOption = styled.option``;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;