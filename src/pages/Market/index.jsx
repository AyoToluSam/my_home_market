import React from 'react'
import ProductList from '@/components/ProductList/ProductList';

const Market = ({data}) => {
  return (
    <ProductList products={data} />
  )
}

export default Market;

// export async function getStaticProps() {

//   const res = await fetch("https://63f78f6ee8a73b486afaedef.mockapi.io/products");
//   const data = await res.json();

//   return {
//     props: {
//       products: data
//     }
//   }
// }