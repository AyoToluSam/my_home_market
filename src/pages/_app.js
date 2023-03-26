import Layout from "@/Layout/Layout"
import {GlobalStyles} from "@/styles/globals"
import { CartProvider } from "@/contexts/CartContext"
import { ActiveProvider } from "@/contexts/ActiveContext"

export default function App({ Component, pageProps }) {

  return (
    <CartProvider>
      <ActiveProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ActiveProvider>
    </CartProvider>
  )
}

