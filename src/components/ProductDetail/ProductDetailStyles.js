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