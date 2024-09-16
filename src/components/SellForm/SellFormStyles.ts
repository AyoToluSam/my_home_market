import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  transition: ease-in-out 0.5s;

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    .upload-title {
      font-size: 15px;
    }
  }

  .owner-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-family: "Montserrat", "Helvetica";

    &:focus {
      outline: none;
    }
  }

  span {
    color: darkred;
  }

  .first-row {
    display: flex;
    gap: 1rem;
    width: 100%;
  }
`;

export const NavTitles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ccc;
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

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 2rem;
  padding: 0;
  margin-top: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 4rem;
    min-width: 200px;
    border-radius: 0.25rem;
    background-color: #000000;
    color: #fff;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:last-child {
      margin-left: auto;
    }

    img {
      max-width: 20px;
    }
  }
`;

export const SpanButton = styled.span`
  color: #000;
  background-color: #ccc;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
