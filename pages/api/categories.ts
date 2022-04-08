import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '@models/categories'
import db from '@datasource/db'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
): void {
  db.query(
    'SELECT * from categories',
    (error: unknown, results: Category[]) => {
      if (error) throw error

      res.status(200).json(results)
    }
  )
}
