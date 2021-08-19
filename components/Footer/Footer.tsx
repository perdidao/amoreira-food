import styles from './Footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className="Footer__copyright">Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export { Footer }
