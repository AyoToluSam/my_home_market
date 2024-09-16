import {
  Wrapper,
  ProductInfoBody,
  ProductInfo,
  Details,
  DetailsBody,
  AddToCart,
  QuantityButton,
  RemoveButton,
  BackButton,
} from "./ProductDetailStyles";
import { formatCurrency } from "@/utilities/formatCurrency";
import Banner from "../Banner/Banner";
import { HiLocationMarker } from "react-icons/hi";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemQuantity,
} from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductProps } from "@/pages/market/product/[productId]";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type ProductDetailProps = {
  product: ProductProps;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  if (!product) {
    return null;
  }

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const quantity = useSelector(selectItemQuantity(product.id));

  const handleCheckout = () => {
    dispatch(increaseItemQuantity(product.id));
    router.push("/checkout");
  };

  return (
    <Wrapper>
      <Banner />
      <ProductInfoBody>
        <ProductInfo>
          <BackButton onClick={router.back}>
            <MdKeyboardArrowLeft size={18} /> Back
          </BackButton>
          <h3>Product details</h3>
          <p>See product information</p>
          {isHydrated && (
            <Details>
              <img src={product.image} alt={product.name} />
              <DetailsBody>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p className="condition">{product.condition}</p>
                <h4>{formatCurrency(Number(product.price))}</h4>
                <p className="location">
                  <HiLocationMarker /> {product.location}
                </p>
                <button onClick={handleCheckout} className="checkout">
                  Proceed to checkout
                </button>
                {quantity === 0 ? (
                  <AddToCart
                    onClick={() => dispatch(increaseItemQuantity(product.id))}
                  >
                    <BsCart /> Add To Cart
                  </AddToCart>
                ) : (
                  <div className="allButtons">
                    <div className="quantityButtons">
                      <QuantityButton
                        onClick={() =>
                          dispatch(decreaseItemQuantity(product.id))
                        }
                      >
                        -
                      </QuantityButton>
                      <p>
                        <span>{quantity}</span>in cart
                      </p>
                      <QuantityButton
                        onClick={() =>
                          dispatch(increaseItemQuantity(product.id))
                        }
                      >
                        +
                      </QuantityButton>
                    </div>
                    <RemoveButton
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </RemoveButton>
                  </div>
                )}
              </DetailsBody>
            </Details>
          )}
        </ProductInfo>
      </ProductInfoBody>
    </Wrapper>
  );
};

export default ProductDetail;
