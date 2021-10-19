import { Menu } from './menus'

export interface Store {
  title: string
  slug: string
  phone: string
  whatsapp: string
  workdays: string[]
  categories: number[]
  menu?: Menu
}
