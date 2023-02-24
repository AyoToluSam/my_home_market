import {ProductListContainer, ProductCard, ProductImage, ProductName, 
ProductPrice, AddToCart, QuantityButton, RemoveButton} from './ProductListStyles'
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utilities/formatCurrency'



const ProductList = ({products}) => {

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removeFromCart
  } = useCart()

  return (
    <ProductListContainer>
      {products.map((product) => {
        const quantity = getItemQuantity(product.id);
        return (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
            <Link href={`/market/product/${product.id}`}>View Details</Link>
            <div>
              {
                quantity === 0 ?
                (<AddToCart onClick={() => increaseItemQuantity(product.id)}> + Add To Cart</AddToCart>) : 
                (<div className='allButtons'>
                  <div className='quantityButtons'>
                    <QuantityButton onClick={() => decreaseItemQuantity(product.id)}>-</QuantityButton>
                    <p><span>{quantity}</span>in cart</p>
                    <QuantityButton onClick={() => increaseItemQuantity(product.id)}>+</QuantityButton>
                  </div>
                  <RemoveButton onClick={() => removeFromCart(product.id)}>Remove</RemoveButton>
                </div>)
              }
            </div>
          </ProductCard>
        )
      })}
    </ProductListContainer>
  )
}

export default ProductList;