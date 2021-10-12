import React from 'react'

// Nextjs related
import type { NextPage } from 'next'

// Components
import { CustomHead } from '@components/CustomHead/CustomHead'

const Contato: NextPage = () => {
  return (
    <div className="page page--spaced">
      <CustomHead titlePrefix="Entre em contato" />

      <p>Contato</p>
    </div>
  )
}

export default Contato
