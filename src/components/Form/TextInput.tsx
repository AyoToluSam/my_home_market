import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Validate,
} from "react-hook-form";
import { FormInput, FormLabel, TextInputContainer } from "./FormStyles";

type TextInputProps = {
  fieldName: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validateFn?: Validate<string, FieldValues>;
  placeholder?: string | boolean;
  required?: boolean;
  background?: "white" | "grey";
  handleKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TextInput = ({
  fieldName,
  label,
  register,
  errors,
  validateFn,
  placeholder = true,
  required = true,
  background,
  handleKeyDown,
}: TextInputProps) => {
  return (
    <TextInputContainer>
      <FormLabel htmlFor={fieldName}>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <FormInput
        id={fieldName}
        placeholder={
          placeholder
            ? typeof placeholder === "string"
              ? placeholder
              : `Enter ${label?.toLowerCase()}...`
            : ""
        }
        type="text"
        {...register(fieldName, {
          required: required ? `Please enter ${label?.toLowerCase()}` : false,
          validate: validateFn,
        })}
        background={background}
        onKeyDown={handleKeyDown}
      />
      {errors[fieldName] && (
        <p className="error">{errors[fieldName]?.message as string}</p>
      )}
    </TextInputContainer>
  );
};

export default TextInput;
