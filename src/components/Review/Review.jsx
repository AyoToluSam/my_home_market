import React from 'react'
import { useCart } from '@/contexts/CartContext'
import { CartList, CartItem, CartItemName } from './ReviewStyles'


const Review = () => {

  const { cartItems, data} = useCart()

  return (
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
          </CartItem>
        )
      })}
    </CartList>
  )
}

export default Review