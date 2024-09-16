import BuyerDetails from "@/components/BuyerDetails/BuyerDetails";
import Confirmation from "@/components/Confirmation/Confirmation";
import {
  usePaystackMutation,
  useValidatePaymentQuery,
} from "@/redux/api/paystackApi";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import { CartItem, selectCartItems } from "@/redux/features/cartSlice";
import { FieldValues, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  CheckoutContainer,
  PaymentSuccess,
} from "../../styles/checkout/styles";
import { useState } from "react";
import { useRouter } from "next/router";
import Success from "@/components/Success/Success";
import { toast } from "react-toastify";

const NEXT_PUBLIC_APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

const CheckOut = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    setFocus,
  } = useForm({ mode: "all" });

  const { data = [] } = useGetProductsQuery({});

  const cartItems = useSelector(selectCartItems);

  const totalPayment = cartItems.reduce((total, cartItem) => {
    const item = data.find((item: CartItem) => item.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const [makePayment, { isLoading: isPaystackLoading }] = usePaystackMutation();

  const [loading, setLoading] = useState(false);

  const { trxref } = router.query;

  const { data: paymentStatus, isSuccess: isValidationSuccess } =
    useValidatePaymentQuery(trxref, {
      skip: !trxref,
    });

  const onSubmit = (data: FieldValues) => {
    setLoading(true);

    const submitData = {
      email: data.email || "tayodele@softalliance.com",
      amount: Math.round(totalPayment * 100),
      // currency: "USD",
      callback_url: `${NEXT_PUBLIC_APP_BASE_URL}/checkout`,
    };

    makePayment(submitData)
      .unwrap()
      .then((response) => {
        const checkout = response.data.authorization_url;
        location.assign(checkout);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Payment initiation failed. Please try again.");
      });
  };

  const paymentSuccess = trxref && isValidationSuccess && paymentStatus.status;

  return paymentSuccess ? (
    <PaymentSuccess>
      <Success
        msg="Your payment was successful and your order has been initiated. <br />
        Please check your email for payment receipt and tracking details."
        btnText="Continue Shopping"
        btnLink="/market"
      />
    </PaymentSuccess>
  ) : (
    <CheckoutContainer>
      <BuyerDetails register={register} errors={errors} getValues={getValues} />
      <Confirmation
        totalPayment={totalPayment}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        trigger={trigger}
        setFocus={setFocus}
        isValid={isValid}
        errors={errors}
        loading={isPaystackLoading || loading}
      />
    </CheckoutContainer>
  );
};

export default CheckOut;
