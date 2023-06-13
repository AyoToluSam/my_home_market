import styled from "styled-components";

export const Uploaded = styled.div`
  display: flex;
  flex-direction: column;
  max-width: max-content;

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-width: 240px;
  }

  button {
    background-color: rgba(255, 242, 211, 1);
    padding: 0.8rem;
    color: darkred;
    border: none;
    border-top: 1px solid #7f91a8;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 700;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
  }
`;

export const Click = styled.div`
  .upload {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: rgba(255, 242, 211, 1);
    border: 1px dashed #7f91a8;
    border-radius: 4px;

    p {
      font-size: 13px;
    }

    .drag {
      font-weight: 700;
      color: #59595e;
      margin: 0.5rem 0;
    }

    .file-info {
      font-weight: 400;
      font-size: 11px;
      color: #8d9da8;
      margin-top: 0.4rem;
    }
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
    background: rgba(221, 218, 209, 1);
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    color: #59595e;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      color: #59595e;
    }
  }
`;
