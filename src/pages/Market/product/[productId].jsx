import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { useRouter } from "next/router";
import { BlurBackground, Loading } from "../../../styles/productStyles";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <BlurBackground>
        <Loading>
          <img src="/Spinner.gif" alt="Loading" />
        </Loading>
      </BlurBackground>
    );
  }

  return <ProductDetail product={product} />;
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://63f78f6ee8a73b486afaedef.mockapi.io/products"
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      productId: product.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { productId } = context.params;

  const res = await fetch(
    `https://63f78f6ee8a73b486afaedef.mockapi.io/products/${productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
