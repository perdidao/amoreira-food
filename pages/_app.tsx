import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import '@styles/globals.scss'
import type { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <div className="container">
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
)

export default MyApp
