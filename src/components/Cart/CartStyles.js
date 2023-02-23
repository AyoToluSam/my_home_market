import styled from 'styled-components';

export const CartContainer = styled.div`
position: absolute;
top: 0;
right: 0;
padding: 1.5rem;
height: 100vh;
min-width: 50vw;
background-color: #f2f2f2;
box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
gap: 2rem;

.close {
  position: absolute;
  right: 2rem;
  top: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
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
justify-content: space-between;
gap: 1rem;
width: 100%;
margin-bottom: 10px;
`;

export const CartItemName = styled.span`
font-weight: bold;
`;

export const CartItemPrice = styled.span`
margin-left: 10px;
`;

export const Remove = styled.button`
  background-color: darkred;
  padding: 0.2rem 0.4rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CartTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 10px;
font-weight: bold;
`;

