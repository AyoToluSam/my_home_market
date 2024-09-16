import {
  ReviewList,
  ReviewItem,
  ReviewItemName,
  ReviewItemPrice,
  LeftSide,
  ReviewImage,
  Empty,
} from "./ReviewStyles";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartQuantity,
} from "@/redux/features/cartSlice";
import { ProductProps } from "@/pages/market/product/[productId]";

const Review = () => {
  const { data = [] } = useGetProductsQuery({});

  const cartItems = useSelector(selectCartItems);
  const cartQuantity = useSelector(selectCartQuantity);

  return cartQuantity ? (
    <ReviewList>
      {cartItems.map((item) => {
        const cartItem = data.find(
          (dataItem: ProductProps) => dataItem.id === item.id
        );
        if (!cartItem) {
          return null;
        }
        const cartItemPrice = formatCurrency(cartItem.price * item.quantity);
        return (
          <ReviewItem key={item.id}>
            <LeftSide>
              <ReviewImage src={cartItem.image} alt={cartItem.name} />
              <div className="name-quantity-group">
                <ReviewItemName>{cartItem.name}</ReviewItemName>
                {item.quantity > 1 && <p>x{item.quantity}</p>}
              </div>
            </LeftSide>
            <ReviewItemPrice>{cartItemPrice}</ReviewItemPrice>
          </ReviewItem>
        );
      })}
    </ReviewList>
  ) : (
    <Empty>
      <img src={"./empty-cart.png"} alt="empty cart" />
      <p>No items in your cart!</p>
    </Empty>
  );
};

export default Review;
