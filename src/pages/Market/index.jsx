import React from 'react'
import ProductList from '@/components/ProductList/ProductList';

const Market = ({products}) => {
  return (
    <ProductList products={products} />
  )
}

export default Market

export async function getStaticProps() {

  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }
}