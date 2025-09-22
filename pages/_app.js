import '../styles/globals.css'
import { CartProvider } from '../components/cartContext'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <>
        <Head>
          {/* Website ka title */}
          <title>Zahnaz Store</title>

          {/* Favicon (logo) */}
          <link rel="icon" href="/apple-touch-icon.png" />
          
          {/* Agar favicon.ico use karna ho to upar ke href ko "/favicon.ico" kar do */}
        </Head>
        <Component {...pageProps} />
      </>
    </CartProvider>
  )
}
