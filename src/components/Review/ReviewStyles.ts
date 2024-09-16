import styled from "styled-components";

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ReviewItem = styled.li`
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

export const ReviewImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 640px) {
    width: 32px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .name-quantity-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-size: 13px;
      color: #888;
    }
  }
`;

export const ReviewItemName = styled.span`
  font-weight: 500;
  font-size: 14px;
`;

export const ReviewItemPrice = styled.h5`
  margin-left: auto;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  img {
    width: 100%;
    max-width: 240px;
  }

  p {
    font-weight: 600;
  }
`;
