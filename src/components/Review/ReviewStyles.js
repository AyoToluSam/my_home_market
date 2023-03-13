import styled from 'styled-components';


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