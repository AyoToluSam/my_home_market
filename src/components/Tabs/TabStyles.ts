import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;

  h3 {
    padding: 1rem 2rem;
    width: 100%;
    height: 100%;
    border-right: 1px solid #ccc;
    cursor: pointer;
    background-color: #fff;
    font-weight: 600;

    &:first-child {
      border: none;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  .active {
    color: #fff;
    background-color: rgba(44, 42, 59, 1);
  }
`;
