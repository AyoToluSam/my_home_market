import ProductDetail from '@/components/ProductDetail/ProductDetail'

const Product = ({product}) => {

  return (
    <ProductDetail product={product} />
  )
}

export default Product;

export async function getStaticPaths() {
  const res = await fetch("https://63f78f6ee8a73b486afaedef.mockapi.io/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: {
      productId: `${product.id}`
    }
  }));
 
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { productId } = context.params;

  const res = await fetch(`https://63f78f6ee8a73b486afaedef.mockapi.io/products/${productId}`);
  const product = await res.json();

  return {
    props: {
      product
    },
  };
}