"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryClient = new QueryClient()

export function ReactQueryProvider({
  children
} : ReactQueryProviderProps) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      {children}
    </QueryClientProvider>
  )
}

export interface ReactQueryProviderProps {
  children?: ReactNode
}