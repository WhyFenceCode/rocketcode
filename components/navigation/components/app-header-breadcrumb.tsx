'use client'

import { usePathname } from 'next/navigation'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function HeaderBreadcrumb() {
    const pathnameItems = usePathname().slice(1).split("/")

    return (
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">
                rocketcode
                </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnameItems.map((item) => (
                <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{item}</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
}