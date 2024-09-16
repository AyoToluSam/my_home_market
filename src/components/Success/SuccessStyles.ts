import styled from "styled-components";

export const SuccessContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(245, 245, 245, 0.7);
  max-width: max-content;
  min-height: 320px;
  border-radius: 8px;

  .check {
    background-color: rgba(209, 232, 218, 1);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: rgba(24, 142, 71, 1);
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  a {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.75rem 2rem;
    border: none;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const Close = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #eee;
  color: #333;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    transform: rotate(90deg);
    transition: 0.3s linear;
  }
`;
