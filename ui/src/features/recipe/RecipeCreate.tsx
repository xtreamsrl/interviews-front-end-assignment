import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import { Input } from '../../components/input'
import {
  CuisineSelector,
  DietSelector,
  DifficultySelectableBadges,
} from './components/Selectors'
import { useRecipeCreateMutation } from './recipe.queries'

const recipeCreateSchema = z.object({
  name: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.string(),
  cuisineId: z.string(),
  dietId: z.string(),
  difficultyId: z.string(),
})

type CreateFormValues = z.infer<typeof recipeCreateSchema>

export const RecipeCreate = () => {
  const navigate = useNavigate()
  const form = useForm<CreateFormValues>({
    defaultValues: {
      name: '',
      instructions: '',
      cuisineId: '',
      difficultyId: '',
      dietId: '',
      ingredients: [],
    },
    resolver: zodResolver(recipeCreateSchema),
  })

  const mutation = useRecipeCreateMutation()

  const onSubmit = async (data: CreateFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success('Recipe created successfully')
        navigate('/list')
      },
      onError: () => {
        toast.error('Something went wrong')
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input id="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Input id="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cuisineId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cuisine</FormLabel>
              <FormControl>
                <CuisineSelector
                  value={field.value}
                  setValue={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="difficultyId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Difficulty</FormLabel>
              <FormControl>
                <DifficultySelectableBadges
                  value={field.value}
                  setValue={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dietId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diet</FormLabel>
              <FormControl>
                <DietSelector value={field.value} setValue={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
