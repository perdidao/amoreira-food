import Link from 'next/link'
import styles from './Header.module.scss'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

const Header = (): JSX.Element => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1>
          <Image
            src="/assets/images/logo.svg"
            alt="Amoreira Foods"
            layout="intrinsic"
            width={150}
            height={50}
          />
        </h1>

        <nav className={styles.nav}>
          <Link href="/">
            <a
              title="Página inicial"
              className={
                router.pathname === '/' ? styles.nav__active : styles.nav__link
              }
            >
              Início
            </a>
          </Link>
          <Link href="/contato">
            <a
              title="Entre em contato conosco"
              className={
                router.pathname === '/contato'
                  ? styles.nav__active
                  : styles.nav__link
              }
            >
              Contato
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export { Header }
