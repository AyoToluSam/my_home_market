import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: rgba(217, 217, 217, 0.25);
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ProductCard = styled.div`
  max-width: 300px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
    transition: linear 0.3s;
    &:hover {
      transform: translateX(4px);
      transition: linear 0.3s;
    }
  }
`;

export const ProductImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 5px;
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
  padding: 0.2rem 0.5rem;
  border: none;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: darkred;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const MarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  .sales {
    position: absolute;
    z-index: 2;
    width: 32%;
    max-width: 256px;
    left: 3rem;

    h3 {
      line-height: 24px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      margin: 0.5rem 0;
    }

    button {
      color: #fff;
      background-color: #000;
      border: none;
      border-radius: 0.1rem;
      padding: 0.4rem 1.8rem;
      letter-spacing: 0.5px;
      font-size: 11px;
      font-weight: 100;
    }
  }
`;

export const MarketBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 3rem;
`;

export const Category = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    padding: 0.5rem 0;
  }

  .active {
    font-weight: 600;
    border-bottom: 1.5px solid #000;
  }
`;

export const SearchGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;

  .search {
    position: absolute;
    right: 1rem;
    color: #000;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
      transform: scale(1.15);
      transition: 0.3s linear;
    }
  }

  input {
    border: none;
    background: rgba(240, 237, 233, 0.65);
    border-radius: 6px;
    width: 100%;
    padding: 0.8rem 1rem;
    color: rgba(89, 89, 94, 1);
    font-size: 11px;
    letter-spacing: 0 0.5px;

    &:focus {
      outline: none;
      color: #000;
    }
  }
`;
