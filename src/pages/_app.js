import Layout from "@/components/Layout/Layout"
import {GlobalStyles} from "@/styles/globals"
import { CartProvider } from "@/contexts/CartContext"

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

