import styled from "styled-components";

export const BuyerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid #eee;
  padding: 0 4rem;
`;

export const TermsAndConditions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 12px;
    height: 12px;
  }

  span {
    font-size: 13px;
  }
`;
