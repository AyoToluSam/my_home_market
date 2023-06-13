import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 12rem;
  transition: ease-in-out 0.5s;

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    /* padding: 0 10rem; */

    p {
      margin: 0;
    }
  }

  input,
  textarea,
  select {
    padding: 0.8rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-family: "Montserrat", "Helvetica";

    &:focus {
      outline: none;
    }
  }

  select {
    cursor: pointer;
  }

  span {
    color: darkred;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
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

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 12rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 4rem;
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
