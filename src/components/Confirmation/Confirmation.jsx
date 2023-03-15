import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';
import {ConfirmationWrapper, ConfirmationTag, Form, FormLabel, FormInput, FormButton} from './ConfirmationStyles'
import {useCart} from '@/contexts/CartContext';
import {formatCurrency} from '@/utilities/formatCurrency';
import Review from '../Review/Review';
import { paystack } from '@/utilities/paystack';



const Confirmation = () => {

  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const {cartItems, cartQuantity, data} = useCart();

  const totalPayment = cartItems.reduce(
    (total, cartItem) => {
      const item = data.find(item => item.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0)

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    const paystackData = {
      email: data.email,
      amount: totalPayment*100
    }

    paystack(paystackData);
    
  };

  return (
    <ConfirmationWrapper>
      <h2>Order Summary</h2>
      <Review />
      { isHydrated &&
        <ConfirmationTag>
          <h3>Paying for {cartQuantity} item{cartQuantity > 1 && "s"}: 
            <span>
            Total = {formatCurrency(totalPayment)}
            </span>
          </h3>
        </ConfirmationTag>
      }
      <h4>Enter details for your order.</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          type="text"
          {...register("name", {
            required: "*Name is required",
            minLength: {
              value: 3,
              message: "*Name should be at least 3 characters"
          }
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          type="email"
          {...register("email", {
            required: "*Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "*Invalid email format"
          }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        
        <FormLabel htmlFor="phone">Phone number:</FormLabel>
        <FormInput
          type="text"
          {...register("phone", {
            required: "*Phone number is required",
            pattern: {
              value: /^[\+]?[2-4]{3}?[0-9]{10}$/,
              message: "Please enter a valid phone number"
            },
            minLength: {
              value: 11,
              message: "Incomplete phone number"
            }
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
        
        <FormButton type="submit">Proceed to payment</FormButton>
      </Form>
    </ConfirmationWrapper>
  )
}

export default Confirmation;

{/* <FormLabel htmlFor="cardNumber">Credit Card Number:</FormLabel>
<FormInput
  {...register("cardNumber", {
    required: "*Credit Card Number is required",
    minLength: {
      value: 16,
      message: "*Credit Card Number should be 16 digits"
  },
    maxLength: {
      value: 16,
      message: "*Credit Card Number should be 16 digits"
    }
  })}
/>
{errors.cardNumber && <p>{errors.cardNumber.message}</p>}

<FormLabel htmlFor="cvv">CVV:</FormLabel>
<FormInput
  type="text"
  {...register("cvv", {
    required: "*CVV is required",
    minLength: {
      value: 3,
      message: "*CVV should be 3 digits"
  },
    maxLength: {
      value: 3,
      message: "*CVV should be 3 digits"
    }
  })}
/>
{errors.cvv && <p>{errors.cvv.message}</p>}

<FormLabel htmlFor="expirationDate">Expiry Date:</FormLabel>
<FormInput
  type="text"
  {...register("expirationDate", {
    required: "*Expiration Date is required",
    pattern: {
      value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      message: "*Invalid expiration date format"
  }
  })}
/>
{errors.expirationDate && <p>{errors.expirationDate.message}</p>} */}