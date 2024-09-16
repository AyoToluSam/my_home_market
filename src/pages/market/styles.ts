import styled from "styled-components";

export const MarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  .sales {
    position: absolute;
    z-index: 2;
    max-width: 256px;
    left: 3rem;

    h3 {
      line-height: 24px;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      margin: 1rem 0;
    }

    button {
      color: #fff;
      background-color: #000;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1.8rem;
      letter-spacing: 0.5px;
      font-size: 11px;
      font-weight: 100;
    }
  }
`;

export const MarketBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 3rem;
`;

export const MarketHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
`;

export const Category = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  .active {
    font-weight: 600;
    border-bottom: 1.5px solid #000;
  }
`;

export const SearchGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  min-width: 400px;

  .search {
    position: absolute;
    right: 1rem;
    color: #000;
    cursor: pointer;
    transition: 0.3s linear;

    &:hover {
      transform: scale(1.15);
      transition: 0.3s linear;
    }
  }

  input {
    border: none;
    background: rgba(240, 237, 233, 0.65);
    border-radius: 6px;
    width: 100%;
    padding: 0.8rem 1rem;
    color: rgba(89, 89, 94, 1);
    font-size: 11px;
    letter-spacing: 0 0.5px;

    &:focus {
      outline: none;
      color: #000;
    }
  }
`;

export const BlurBackground = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  position: fixed;
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
  padding: 3rem;
  border-radius: 8px;
`;
