import { IoMdClose } from "react-icons/io";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import {
  CartContainer,
  CloseContainer,
  CloseButton,
  CartList,
  CartItem,
  LeftDiv,
  RightDiv,
  CartImage,
  CartItemName,
  CartItemPrice,
  Empty,
  TotalContainer,
  CartTotal,
  RemoveAll,
  CheckoutButton,
  QuantityButtons,
} from "./CartStyles";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useRouter } from "next/router";
import {
  CartItem as CartItemProps,
  closeCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeAll,
  removeFromCart,
  selectCartItems,
  selectCartQuantity,
} from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import { BiMinus, BiPlus } from "react-icons/bi";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data = [] } = useGetProductsQuery({});

  const cartItems = useSelector(selectCartItems);
  const cartQuantity = useSelector(selectCartQuantity);

  const handleCheckout = () => {
    dispatch(closeCart());
    router.push("/checkout");
  };

  const totalCartPrice = cartQuantity
    ? formatCurrency(
        cartItems.reduce((total, cartItem) => {
          const item = data.find(
            (item: CartItemProps) => item.id === cartItem.id
          );
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)
      )
    : "$0.00";

  return (
    <CartContainer>
      <CloseContainer>
        <h4>
          Your Cart <span>{`( ${cartQuantity} items )`}</span>
        </h4>
        <CloseButton>
          <IoMdClose className="close" onClick={() => dispatch(closeCart())} />
        </CloseButton>
      </CloseContainer>
      {cartQuantity ? (
        <CartList>
          {cartItems.map((item) => {
            const cartItem = data.find(
              (dataItem: CartItemProps) => dataItem.id === item.id
            );
            const cartItemPrice = formatCurrency(
              cartItem.price * item.quantity
            );
            return (
              <CartItem key={item.id}>
                <LeftDiv>
                  <CartImage src={cartItem.image} alt={cartItem.name} />
                  <div className="name-price-group">
                    <CartItemName>{cartItem.name}</CartItemName>
                    <QuantityButtons>
                      <button
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        <BiMinus />
                      </button>
                      <h5>{item.quantity}</h5>
                      <button
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        <BiPlus />
                      </button>
                    </QuantityButtons>
                    <CartItemPrice>{cartItemPrice}</CartItemPrice>
                  </div>
                </LeftDiv>
                <RightDiv>
                  <MdDeleteOutline
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </RightDiv>
              </CartItem>
            );
          })}
        </CartList>
      ) : (
        <Empty>
          <img src={"./empty-cart.png"} alt="empty cart" />
          <p>No items in your cart!</p>
        </Empty>
      )}
      <TotalContainer>
        <CartTotal>
          <h3>
            <span>Total amount: </span>
            {totalCartPrice}
          </h3>
          {cartQuantity > 0 && (
            <RemoveAll onClick={() => dispatch(removeAll())}>
              Remove all
            </RemoveAll>
          )}
        </CartTotal>

        <CheckoutButton onClick={handleCheckout} disabled={!cartQuantity}>
          Proceed to checkout
        </CheckoutButton>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;
