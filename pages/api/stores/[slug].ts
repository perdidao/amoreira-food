import db from '@datasource/db'
import { Store } from '@models/stores'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store>
): void {
  const { slug } = req.query

  db.query(
    `SELECT * FROM STORES as st WHERE st.slug = '${slug}'`,
    (error: unknown, results: Store[]) => {
      if (error) {
        res.status(500)
      }

      res.status(200).json(results[0])
    }
  )
}
