import styled from 'styled-components';

export const CartContainer = styled.div`
position: fixed;
z-index: 1;
top: 0;
right: 0;
padding: 1.3rem 2rem;
height: 100%;
min-width: max-content;
background-color: #f2f2f2;
box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
gap: 2rem;
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
`;

export const CloseButton = styled.div`
  font-size: 1.5rem;
  padding: 0.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;

  
  &:hover {
    color: #666;
    border: 1px solid #666;
  }
`;

export const CartList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartImage = styled.img`
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  img {
    width: 60px;
    max-width: 60px;

    @media screen and (max-width: 640px) {
      width: 40px;
    }
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const RightDiv = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  color: darkred;

  @media screen and (max-width: 640px) {
    margin: 0;
    width: 100%;
  }
`;

export const CartItemName = styled.span`
font-weight: bold;
`;

export const CartItemPrice = styled.span`
color: #000;
font-weight: bold;
`;

export const Empty = styled.p`
  margin-top: 2rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 2rem;
`;

export const CartTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
font-weight: bold;
`;

export const RemoveAll = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: darkred;
  font-weight: bold;
  cursor: pointer;
`;

export const CheckoutButton = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    font-weight: bold;
    padding: 0.5rem 2rem;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
  }
`;

