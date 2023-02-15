import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductName = styled.h2`
  font-size: 20px;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;