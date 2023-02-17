import { Wrapper, Title, Description, Condition, Location, Contact, Price } from './ProductDetailStyles'


const ProductDetail = ({ product }) => {

  return (
    <Wrapper>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Condition>Condition: {product.condition}</Condition>
      <Location>Location: {product.location}</Location>
      <Contact>Contact: {product.contact}</Contact>
      <Price>Price: {product.price}</Price>
    </Wrapper>
  );
}

export default ProductDetail;
