import { Button, ButtonProps } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { RotateCw } from "lucide-react";

export function LoadMoreButton({
  isLoading,
  children,
  ...props
} : LoadMoreButtonProps) {
  return (
    <Button
      {...props}
    >
      {isLoading
        ? <Spinner />
        : <RotateCw />
      }
      {children}
    </Button>
  )
}

export interface LoadMoreButtonProps extends ButtonProps {
  isLoading?: boolean
}