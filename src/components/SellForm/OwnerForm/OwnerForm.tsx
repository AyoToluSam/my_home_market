import TextInput from "@/components/Form/TextInput";
import { validateEmail } from "@/utilities/validations";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Country, State, City } from "country-state-city";
import SelectInput from "@/components/Form/SelectInput";
import {
  useGetBanksQuery,
  useValidateAccountMutation,
} from "@/redux/api/paystackApi";

type OwnerFormProps = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const OwnerForm = ({
  register,
  control,
  errors,
  watch,
  setValue,
}: OwnerFormProps) => {
  const { data: banks = [] } = useGetBanksQuery({});

  const [validateAccount] = useValidateAccountMutation();

  const handleValidateAccount = async (value: string) => {
    const bankCode = watch("bank")?.code;

    if (!bankCode) {
      return "Please select a bank.";
    }
    if (value?.length < 9) {
      return "Please enter a valid account number.";
    }
    if (value?.length >= 9 && bankCode) {
      return await validateAccount({ bankCode, account: value })
        .unwrap()
        .then((res) => res.status || "Please enter a valid account number")
        .catch((err) =>
          err.data?.status === false
            ? "Please enter a valid account number"
            : "Account validation failed, please try again."
        );
    }
  };

  const states = watch("country")
    ? State.getStatesOfCountry(watch("country")?.isoCode)?.length
      ? State.getStatesOfCountry(watch("country")?.isoCode)
      : [
          {
            name: watch("country")?.name,
            isoCode: watch("country")?.isoCode,
          },
        ]
    : [];

  const cities =
    watch("country") && watch("state")
      ? City.getCitiesOfState(
          watch("country")?.isoCode,
          watch("state")?.isoCode
        )?.length
        ? City.getCitiesOfState(
            watch("country")?.isoCode,
            watch("state")?.isoCode
          )
        : [
            {
              name: watch("state")?.name,
              isoCode: watch("state")?.isoCode,
            },
          ]
      : [];

  return (
    <div className="owner-details">
      <TextInput
        fieldName="fullName"
        label="Full Name"
        register={register}
        errors={errors}
      />
      <TextInput
        fieldName={"email"}
        label={"Email"}
        register={register}
        errors={errors}
        validateFn={validateEmail}
      />
      <div className="first-row">
        <TextInput
          fieldName="phone"
          label="Phone Number"
          register={register}
          errors={errors}
          validateFn={(value) => {
            if (value) {
              if (value.length < 11) {
                return "Incomplete phone number";
              }
              if (!/^(0|\+234)[789][01]\d{8}$/.test(value)) {
                return "Invalid phone number";
              }
              return true;
            }
          }}
        />
        <TextInput
          fieldName="altPhone"
          label="Alternative Phone Number"
          register={register}
          errors={errors}
          validateFn={(value) => {
            if (value) {
              if (value.length < 11) {
                return "Incomplete phone number";
              }
              if (!/^(0|\+234)[789][01]\d{8}$/.test(value)) {
                return "Invalid phone number";
              }
              return true;
            }
          }}
          required={false}
        />
      </div>
      <div className="first-row">
        <SelectInput
          fieldName="country"
          label="Country of Residence"
          control={control}
          errors={errors}
          optionsData={Country.getAllCountries() || []}
          optionLabel={"name"}
          optionValue={"isoCode"}
          onChangeFn={() => {
            setValue("state", null);
            setValue("city", null);
          }}
        />
        <SelectInput
          fieldName="state"
          label="State of residence"
          control={control}
          errors={errors}
          optionsData={states}
          optionLabel={"name"}
          optionValue={"isoCode"}
          onChangeFn={() => setValue("city", null)}
        />
      </div>
      <SelectInput
        fieldName="city"
        label="City of residence"
        control={control}
        errors={errors}
        optionsData={cities}
        optionLabel={"name"}
        optionValue={"name"}
      />
      <div className="first-row">
        <SelectInput
          fieldName="bank"
          label="Bank"
          control={control}
          errors={errors}
          optionsData={banks}
          optionLabel={"name"}
          optionValue={"code"}
          onChangeFn={() => setValue("accountNo", "")}
        />
        <TextInput
          fieldName="accountNo"
          label="Account Number"
          register={register}
          errors={errors}
          validateFn={handleValidateAccount}
        />
      </div>
    </div>
  );
};

export default OwnerForm;
