import { Menu } from '@models/menus'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[]>
): void {
  res.status(200).json([
    {
      id: 0,
      footnote: 'Todos os burgers acompanham batata frita e molho especial',
      sections: [
        {
          title: 'Lanches',
          priority: 1,
          items: [
            {
              name: 'KM Simples',
              description:
                'Hamburguer artesanal, queijo, alface, tomate e cebola caramelizada',
              price: 12.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Bacon',
              description:
                'Hamburguer artesanal, bacon, queijo, alface, tomate e cebola caramelizada',
              price: 14.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Cheddar',
              description:
                'Hamburguer artesanal, bacon, cheddar cremoso, queijo, alface, tomate e cebola caramelizada',
              price: 15.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Duplo',
              description:
                'Dois hamburgueres artesanal, queijo, alface, tomate e cebola caramelizada',
              price: 16.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Duplo Bacon',
              description:
                'Dois hamburgueres artesanal, bacon, queijo, alface, tomate e cebola caramelizada',
              price: 18.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Duplo Cheddar',
              description:
                'Dois hamburgueres artesanal, bacon, cheddar cremoso, queijo, alface, tomate e cebola caramelizada',
              price: 20.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'KM Especial',
              description:
                'Hamburguer artesanal, queijo, calabresa, salsicha, ovo, frango desfiado, alface, tomate e cebola caramelizada',
              price: 20.0,
              discountPrice: null,
              thumb: null,
            },
          ],
        },
        {
          title: 'Adicionais',
          priority: 2,
          items: [
            {
              name: 'Hamburguer',
              description: null,
              price: 4.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Bacon',
              description: null,
              price: 4.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Salsicha',
              description: null,
              price: 3.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Frango desfiado',
              description: null,
              price: 3.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Calabresa',
              description: null,
              price: 3.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Cheddar',
              description: null,
              price: 3.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Queijo',
              description: null,
              price: 3.0,
              discountPrice: null,
              thumb: null,
            },
            {
              name: 'Ovo',
              description: null,
              price: 2.0,
              discountPrice: null,
              thumb: null,
            },
          ],
        },
      ],
    },
  ])
}
