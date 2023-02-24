import {GrFormClose} from 'react-icons/gr'
import { CartContainer, CartList, CartItem, CartItemName, CartItemPrice, Remove, TotalContainer, CartTotal, RemoveAll, CheckoutButton } from './CartStyles'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utilities/formatCurrency'
import { useRouter } from 'next/router'


const Cart = ({data}) => {

  const router = useRouter()

  const {closeCart, cartItems, removeFromCart, removeAll} = useCart()

  const handleClick = () => {
    closeCart()
    router.push('/checkout')
  }

  return (
    <CartContainer>
      <GrFormClose className='close' onClick={() => closeCart()} />
      <h2>Your Cart</h2>
      <CartList>
        {cartItems.map((item) => {
          const cartItem = data.find(dataItem => dataItem.id === item.id)
          return (
            <CartItem key={item.id}>
              <CartItemName>{cartItem.name}</CartItemName>
              {item.quantity > 1 &&
                <p>
                  x{item.quantity}
                </p>
              }
              <CartItemPrice>{formatCurrency(cartItem.price * item.quantity)}</CartItemPrice>
              <Remove onClick={() => removeFromCart(item.id)}>x</Remove>
            </CartItem>
          )
        })}
      </CartList>
      <TotalContainer>
        <CartTotal>
          Total: {formatCurrency(cartItems.reduce(
          (total, cartItem) => {
            const item = data.find(item => item.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0))}
        </CartTotal>
        <RemoveAll onClick={() => removeAll()} >Remove all</RemoveAll>
      </TotalContainer>
      <CheckoutButton>
        <button onClick={handleClick} >Checkout</button>
      </CheckoutButton>
    </CartContainer>
  );
}

export default Cart