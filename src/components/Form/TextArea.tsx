import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { FormArea, FormLabel, TextInputContainer } from "./FormStyles";

type TextAreaProps = {
  register: UseFormRegister<FieldValues>;
  fieldName: string;
  label: string;
  required?: boolean;
  validateFn?: (value: string, prop: unknown) => boolean | string | undefined;
  errors: FieldErrors<FieldValues>;
  placeholder?: string | boolean;
  textareaRows?: number;
  maxLength?: number;
  background?: "white" | "grey";
};

const TextArea = ({
  register,
  fieldName,
  label,
  required = true,
  validateFn,
  errors,
  placeholder = true,
  textareaRows,
  maxLength,
  background,
}: TextAreaProps) => {
  return (
    <TextInputContainer>
      <FormLabel htmlFor={fieldName}>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <FormArea
        id={fieldName}
        placeholder={
          placeholder
            ? typeof placeholder === "string"
              ? placeholder
              : `Enter ${label?.toLowerCase()}...`
            : ""
        }
        {...register(fieldName, {
          required: required ? `Please enter ${label?.toLowerCase()}` : false,
          validate: validateFn,
        })}
        autoComplete="on"
        maxLength={maxLength}
        rows={textareaRows || 3}
        background={background}
      />
      {errors[fieldName] && (
        <p className="error">{errors[fieldName]?.message as string}</p>
      )}
    </TextInputContainer>
  );
};

export default TextArea;
