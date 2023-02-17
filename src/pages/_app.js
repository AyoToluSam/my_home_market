import Layout from "@/components/Layout/Layout"
import {GlobalStyles} from "@/styles/globals"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
