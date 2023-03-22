import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const Search = styled.div`
  position: relative;
  z-index: -1;
  
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem 0.8rem;
  }
  .search {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
`;