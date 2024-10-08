import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    font-weight: bold;
  }
`;

export const Hero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  color: #fff;

  img {
    width: 100%;
    max-width: 100%;
  }

  .heroMsg {
    min-width: 44%;
    position: absolute;
    left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .heroPrompt {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h5 {
        font-size: 18px;
        font-weight: 300;
      }

      h2 {
        font-weight: 700;
      }

      p {
        font-size: 13px;
        font-weight: 200;
        letter-spacing: 0.5px;
      }
    }

    .searchGrp {
      position: relative;
      display: flex;
      align-items: center;
      background: transparent;

      .search {
        position: absolute;
        left: 0.5rem;
        color: #000;
      }

      input {
        border: none;
        background: var(--secondary-color);
        border-radius: 6px;
        width: 100%;
        padding: 0.8rem 2rem;
        color: rgba(89, 89, 94, 1);
        font-size: 11px;
        letter-spacing: 0 0.5px;

        &:focus {
          outline: none;
          color: #000;
        }
      }
    }
  }
`;

export const HomeBody = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SalesBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
  }

  .sales {
    position: absolute;
    z-index: 2;
    right: 12.5%;

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin: 0.8rem 0 1rem;
    }

    button {
      color: #fff;
      background-color: #000;
      border: none;
      border-radius: 0.1rem;
      padding: 0.4rem 1.8rem;
      letter-spacing: 0.5px;
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export const Operation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;

      img {
        max-width: 20px;
      }

      span {
        font-size: 13px;
        font-weight: 600;
      }

      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 22px;
      }

      &:first-child {
        img {
          max-width: 14px;
        }
      }
    }
  }
`;

export const MarketGallery = styled.div`
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  div {
    &:first-child {
      grid-row: span 2;
    }

    &:nth-child(4) {
      position: relative;
      display: flex;
      align-items: center;

      button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
        color: #fff;
        padding: 0.4rem 1rem;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.5px;
        border-radius: 2px;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 0;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    li {
      list-style: none;
      padding: 0.8rem 1.5rem;
      width: 100%;
      background: #f5f5f7;
      border: 1px solid rgba(17, 59, 109, 0.17);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.6rem;

      p {
        font-weight: 500;
        font-size: 13px;
      }
    }
  }
`;
