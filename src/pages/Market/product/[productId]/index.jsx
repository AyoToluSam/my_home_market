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

export async function getStaticProps(context) {
  const { id } = context.query;

  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  const product = products[id-1];

  return {
    props: {
      product,
    },
  };
}