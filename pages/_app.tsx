// Nextjs related
import type { AppProps } from 'next/app'

// Components
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'

// Styles
import '@styles/globals.scss'

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
