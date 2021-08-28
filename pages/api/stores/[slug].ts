import { Store } from '@models/stores'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store>
): void {
  const { slug } = req.query

  const data = [
    {
      title: 'KM Burguer',
      slug: 'km-burguer',
      phone: '(43) 99925-4045',
      whatsapp: '(43) 99904-5642',
      workdays: [
        'Monday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      categories: [1],
      menuId: 0,
    },
  ]

  const filtered = data.filter((item) => item.slug === slug)
  const response = filtered[0]

  res.status(200).json(response)
}
