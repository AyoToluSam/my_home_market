import { usePaystackPayment } from 'react-paystack';


export const Paystack = (data) => {

  const config = {
    reference: (new Date()).getTime().toString(),
    email: data.email,
    amount: data.amount,
    publicKey: 'pk_test_64a90dc69ec7acaf8604ef64906b695ea742061d',
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log('closed')
  }

  const initializePayment = usePaystackPayment(config);

  initializePayment(onSuccess, onClose);

}