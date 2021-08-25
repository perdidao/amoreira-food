import { Category } from '@models/categories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
): void {
  res.status(200).json([
    {
      icon: '/icons/categories/pizza.png',
      title: 'Pizza',
      totalItems: 5,
      slug: 'pizza',
    },
    {
      icon: '/icons/categories/hamburguer.png',
      title: 'Hamburguers',
      totalItems: 7,
      slug: 'hamburguers',
    },
    {
      icon: '/icons/categories/marmitex.png',
      title: 'Marmitex',
      totalItems: 15,
      slug: 'marmitex',
    },
    {
      icon: '/icons/categories/porcoes.png',
      title: 'Porções',
      totalItems: 9,
      slug: 'porcoes',
    },
    {
      icon: '/icons/categories/comida-brasileira.png',
      title: 'Brasileira',
      totalItems: 4,
      slug: 'comida-brasileira',
    },
    {
      icon: '/icons/categories/sorvetes.png',
      title: 'Sorvetes',
      totalItems: 2,
      slug: 'sorvetes',
    },
    {
      icon: '/icons/categories/bebidas.png',
      title: 'Bebidas',
      totalItems: 6,
      slug: 'bebidas',
    },
  ])
}
