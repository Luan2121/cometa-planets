"use-client"

import { ReactNode } from "react";
import { ReactQueryProvider } from "./react-query-provider";

export function AppProviders({
  children
} : AppProvidersProps) {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}

export interface AppProvidersProps {
  children?: ReactNode
}