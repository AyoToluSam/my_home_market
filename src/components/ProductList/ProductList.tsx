import {
  ProductListContainer,
  Products,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToCart,
  QuantityButton,
  RemoveButton,
} from "./ProductListStyles";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatCurrency } from "@/utilities/formatCurrency";
import { MdArrowRight } from "react-icons/md";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectCartItems,
} from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "@/redux/api/productsApi";
import { ProductProps } from "@/pages/market/product/[productId]";

const ProductList = ({ search = "" }) => {
  const router = useRouter();
  const { category } = router.query;

  const dispatch = useDispatch();

  const { data = [] } = useGetProductsQuery({});

  const filteredProducts = data
    .filter((d: ProductProps) => !category || d.category === category)
    .filter(
      (d: ProductProps) =>
        !search || d.name.toLowerCase().includes(search.toLowerCase())
    );

  const cart = useSelector(selectCartItems);

  const getItemQuantity = (id: string) =>
    cart?.find((item) => item.id === id)?.quantity || 0;

  return (
    <ProductListContainer>
      <h5>Featured Products</h5>
      <Products>
        {filteredProducts.map(({ id, name, image, price }: ProductProps) => {
          const quantity = getItemQuantity(id);
          return (
            <ProductCard key={id}>
              <ProductImage
                src={image}
                alt={name}
                onClick={() => router.push(`/market/product/${id}`)}
              />
              <ProductName>{name}</ProductName>
              <ProductPrice>{formatCurrency(price)}</ProductPrice>
              <Link href={`/market/product/${id}`}>
                <MdArrowRight /> View Details
              </Link>
              {quantity === 0 ? (
                <AddToCart onClick={() => dispatch(increaseItemQuantity(id))}>
                  {" "}
                  + Add to cart
                </AddToCart>
              ) : (
                <div className="allButtons">
                  <div className="quantityButtons">
                    <QuantityButton
                      onClick={() => dispatch(decreaseItemQuantity(id))}
                    >
                      -
                    </QuantityButton>
                    <p>
                      <span>{quantity}</span>in cart
                    </p>
                    <QuantityButton
                      onClick={() => dispatch(increaseItemQuantity(id))}
                    >
                      +
                    </QuantityButton>
                  </div>
                  <RemoveButton onClick={() => dispatch(removeFromCart(id))}>
                    Remove
                  </RemoveButton>
                </div>
              )}
            </ProductCard>
          );
        })}
      </Products>
    </ProductListContainer>
  );
};

export default ProductList;
