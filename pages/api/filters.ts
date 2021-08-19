import { FiltersData } from '@models/filters'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FiltersData>
): void {
  res.status(200).json({
    categories: [
      'Pizza',
      'Lanches',
      'Marmitex',
      'Porções',
      'Pratos quentes',
      'Sorvetes',
    ],
  })
}
