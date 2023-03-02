import {useForm} from 'react-hook-form'
import {CheckoutWrapper, CheckoutTag, Form, FormLabel, FormInput, FormButton} from './CheckoutFormStyles'
import {useCart} from '@/contexts/CartContext'
import {formatCurrency} from '@/utilities/formatCurrency'

const CheckoutForm = ({data}) => {

  const {cartItems, cartQuantity} = useCart();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <CheckoutWrapper>
    <CheckoutTag>
      <h1>Paying For {cartQuantity} items: 
        <span>
        Total = {formatCurrency(cartItems.reduce(
            (total, cartItem) => {
              const item = data.find(item => item.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0))}
        </span>
      </h1>
    </CheckoutTag>
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
        
        <FormLabel htmlFor="cardNumber">Credit Card Number:</FormLabel>
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
        {errors.expirationDate && <p>{errors.expirationDate.message}</p>}

        <FormButton type="submit">Submit Payment</FormButton>
      </Form>
    </CheckoutWrapper>
  )
}

export default CheckoutForm;

