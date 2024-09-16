import {
  Controller,
  FieldValues,
  Control,
  Validate,
  FieldErrors,
} from "react-hook-form";
import Select from "react-select";
import { FormLabel, TextInputContainer } from "./FormStyles";

type SelectInputProps = {
  optionsData: any[];
  optionLabel?: string;
  optionValue?: string;
  fieldName: string;
  label: string;
  required?: boolean;
  validateFn?: Validate<any, FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
  placeholder?: string | boolean;
  control: Control<FieldValues>;
  isDisabled?: boolean;
  onChangeFn?: (value: string | number) => void;
  background?: "white" | "grey";
};

const SelectInput = ({
  optionsData,
  optionLabel,
  optionValue,
  fieldName,
  label,
  placeholder = true,
  control,
  required = true,
  errors,
  isDisabled,
  validateFn,
  onChangeFn,
  background,
}: SelectInputProps) => {
  return (
    <TextInputContainer>
      <FormLabel htmlFor={fieldName}>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <Controller
        name={fieldName}
        control={control}
        rules={{
          required: required ? "This field is required." : false,
          validate: validateFn,
        }}
        render={({ field }) => (
          <Select
            id={fieldName}
            {...field}
            inputId={fieldName}
            options={
              optionsData.every(
                (x) => typeof x === "string" || typeof x === "number"
              )
                ? optionsData.map((x) => ({ value: x, label: x }))
                : optionsData
            }
            getOptionLabel={optionLabel ? (x) => x[optionLabel] : undefined}
            getOptionValue={optionValue ? (x) => x[optionValue] : undefined}
            value={field.value}
            placeholder={
              placeholder
                ? typeof placeholder === "string"
                  ? placeholder
                  : `Select ${label.toLowerCase()}...`
                : null
            }
            onChange={(value) => {
              field.onChange(value);
              onChangeFn ? onChangeFn(value?.[optionValue || "value"]) : null;
            }}
            isSearchable
            isClearable
            closeMenuOnSelect
            blurInputOnSelect
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#f0ede9a6",
                primary: "#2c2a3bff",
              },
            })}
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                outline: "none",
                background: background === "grey" ? "#f0ede9a6" : "#fff",
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                padding: "0.15rem 0",
                backgroundColor: state.isDisabled
                  ? "transparent"
                  : "transparent",
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                fontSize: "13px",
                letterSpacing: "0.5px",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                padding: 0,
                maxHeight: "300px",
                fontSize: "14px",
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                cursor: "pointer",
              }),
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                cursor: "pointer",
              }),
            }}
            isDisabled={isDisabled}
          />
        )}
      />
      {errors[fieldName] && (
        <p className="error">{errors[fieldName]?.message as string}</p>
      )}
    </TextInputContainer>
  );
};

export default SelectInput;
