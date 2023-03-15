import React from 'react'
import { useCart } from '@/contexts/CartContext'
import { ReviewList, ReviewItem, ReviewItemName, ReviewItemPrice } from './ReviewStyles'
import { formatCurrency } from '@/utilities/formatCurrency'



const Review = () => {

  const { cartItems, data} = useCart()

  return (
    <ReviewList>
      {cartItems.map((item) => {
        const cartItem = data.find(dataItem => dataItem.id === item.id)
        if (!cartItem) {
          return null
        }
        return (
          <ReviewItem key={item.id}>
            <ReviewItemName>{cartItem.name}</ReviewItemName>
            {item.quantity > 1 &&
              <p>
                x{item.quantity}
              </p>
            }
            <ReviewItemPrice>{formatCurrency(cartItem.price * item.quantity)}</ReviewItemPrice>
          </ReviewItem>
        )
      })}
    </ReviewList>
  )
}

export default Review