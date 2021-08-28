import { Category } from '@models/categories'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
): void {
  res.status(200).json([
    {
      id: 0,
      title: 'Pizza',
      totalItems: 5,
      slug: 'pizza',
    },
    {
      id: 1,
      title: 'Hamburguers',
      totalItems: 7,
      slug: 'hamburguer',
    },
    {
      id: 2,
      title: 'Marmitex',
      totalItems: 15,
      slug: 'marmitex',
    },
    {
      id: 3,
      title: 'Porções',
      totalItems: 9,
      slug: 'porcoes',
    },
    {
      id: 4,
      title: 'Brasileira',
      totalItems: 4,
      slug: 'comida-brasileira',
    },
    {
      id: 5,
      title: 'Sorvetes',
      totalItems: 2,
      slug: 'sorvetes',
    },
    {
      id: 6,
      title: 'Bebidas',
      totalItems: 6,
      slug: 'bebidas',
    },
  ])
}
