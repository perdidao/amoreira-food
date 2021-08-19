import Axios from 'axios'
import { useEffect, useState } from 'react'
import { FiltersData } from '@models/filters'

const Filters = (): JSX.Element => {
  const [filters, setFilters] = useState<FiltersData>()

  const _fetchFilters = (): void => {
    Axios.get('/api/filters').then((response) => {
      setFilters(response.data)
    })
  }

  useEffect(() => {
    if (filters) return
    _fetchFilters()
  }, [filters])

  const _renderCategoriesSelect = (): JSX.Element => {
    return (
      <select>
        {filters?.categories.map((category) => (
          <option key={filters?.categories.indexOf(category)}>
            {category}
          </option>
        ))}
      </select>
    )
  }

  return _renderCategoriesSelect()
}

export { Filters }
