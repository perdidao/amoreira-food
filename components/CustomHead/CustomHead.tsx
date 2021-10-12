import React from 'react'

// Nextjs related
import Head from 'next/head'

// Types
import { CustomHeadProps as Props } from './types'

const CustomHead = (props: Props): JSX.Element => {
  const { titlePrefix } = props

  let title = 'Amoreira Food – Encontre tudo o que tem pra comer aqui'

  if (titlePrefix !== undefined) {
    title = `${titlePrefix} – ${title}`
  }

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Navegue pelos cardápios, saiba se o bar, lanchonete, petiscaria, pizzaria ou restaurante está atendendo e entre em contato"
      />
    </Head>
  )
}

export { CustomHead }
