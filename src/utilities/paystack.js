

export const paystack = (data) => {

  const handler = PaystackPop.setup({
    key: 'pk_test_64a90dc69ec7acaf8604ef64906b695ea742061d',
    email: data.email,
    amount: data.amount,
    ref: (new Date()).getTime().toString(),
    onClose: (ref) => {
      console.log(ref);
    },
    callback: (response) => {
      console.log(response.reference);
    }
  });

  handler.openIframe();

}