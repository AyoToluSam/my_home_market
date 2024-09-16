import styled from "styled-components";

export const Uploaded = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  background-color: var(--secondary-color);
  border: 1px dashed #7f91a8;
  border-radius: 4px;

  img {
    max-width: 268px;
    border-radius: 6px;
  }

  button {
    color: darkred;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
    gap: 0.1rem;
    font-weight: 600;
  }
`;

export const Click = styled.div`
  margin-top: -0.5rem;
  .upload {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: rgba(255, 242, 211, 1);
    border: 1px dashed #7f91a8;
    border-radius: 4px;

    p {
      font-size: 13px;
    }

    .drag {
      font-weight: 700;
      color: var(--primary-color);
      margin: 0.5rem 0;
    }

    .file-info {
      font-weight: 400;
      font-size: 11px;
      color: var(--primary-color);
      margin-top: 0.4rem;
    }
    .file-error {
      font-weight: 500;
      font-size: 12px;
      color: red;
      margin-top: 0.4rem;
    }

    img {
      position: absolute;
      left: 2rem;
      max-width: 40px;
      top: 50%;
      transform: translateY(-50%);
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      background: var(--primary-color);
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      color: #fff;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        color: #fff;
      }
    }
  }
`;
