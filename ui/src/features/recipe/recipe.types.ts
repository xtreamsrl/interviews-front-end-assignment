export type Recipe = {
  id: string
  name: string
  ingredients: string[]
  instructions: string
  cuisineId: string
  dietId: string
  difficultyId: string
  image: string
  cuisine: {
    id: string
    name: string
  }
  diet: {
    id: string
    name: string
  }
  difficulty: {
    id: string
    name: string
  }
}

export type RecipeListResponse = Recipe[]

export type RecipeListRequest = {
  _page?: number
  _limit?: number
  q?: string
  cuisineId?: string
  dietId?: string
  difficultyId?: string
  _expand?: string[]
}

export type DifficultyListResponse = Difficulty[]

export type Difficulty = {
  id: string
  name: string
}
