import Image from 'next/image'
import styles from './HeroSection.module.scss'

const HeroSection = (): JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_info}>
        <h2 className={styles.hero_info__title}>
          Encontre <strong>tudo</strong> o que tem pra comer aqui
        </h2>
        <p className={styles.hero_info__text}>
          Navegue pelos cardápios, saiba se o bar, lanchonete, petiscaria,
          pizzaria ou restaurante está atendendo e entre em contato
        </p>
      </div>
      <figure className="hero-illustration">
        <Image
          src="/assets/images/hero-illustration.svg"
          alt="Imagem que ilustra uma mulher indecisa sobre o que comer, mostrando várias opções. Entre elas, um hamburguer, salada, sucos, peixe, donut, sanduíche e maçã."
          layout="intrinsic"
          width="540"
          height="540"
        />
      </figure>
    </section>
  )
}

export { HeroSection }
