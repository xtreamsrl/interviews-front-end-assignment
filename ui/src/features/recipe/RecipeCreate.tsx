import { Button } from '@/components/button'
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
import { FileUploader } from '../../components/file-uploader'
import { Input } from '../../components/input'
import { Textarea } from '../../components/textarea'
import {
  CuisineSelector,
  DietSelector,
  DifficultySelectableBadges,
} from './components/Selectors'
import { useRecipeCreateMutation } from './recipe.queries'

const recipeCreateSchema = z.object({
  name: z.string().min(1),
  ingredients: z.string().min(1),
  instructions: z.string().min(1),
  cuisineId: z.string().min(1),
  dietId: z.string().min(1),
  difficultyId: z.string().min(1),
  image: z.instanceof(File).optional(),
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
      ingredients: '',
    },
    resolver: zodResolver(recipeCreateSchema),
  })

  const mutation = useRecipeCreateMutation()

  const onSubmit = async (data: CreateFormValues) => {
    const dataToSubmit = {
      ...data,
      ingredients: data.ingredients.split(',').map((i) => i.trim()),
    }

    const formData = new FormData()
    Object.entries(dataToSubmit).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => formData.append(key, v))
      } else {
        formData.append(key, value)
      }
    })

    mutation.mutate(formData, {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid size-full grid-cols-3 gap-5 overflow-scroll bg-stone-100 p-6"
      >
        <div className="col-span-2 flex flex-col gap-5">
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
                  <Textarea id="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-between gap-2">
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
              name="dietId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diet</FormLabel>
                  <FormControl>
                    <DietSelector
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
          </div>
          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Textarea id="ingredients" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-xs">Add ingredients separated by a comma</div>
          </div>
        </div>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <FileUploader onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-full flex justify-end gap-2">
          <Button type="submit" className="w-48">
            Create
          </Button>
        </div>
      </form>
    </Form>
  )
}
