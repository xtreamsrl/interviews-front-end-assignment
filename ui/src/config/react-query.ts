import { QueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 10000,
    },
    mutations: {
      retry: false,
      onError: (error) => {
        if (!isAxiosError(error)) return

        toast.error("Unknown API error")
      },
    },
  },
})
