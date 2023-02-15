import {useState, useEffect} from 'react'
import {ProductListContainer, ProductCard, ProductImage, ProductName, ProductPrice} from './MarketListStyles'


const MarketList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/data/marketlist-data.json');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductCard>
      ))}
    </ProductListContainer>
  )
}

export default MarketList