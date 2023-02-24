import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 24px;

  img {
    border-radius: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const Condition = styled.p`
  font-size: 18px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const Contact = styled.p`
  font-size: 18px;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;

export const AddToCart = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const QuantityButton = styled.button`
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  padding: 0.4rem;
  background-color: darkred;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;