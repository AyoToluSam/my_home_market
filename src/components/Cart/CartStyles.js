import styled from 'styled-components';

export const CartContainer = styled.div`
position: fixed;
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
  position: fixed;
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
align-items: center;
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

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

