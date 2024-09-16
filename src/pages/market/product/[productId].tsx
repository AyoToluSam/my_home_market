import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { BlurBackground, Loading } from "../styles";

export type ProductProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  condition: string;
  price: string;
  location: string;
  category: string;
};

const Product = ({ product }: { product: ProductProps }) => {
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

  const paths = products.map((product: ProductProps) => ({
    params: {
      productId: product.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ productId: string }>) {
  const res = await fetch(
    `https://63f78f6ee8a73b486afaedef.mockapi.io/products/${params?.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
