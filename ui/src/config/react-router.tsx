import { Navigate, createBrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import { RecipeList } from '../features/recipe/RecipeList'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="list" replace />,
  },
  {
    path: 'list',
    element: (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <RecipeList />
      </QueryParamProvider>
    ),
  },
])
