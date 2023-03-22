import { IoMdClose } from 'react-icons/io'
import {MdDelete} from 'react-icons/md'
import { CartContainer, CloseContainer, CloseButton, CartList, CartItem,
LeftDiv, RightDiv, CartImage, CartItemName, CartItemPrice, Empty, 
TotalContainer, CartTotal, RemoveAll, CheckoutButton } from './CartStyles'
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utilities/formatCurrency'
import { useRouter } from 'next/router'


const Cart = () => {

  const router = useRouter()

  const {closeCart, cartItems, cartQuantity, removeFromCart, removeAll, data} = useCart()

  const handleClick = () => {
    closeCart()
    router.push('/checkout')
  }

  return (
    <CartContainer>
      <CloseContainer>
        <h2>Your Cart</h2>
        <CloseButton>
          <IoMdClose className='close' onClick={() => closeCart()} />
        </CloseButton>
      </CloseContainer>
      { cartQuantity ?
        <CartList>
          {cartItems.map((item) => {
            const cartItem = data.find(dataItem => dataItem.id === item.id)
            return (
              <CartItem key={item.id}>
                <LeftDiv>
                  <CartImage src={cartItem.image} alt={cartItem.name} />
                  <CartItemName>{cartItem.name}</CartItemName>
                  {item.quantity > 1 &&
                    <p>
                      x{item.quantity}
                    </p>
                  }
                </LeftDiv>
                <RightDiv>
                  <CartItemPrice>{formatCurrency(cartItem.price * item.quantity)}</CartItemPrice>
                  <MdDelete onClick={() => removeFromCart(item.id)} />
                </RightDiv>
              </CartItem>
            )
          })}
        </CartList> :
        <Empty>You have no items. Please order some items.</Empty>
      }
      <TotalContainer>
        <CartTotal>
          Total: {formatCurrency(cartItems?.reduce(
          (total, cartItem) => {
            const item = data.find(item => item.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0))}
        </CartTotal>
        { cartQuantity > 0 &&
          <RemoveAll onClick={() => removeAll()} >Remove all</RemoveAll>
        }
      </TotalContainer>
      <CheckoutButton>
        <button onClick={handleClick} disabled={!cartQuantity} >Checkout</button>
      </CheckoutButton>
    </CartContainer>
  );
}

export default Cart