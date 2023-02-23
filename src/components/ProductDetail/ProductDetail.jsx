import { Wrapper, Title, Image, Description, Condition, Location, Contact, Price } from './ProductDetailStyles'
import { formatCurrency } from '@/utilities/formatCurrency'


const ProductDetail = ({ product }) => {

  return (
    <Wrapper>
      <Title>{product.name}</Title>
      <img src={product.image} alt={product.name} />
      <Description>{product.description}</Description>
      <Condition>Condition: {product.condition}</Condition>
      <Location>Location: {product.location}</Location>
      <Contact>Contact: {product.contact}</Contact>
      <Price>Price: {formatCurrency(product.price)}</Price>
    </Wrapper>
  );
}

export default ProductDetail;
