import { Wrapper, Title, Description, Condition, Location, Contact, Price, AddToCart, QuantityButton, RemoveButton } from './ProductDetailStyles'
import { formatCurrency } from '@/utilities/formatCurrency'
import { useCart } from '@/contexts/CartContext'

const ProductDetail = ({ product }) => {

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removeFromCart
  } = useCart()

  const quantity = getItemQuantity(product.id);

  return (
    <Wrapper>
      <Title>{product.name}</Title>
      <img src={product.image} alt={product.name} />
      <Description>{product.description}</Description>
      <Condition>Condition: {product.condition}</Condition>
      <Location>Location: {product.location}</Location>
      <Contact>Contact: {product.contact}</Contact>
      <Price>Price: {formatCurrency(product.price)}</Price>
      <br />
      <div>
        {
          quantity === 0 ?
          (<AddToCart onClick={() => increaseItemQuantity(product.id)}> + Add To Cart</AddToCart>) : 
          (<div>
            <div className='quantityButtons'>
              <QuantityButton onClick={() => decreaseItemQuantity(product.id)}>-</QuantityButton>
              <p><span>{quantity}</span>in cart</p>
              <QuantityButton onClick={() => increaseItemQuantity(product.id)}>+</QuantityButton>
            </div>
            <RemoveButton onClick={() => removeFromCart(product.id)}>Remove</RemoveButton>
          </div>)
        }
      </div>
    </Wrapper>
  );
}

export default ProductDetail;
