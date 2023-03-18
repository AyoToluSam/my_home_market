import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';
import {ConfirmationWrapper, ConfirmationTag, Form, FormLabel, FormInput, FormButton} from './ConfirmationStyles'
import {useCart} from '@/contexts/CartContext';
import {formatCurrency} from '@/utilities/formatCurrency';
import Review from '../Review/Review';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';


// const PaystackPop = dynamic(() => import('@paystack/inline-js'), { ssr: false });


const Confirmation = () => {

  const [isHydrated, setIsHydrated] = useState(false);
  
  const [paystack, setPaystack] = useState(null);

  useEffect(() => {
    setIsHydrated(true);
    const initPaystack = async () => {
      const Paystack = await import('@paystack/inline-js');
      setPaystack(new Paystack.default());
    };
    initPaystack();
  }, []);

  const router = useRouter()

  const {cartItems, cartQuantity, data, removeAll} = useCart();

  const totalPayment = cartItems.reduce(
    (total, cartItem) => {
      const item = data.find(item => item.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0)

  const {
    register,
    handleSubmit,
    formState: {errors}, 
    getValues
  } = useForm({mode: "all"});

  const onSubmit = (data) => {

    if (paystack) {
      paystack.newTransaction({
        key: `${process.env.privateKey}`,
        amount: totalPayment*100,
        email: data.email,
        onSuccess(transaction){
          const message = `Payment complete! Refrence ${transaction.reference}`
          alert(message)
          removeAll()
          router.push("/order")
        },
        onCancel(){
          alert("You have canceled this transaction")
        }
      })
    }
  };

  const validateEmail = (value) => {
    const {email} = getValues()
    if (value !== email) {
      return false;
    }
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
        <FormLabel htmlFor="name">Full Name:</FormLabel>
        <FormInput
          type="text"
          {...register("name", {
            required: "*Please enter your name",
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
            required: "*Please enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "*Invalid email format"
          }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

              
      <FormLabel htmlFor="emailConfirmation">Confirm email</FormLabel>
      <FormInput 
      type="email"           
      {...register("emailConfirmation", {
        required: true,
        validate: validateEmail
      })} />
      {errors.emailConfirmation && <p>*Please enter a matching email</p>}
        
        <FormLabel htmlFor="phone">Phone number:</FormLabel>
        <FormInput
          type="text"
          {...register("phone", {
            required: "*Please enter a valid phone number",
            pattern: {
              value: /^[\+]?[2-4]{3}?[0-9]{10}$/,
              message: "Invalid phone number"
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