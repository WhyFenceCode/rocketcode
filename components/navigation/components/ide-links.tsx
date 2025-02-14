import Link from 'next/link'

import {
    Card
  } from "@/components/ui/card"

export function IdeLink() {
    return (
        <div className="w-full sm:flex justify-between align-center my-8">
            <div className="sm:w-[48%] w-full mb-6 sm:mb-0">
                <Link href="https://code.visualstudio.com/" rel="noopener noreferrer" target="_blank">
                    <Card className="w-full aspect-[5/3] flex items-center justify-center">
                        <h1 className="text-5xl sm:text-6xl text-foreground leading-loose">VS Code</h1>
                    </Card>
                </Link>
            </div>
            <div className="sm:w-[48%] w-full">
                <Link href="https://www.sublimetext.com/" rel="noopener noreferrer" target="_blank">
                    <Card className="w-full aspect-[5/3] flex items-center justify-center">
                        <h1 className="text-5xl sm:text-6xl text-foreground leading-loose">Sublime</h1>
                    </Card>
                </Link>
            </div>
        </div>
    )
}