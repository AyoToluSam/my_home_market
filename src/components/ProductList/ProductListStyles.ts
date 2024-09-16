import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: rgba(217, 217, 217, 0.25);
`;

export const Products = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const ProductCard = styled.div`
  max-width: 260px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .allButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .quantityButtons {
      display: flex;
      gap: 1rem;

      span {
        font-weight: bold;
        margin-right: 0.4rem;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-decoration: underline;
    transition: linear 0.3s;

    &:hover {
      transform: translateX(4px);
      transition: linear 0.3s;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductName = styled.p`
  font-size: 14px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const AddToCart = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #000;
  color: #fff;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const QuantityButton = styled.button`
  padding: 0.1rem 1rem;
  border: none;
  background: #000;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  /* align-self: flex-end; */
  text-decoration: underline;
  color: darkred;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
