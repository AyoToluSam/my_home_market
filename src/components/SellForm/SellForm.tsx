import { FieldValues, useForm } from "react-hook-form";
import { Form, FormButtons } from "./SellFormStyles";
import OwnerForm from "./OwnerForm/OwnerForm";
import ProductForm from "./ProductForm/ProductForm";
import useMultiStep from "@/hooks/useMultiStep";
import Tabs from "../Tabs/Tabs";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Success from "../Success/Success";
import { uploadToCloudinary } from "@/utilities/cloudinary";
import { useSellProductMutation } from "@/redux/api/productsApi";
import { toast } from "react-toastify";
import { useCustomParams } from "@/hooks/useParam";

const SellForm = () => {
  const { router, setParam } = useCustomParams();

  const { newProductId } = router.query;

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [loading, setLoading] = useState(false);

  const [sellProduct] = useSellProductMutation();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);

    const imgUrl = await uploadToCloudinary({
      fileType: "image",
      file: data.itemImage,
    });

    const newData = {
      name: data.name,
      condition: data.condition.value,
      description: data.description,
      price: data.price,
      image: imgUrl,
      location: `${data.city.name}, ${data.state.name}, ${data.country.name}`,
      owner: {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        altPhone: data.altPhone,
        bank: data.bank.name,
        accountNo: data.accountNo,
      },
    };

    sellProduct(newData)
      .unwrap()
      .then((res) => {
        reset({});
        window.scrollTo(0, 0);
        setParam({ param: "newProductId", value: res.id });
      })
      .catch((err) =>
        toast.error(err.data?.message || "An error occured, please try again.")
      )
      .finally(() => setLoading(false));
  };

  const formSteps = [
    <ProductForm
      key={"product"}
      register={register}
      control={control}
      errors={errors}
      watch={watch}
      setValue={setValue}
    />,
    <OwnerForm
      key={"owner"}
      register={register}
      control={control}
      errors={errors}
      watch={watch}
      setValue={setValue}
    />,
  ];

  const formTitles = ["Product  Information", "Seller's Details"];

  const { step, currentStepIndex, isFirstStep, isLastStep, back, next, goTo } =
    useMultiStep({ steps: formSteps, titles: formTitles });

  return (
    <>
      <Form>
        <Tabs
          tabs={formTitles}
          currentStepIndex={currentStepIndex}
          onSwitch={(index) => {
            if (isValid) {
              goTo(index);
            } else if (currentStepIndex > 0 && currentStepIndex > index) {
              goTo(index);
            }
          }}
        />
        {step}
      </Form>
      <FormButtons>
        {!isFirstStep && (
          <button onClick={back} disabled={loading}>
            Back
          </button>
        )}
        {!isLastStep ? (
          <button disabled={!isValid || !watch("itemImage")} onClick={next}>
            Next
          </button>
        ) : (
          <button
            disabled={!isValid || loading}
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        )}
      </FormButtons>

      <Modal
        open={!!newProductId}
        onClose={() => setParam({ param: "newProductId", value: "" })}
      >
        <Success
          msg={"Your product has been added to the market."}
          btnLink={`/market/product/${newProductId}`}
          btnText={"View Product"}
          onClose={() => setParam({ param: "newProductId", value: "" })}
        />
      </Modal>
    </>
  );
};

export default SellForm;
