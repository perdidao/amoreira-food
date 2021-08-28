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
  ])
}
