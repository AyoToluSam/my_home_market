import {ProductListContainer, ProductCard, ProductImage, ProductName, ProductPrice} from './ProductListStyles'
import Link from 'next/link';


const ProductList = ({products}) => {

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
          <Link href={`/market/product/${product.id}`}>View Details</Link>
        </ProductCard>
      ))}
    </ProductListContainer>
  )
}

export default ProductList;