import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

  img {
    border-radius: 5px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  max-width: max-content;
  background: none;
  border: none;
  font-weight: 600;
`;

export const ProductInfoBody = styled.div`
  padding: 2rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: rgba(245, 245, 245, 0.7);

  img {
    max-width: 360px;
  }

  p {
    font-size: 13px;
    margin-bottom: 2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  img {
    max-width: 360px;
  }
`;

export const DetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    max-width: 40ch;
    margin-bottom: 0;
    line-height: 20px;
  }

  .condition {
    background: rgba(247, 158, 27, 1);
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.5rem 0.8rem;
    border-radius: 16px;
    max-width: max-content;
  }
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .checkout {
    padding: 0.75rem;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  .allButtons {
    max-width: max-content;
    align-self: center;
  }
  .quantityButtons {
    max-width: max-content;
  }
  .actionButtons {
    display: flex;
    gap: 1rem;
  }
`;

export const AddToCart = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  align-self: center;
  margin-top: -0.5rem;
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
  text-decoration: underline;
  color: darkred;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const BuyNow = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const RelatedProducts = styled.div`
  /* min-height: 400px; */
  margin-top: 1rem;
`;
