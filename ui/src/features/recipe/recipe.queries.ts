import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { axiosInstance } from '../../config/axios'
import { queryClient } from '../../config/react-query'
import { flatObjToSerializableUrlParams } from '../../utils'
import {
  CuisineListResponse,
  DietListResponse,
  DifficultyListResponse,
  RecipeListRequest,
  RecipeListResponse,
} from './recipe.types'

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

export const getDifficultyList = async () => {
  const response = await axiosInstance.get<
    unknown,
    AxiosResponse<DifficultyListResponse>
  >(`/difficulties`)
  return response.data
}

export const useDifficultyList = () =>
  useQuery({
    queryKey: ['difficulty-list'],
    queryFn: () => getDifficultyList(),
  })

export const getCuisineList = async () => {
  const response = await axiosInstance.get<
    unknown,
    AxiosResponse<CuisineListResponse>
  >(`/cuisines`)
  return response.data
}

export const useCuisineList = () =>
  useQuery({
    queryKey: ['cuisine-list'],
    queryFn: () => getCuisineList(),
  })

export const getDietList = async () => {
  const response = await axiosInstance.get<
    unknown,
    AxiosResponse<DietListResponse>
  >(`/diets`)
  return response.data
}

export const useDietList = () =>
  useQuery({
    queryKey: ['diet-list'],
    queryFn: () => getDietList(),
  })

const createRecipe = async (data: FormData) => {
  const response = await axiosInstance.post('/recipes', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const useRecipeCreateMutation = () => {
  return useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['recipe-list'],
      })
    },
  })
}
