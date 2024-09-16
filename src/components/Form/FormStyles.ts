import styled from "styled-components";

type FormProps = {
  align: "flex-start" | "flex-end" | "center";
};

type InputProps = {
  background?: "white" | "grey";
};

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
  gap: 0.75rem;
  width: 100%;
  min-width: 300px;
`;

export const FormLabel = styled.label`
  font-size: 15px;

  span {
    color: darkred;
  }
`;

export const FormInput = styled.input<InputProps>`
  border: none;
  outline: none;
  background: none;
  background: ${(props) =>
    props.background === "grey" ? "#f0ede9a6" : "#fff"};
  padding: 0.75rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const FormArea = styled.textarea<InputProps>`
  border: none;
  outline: none;
  background: none;
  background: ${(props) =>
    props.background === "grey" ? "#f0ede9a6" : "#fff"};
  padding: 0.75rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;

  .error {
    color: darkred;
    font-size: 13px;
  }
`;
