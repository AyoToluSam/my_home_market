import {
  Wrapper,
  ProductInfoBody,
  ProductInfo,
  Details,
  DetailsBody,
  AddToCart,
  QuantityButton,
  RemoveButton,
  BuyNow,
} from "./ProductDetailStyles";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useCart } from "@/contexts/CartContext";
import Banner from "../Banner/Banner";
import { HiLocationMarker } from "react-icons/hi";

const ProductDetail = ({ product }) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useCart();

  if (!product) {
    return null;
  }

  const quantity = getItemQuantity(product.id);

  return (
    <Wrapper>
      <Banner />
      <ProductInfoBody>
        <ProductInfo>
          <h3>Product details</h3>
          <p>See product information</p>
          <Details>
            <img src={product.image} alt={product.name} />
            <DetailsBody>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="condition">{product.condition}</p>
              <h4>{formatCurrency(product.price)}</h4>
              <p className="location">
                <HiLocationMarker /> {product.location}
              </p>
              <div>
                {quantity === 0 ? (
                  <AddToCart onClick={() => increaseItemQuantity(product.id)}>
                    {" "}
                    + Add To Cart
                  </AddToCart>
                ) : (
                  <div className="allButtons">
                    <div className="quantityButtons">
                      <QuantityButton
                        onClick={() => decreaseItemQuantity(product.id)}>
                        -
                      </QuantityButton>
                      <p>
                        <span>{quantity}</span>in cart
                      </p>
                      <QuantityButton
                        onClick={() => increaseItemQuantity(product.id)}>
                        +
                      </QuantityButton>
                    </div>
                    <div className="actionButtons">
                      <RemoveButton onClick={() => removeFromCart(product.id)}>
                        Remove
                      </RemoveButton>
                      <BuyNow>Buy Now</BuyNow>
                    </div>
                  </div>
                )}
              </div>
            </DetailsBody>
          </Details>
        </ProductInfo>
      </ProductInfoBody>
    </Wrapper>
  );
};

export default ProductDetail;
