import styled from "styled-components";

export const BannerWrapper = styled.div`
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
    left: 8.8rem;

    h3 {
      line-height: 28px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin: 0.5rem 0 1rem;
    }

    button {
      color: #fff;
      background-color: #000;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1.8rem;
      letter-spacing: 0.5px;
      font-size: 13px;
      font-weight: 500;
    }
  }
`;
