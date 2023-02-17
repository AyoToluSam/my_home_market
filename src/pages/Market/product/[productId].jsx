import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { useRouter } from 'next/router';

const Product = ({product}) => {

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <ProductDetail product={product} />
  )
}

export default Product;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      productId: `${product.id}`
    }
  }));
 
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { productId } = context.params;

  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  const product = products[productId-1];

  return {
    props: {
      product
    },
  };
}