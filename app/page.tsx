import Link from 'next/link'
import { Button } from "@/components/ui/button"

import { LogoBlock } from "@/components/icons/logo"
import { ThemeIcon } from "@/components/navigation/components/theme-switch"

import {
  app_query_names,
  app_query_slogans,
} from "@/components/navigation/data/naming.js"
import { app_query_urls } from "@/components/navigation/data/urls.js"
import { ChevronsRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-background bg-[radial-gradient(circle_farthest-corner_at_0%_0%,hsl(var(--primary-glow))_0%,#00000000_50%,#00000000_100%),_radial-gradient(circle_farthest-corner_at_100%_100%,hsl(var(--secondary-glow))_0%,hsl(var(--background))_50%,hsl(var(--background))_100%)] bg-cover" />
      <header className="p-6">
        <div className="w-12 h-12 flex items-center justify-center">
          {/* Logo placeholder */}
          <LogoBlock />
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 max-w-6xl text-foreground leading-loose">{app_query_slogans.landingMainText} with {app_query_names.app}</h1>
        <p className="text-xl sm:text-3xl mb-8 max-w-3xl text-muted-foreground">{app_query_slogans.landingSubText}</p>
        <Button size="lg" asChild>
          <Link href={app_query_urls.app}> <ChevronsRight /> Get Started </Link>
        </Button>
      </main>

      <footer className="p-6">
        <ThemeIcon />
      </footer>
    </div>
  );
}