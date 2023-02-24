import Layout from "@/components/Layout/Layout"
import {GlobalStyles} from "@/styles/globals"
import { CartProvider } from "@/contexts/CartContext"
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {

  
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://63f78f6ee8a73b486afaedef.mockapi.io/products");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <CartProvider>
      <GlobalStyles />
      <Layout data={data} >
        <Component {...pageProps} data={data} />
      </Layout>
    </CartProvider>
  )
}

