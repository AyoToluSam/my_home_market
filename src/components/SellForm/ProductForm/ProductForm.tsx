import SelectInput from "@/components/Form/SelectInput";
import TextArea from "@/components/Form/TextArea";
import TextInput from "@/components/Form/TextInput";
import Upload from "@/components/Upload/Upload";
import { handleKeyDownDecimals } from "@/utilities/validations";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type ProductFormProps = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const ProductForm = ({
  register,
  control,
  errors,
  watch,
  setValue,
}: ProductFormProps) => {
  return (
    <div className="product-info">
      <div className="first-row">
        <TextInput
          fieldName="name"
          label="Product Name"
          register={register}
          errors={errors}
        />
        <SelectInput
          fieldName="condition"
          label="Condition"
          control={control}
          errors={errors}
          optionsData={[
            "New",
            "Used-like-new",
            "Fairly-used",
            "In-good-condition",
          ]}
        />
      </div>
      <TextArea
        fieldName="description"
        label="Product Description"
        register={register}
        errors={errors}
      />
      <TextInput
        fieldName="price"
        label="Proposed Price"
        register={register}
        errors={errors}
        validateFn={(val) =>
          Number(val) > 0 || "Price must be grater than zero."
        }
        handleKeyDown={handleKeyDownDecimals}
      />

      <Upload watch={watch} setValue={setValue} />
    </div>
  );
};

export default ProductForm;
