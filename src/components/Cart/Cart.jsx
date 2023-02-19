import { useState, useEffect } from 'react';
import { CartContainer, CartList, CartItem, CartItemName, CartItemPrice, CartTotal, CartTotalLabel, CartTotalPrice } from './CartStyles'

const Cart = ({cartData}) => {
  const [cartItems, setCartItems] = useState(cartData);

  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      <CartList>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartItemName>{item.name}</CartItemName>
            <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
          </CartItem>
        ))}
      </CartList>
      <CartTotal>
        <CartTotalLabel>Total:</CartTotalLabel>
        <CartTotalPrice>${calculateTotal().toFixed(2)}</CartTotalPrice>
      </CartTotal>
    </CartContainer>
  );
}

export default Cart

export async function getServerSideProps() {

  // Fetch the user's cart data from the database or session
  const cartData = ;

  return {
    props: {
      cartData: cartData || [],
    },
  };
}