import '../styles/globals.css'
import { CartProvider } from '../components/cartContext'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <>
        <Head>
          <title>Zahnaz Store</title>
          {/* Make sure your file path is correct */}
          <link rel="icon" type="image/png" href="/images/logo.png" />
        </Head>

        <Component {...pageProps} />
      </>
    </CartProvider>
  )
}
