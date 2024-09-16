import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  padding: 1.5rem 1rem;
  width: max-content;
  min-width: 420px;
  height: 100%;
  background-color: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: grey;

  &::-webkit-scrollbar {
    width: 4px;
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 4px;
  }
`;

export const CloseContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;

  h4 {
    span {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export const CloseButton = styled.div`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    transition: 0.3s linear;
  }
`;

export const CartList = styled.ul`
  height: 100%;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #0f1624;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0f1624;
    border-radius: 10px;
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 640px) {
    width: 40px;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .name-price-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const RightDiv = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1.1rem;
  color: darkred;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 100%;
  }
`;

export const CartItemName = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 4px;
    border: 1px solid #eee;
    border-radius: 50%;
    color: #000;
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.4);
  }
`;

export const CartItemPrice = styled.h5`
  color: #000;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
  }

  p {
    font-weight: 600;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const RemoveAll = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  color: darkred;
  font-weight: bold;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
