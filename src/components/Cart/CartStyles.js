import styled from 'styled-components';

export const CartContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
`;

export const CartList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;

export const CartItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 10px;
`;

export const CartItemName = styled.span`
font-weight: bold;
`;

export const CartItemPrice = styled.span`
margin-left: 10px;
`;

export const CartTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 10px;
`;

export const CartTotalLabel = styled.span`
font-weight: bold;
`;

export const CartTotalPrice = styled.span`
margin-left: 10px;
`;