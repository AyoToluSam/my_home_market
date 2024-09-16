import { useState, useEffect } from "react";
import { ConfirmationWrapper, ConfirmationTag } from "./ConfirmationStyles";
import { formatCurrency } from "@/utilities/formatCurrency";
import Review from "../Review/Review";
import { useSelector } from "react-redux";
import { selectCartQuantity } from "@/redux/features/cartSlice";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormSetFocus,
  UseFormTrigger,
} from "react-hook-form";

type ConfirmationProps = {
  totalPayment: number;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: FieldValues) => void;
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
  loading?: boolean;
};

const Confirmation = ({
  totalPayment,
  handleSubmit,
  onSubmit,
  isValid,
  errors,
  trigger,
  setFocus,
  loading,
}: ConfirmationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const cartQuantity = useSelector(selectCartQuantity);

  const handlePayment = () => {
    if (isValid) {
      handleSubmit(onSubmit)();
    } else {
      trigger().then(() => {
        const firstErrorKey = Object.keys(errors)[0];
        const firstError = errors[firstErrorKey];

        if (firstError?.message) {
          setFocus(firstErrorKey);
        }
      });
    }
  };

  return (
    <ConfirmationWrapper>
      <h4>Order Summary</h4>
      <Review />
      {isHydrated && (
        <ConfirmationTag>
          <span>
            Total ({cartQuantity} item{cartQuantity > 1 && "s"}):
          </span>
          <h4>{formatCurrency(totalPayment)}</h4>
        </ConfirmationTag>
      )}
      <button type="submit" onClick={handlePayment} disabled={!cartQuantity}>
        {loading ? <img src={"/spinner.gif"} alt="" /> : "Proceed to payment"}
      </button>
    </ConfirmationWrapper>
  );
};

export default Confirmation;
