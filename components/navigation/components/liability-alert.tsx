import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function BetaAlert() {
  return (
    <Alert variant="destructive" className="mb-8">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This tutorial is still being developed, and some statements may be incorrect. Things may change in the future.
      </AlertDescription>
    </Alert>
  )
}

export function ProductionAlert() {
  return (
    <Alert className="mb-8">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Sometimes we make mistakes so some statements may be incorrect and things may change in the future.
      </AlertDescription>
    </Alert>
  )
}