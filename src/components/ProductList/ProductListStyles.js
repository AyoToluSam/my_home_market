import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;

export const ProductCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductName = styled.h2`
  font-size: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
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