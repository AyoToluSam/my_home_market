import {ProductListContainer, ProductCard, ProductImage, ProductName, 
ProductPrice, AddToCart, QuantityButton, RemoveButton,
MarketContainer, Banner, MarketBody, Category, SearchGroup} from './ProductListStyles'
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext'
import { formatCurrency } from '@/utilities/formatCurrency'
import {BiSearch} from 'react-icons/bi'




const ProductList = () => {

  const {
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity,
    removeFromCart,
    data
  } = useCart()

  return (
    <MarketContainer>
      <Banner>
        <div className='sales'>
          <h3>Shop Home Equipment & Accessories</h3>
          <p>Flash sales with 15% off between 16th July and 21st July.</p>
          <button>Shop Now</button>
        </div>
        <img src="/marketbanner.webp" alt="" />
      </Banner>
      <MarketBody>
        <Category>
          <li className='active'>All Category</li>
          <li>Electronics</li>
          <li>Furniture</li>
          <li>Kitchen Ware</li>
          <li>Accessories</li>
        </Category>
        <SearchGroup>
          <BiSearch className='search' />
          <input type="text" placeholder='What are you looking for?' />
        </SearchGroup>
        <ProductListContainer>
          {data.map((product) => {
            const quantity = getItemQuantity(product.id);
            return (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <Link href={`/Market/product/${product.id}`}>View Details</Link>
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
      </MarketBody>
    </MarketContainer>
  )
}

export default ProductList;