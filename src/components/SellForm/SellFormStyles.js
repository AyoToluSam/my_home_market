import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: ease-in-out 0.5s;

  label {
    font-weight: bold;
  }

  input,
  textarea,
  select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    width: 100%;
  }

  span {
    color: darkred;
  }
`;

export const NavTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;

  h3 {
    padding: 2rem;
    height: 100%;
    border-right: 1px solid #ccc;
    cursor: pointer;
  
    &:last-child {
      border: none;
    } 
  }

  .active {
    color: #fff;
    background-color: blue;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
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