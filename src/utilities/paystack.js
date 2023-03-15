

export const paystack = (email, amount) => {

  const handler = PaystackPop.setup({
    key: 'pk_test_64a90dc69ec7acaf8604ef64906b695ea742061d',
    email,
    amount,
    ref: (new Date()).getTime().toString(),
    onClose: () => {
      
    },
    callback: (response) => {
      console.log(response.reference);
    }
  });

  handler.openIframe();

}