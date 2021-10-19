export interface Menu {
  footnote: string
  sections: MenuSection[]
}

export interface MenuSection {
  title: string
  priority: number
  items: MenuItem[]
}

export interface MenuItem {
  name: string
  description: string | null
  price: number
  discountPrice: number | null
  thumb: string | null
}
