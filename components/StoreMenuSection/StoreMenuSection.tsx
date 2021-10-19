// Types
import { MenuItem, MenuSection } from '@models/menus'

interface MenuItemProps {
  item: MenuItem
}

const StoreMenuSection = (props: MenuSection): JSX.Element => {
  const { title, items } = props

  const StoreMenuItem = (props: MenuItemProps): JSX.Element => {
    const { name, description, price, discountPrice } = props.item

    return (
      <div>
        <div>
          {name}
          {description}
        </div>
        <div>
          {price} {discountPrice}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => (
        <StoreMenuItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export { StoreMenuSection }
