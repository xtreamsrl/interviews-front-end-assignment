import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function flatObjToSerializableUrlParams(
  obj: Record<string, unknown>
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const key in obj) {
    const value = obj[key]
    result[key] = typeof value === 'string' ? value : String(value)
  }

  return result
}
