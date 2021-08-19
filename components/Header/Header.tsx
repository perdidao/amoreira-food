import Link from 'next/link'
import styles from './Header.module.scss'
import { useRouter } from 'next/dist/client/router'

const Header = (): JSX.Element => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1>Amoreira Foods</h1>

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
