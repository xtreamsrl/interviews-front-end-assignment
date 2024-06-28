import { NumberParam, StringParam, useQueryParams } from 'use-query-params'

export const useRecipeListPaginationAndFilters = () => {
  const [query, setQuery] = useQueryParams({
    page: NumberParam,
    difficultyId: StringParam,
    cuisineId: StringParam,
    dietId: StringParam,
    q: StringParam,
  })

  const filters = {
    page: query.page ?? 1,
    difficultyId: query.difficultyId ?? '',
    cuisineId: query.cuisineId ?? '',
    dietId: query.dietId ?? '',
    q: query.q ?? '',
  }

  const incrementPage = () =>
    setQuery({
      page: filters.page + 1,
    })

  const decrementPage = () =>
    setQuery({
      page: filters.page - 1,
    })

  const clearFilters = () => {
    setQuery({
      page: query.page ?? 1,
      cuisineId: undefined,
      dietId: undefined,
      difficultyId: undefined,
      q: undefined,
    })
  }

  const setFilter = (property: keyof typeof query, value: string) => {
    if (value === '' || value === null) {
      setQuery({ [property]: undefined })
      return
    }

    setQuery({
      [property]: value,
    })
  }

  return { filters, clearFilters, setFilter, incrementPage, decrementPage }
}
