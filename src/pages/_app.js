import Layout from "@/Layout/Layout"
import {GlobalStyles} from "@/styles/globals"
import { CartProvider } from "@/contexts/CartContext"
import { ActiveProvider } from "@/contexts/ActiveContext"
import Script from "next/script"

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />
      <CartProvider>
        <ActiveProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </ActiveProvider>
      </CartProvider>
    </>
  )
}

