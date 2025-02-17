import { Card } from "@/components/ui/card"

import Image from 'next/image'

export function ImageCard(
    {
        href 
    }: { 
        href: string
    }
) {
  return (
    <div className="w-full flex justify-center">
        <Card className="w-3/4 aspect-video my-12 overflow-hidden">
            <Image
                src={href}
                width={1600}
                height={900}
                alt="Tutorial Image"
                className="w-full h-full"
            />
        </Card>
    </div>
  )
}