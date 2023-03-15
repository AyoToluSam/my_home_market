import styled from 'styled-components';


export const ReviewList = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const ReviewItem = styled.li`
list-style: circle;
display: flex;
align-items: center;
gap: 2rem;
width: 100%;
`;

export const ReviewImage = styled.img`
  width: 120px;
  max-width: 120px;
  border-radius: 5px;

  @media screen and (max-width: 640px) {
    width: 80px;
  }
`;

export const ReviewItemName = styled.span`
font-weight: bold;
`;

export const ReviewItemPrice = styled.span`
font-weight: bold;
`;