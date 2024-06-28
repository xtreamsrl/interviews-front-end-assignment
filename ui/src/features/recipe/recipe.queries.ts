import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '../../config/axios'
import { flatObjToSerializableUrlParams } from '../../utils'
import { RecipeListRequest, RecipeListResponse } from './recipe.types'

const getRecipeList = async ({ _expand, ...params }: RecipeListRequest) => {
  const response = await axiosInstance.get<
    unknown,
    AxiosResponse<RecipeListResponse>
  >(
    `/recipes?${new URLSearchParams(flatObjToSerializableUrlParams(params)).toString()}&_expand=${_expand?.join('&_expand=')}`
  )
  return response.data
}

export const useRecipeList = ({
  _page = 0,
  _limit = 10,
  ...filter
}: RecipeListRequest) =>
  useQuery({
    queryKey: ['recipe-list', { _page, _limit, ...filter }],
    queryFn: () =>
      getRecipeList({
        _page,
        _limit,
        _expand: ['cuisine', 'difficulty', 'diet'],
        ...filter,
      }),
  })
