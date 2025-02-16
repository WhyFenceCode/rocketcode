import { CornerUpRight, ChevronsRight } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function RecomendedArticle(
    { 
        children,
        href 
    }: { 
        children: React.ReactNode
        href: string
    }
) {
  return (
    <Alert className="my-8">
      <CornerUpRight className="h-4 w-4" />
      <AlertTitle>Next Up</AlertTitle>
      <AlertDescription>
      {children}
      <br/>
        <Button size="lg" asChild className="my-8">
            <Link href={href}><ChevronsRight />Go To Recomendation</Link>
        </Button>
      </AlertDescription>
    </Alert>
  )
}