import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { Form } from "../Form/FormStyles";
import TextInput from "../Form/TextInput";
import {
  BuyerDetailsContainer,
  TermsAndConditions,
} from "./BuyerDetailsStyles";

type BuyerDetailsProps = {
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const BuyerDetails = ({ register, getValues, errors }: BuyerDetailsProps) => {
  const validateEmail = (value: string) => {
    const { email } = getValues();
    if (value !== email) {
      return false;
    }
  };

  const confirmationFormFields = [
    { fieldName: "name", label: "Full Name", type: "text" },
    {
      fieldName: "email",
      label: "Email",
      type: "text",
      validateFn: validateEmail,
    },
    { fieldName: "phone", label: "Phone number", type: "text" },
    {
      fieldName: "altPhone",
      label: "Alternative Phone Number",
      type: "text",
      required: false,
    },
    {
      fieldName: "location",
      label: "Location",
      type: "select",
    },
  ];

  return (
    <BuyerDetailsContainer>
      <h4>Buyer's Details</h4>
      <Form align="flex-start">
        {confirmationFormFields.map(
          ({ fieldName, label, validateFn, required }, index) => (
            <TextInput
              key={fieldName + index}
              fieldName={fieldName}
              label={label}
              register={register}
              errors={errors}
              validateFn={validateFn}
              required={required}
            />
          )
        )}
        <TermsAndConditions>
          <input
            id="termsConditions"
            type="checkbox"
            {...register("termsConditions", {
              required: true,
            })}
            checked
          />
          <span>I have read and agreed to the Terms and Conditions</span>
        </TermsAndConditions>
      </Form>
    </BuyerDetailsContainer>
  );
};

export default BuyerDetails;
