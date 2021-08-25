import { Store } from '@models/stores'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store[]>
): void {
  res.status(200).json([
    {
      title: 'KM Burguer',
      slug: 'km-burguer',
      logo: '/icons/categories/pizza.png',
      phone: '(43) 3265-2560',
      whatsapp: '(43) 99137-1298',
      workdays: ['segunda', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'],
      categories: [1],
      menuId: 0,
    },
  ])
}
