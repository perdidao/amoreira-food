// Components
import { StoreMenuSection } from '@components/StoreMenuSection/StoreMenuSection'

// Types
import { Menu } from '@models/menus'

interface StoreMenuProps {
  menu?: Menu
}

const StoreMenu = (props: StoreMenuProps): JSX.Element => {
  const { menu } = props

  if (!menu) {
    return <p>Nenhum cardápio encontrado</p>
  }

  return (
    <section>
      <div>
        {menu.sections.map((section) => (
          <StoreMenuSection key={section.title} {...section} />
        ))}
      </div>
      <p>{menu.footnote}</p>
    </section>
  )
}

export { StoreMenu }
