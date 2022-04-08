import db from '@datasource/db'
import { Store } from '@models/stores'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store[]>
): void {
  db.query('SELECT * from stores', (error: unknown, results: Store[]) => {
    if (error) throw error

    res.status(200).json(results)
  })
}
