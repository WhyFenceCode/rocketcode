import Link from 'next/link'
import { Button } from "@/components/ui/button"

import {
  app_query_names,
  app_query_slogans,
} from "@/components/navigation/data/naming.js"
import { app_query_urls } from "@/components/navigation/data/urls.js"

export default function Home() {
  return (
    <div className="w-dvw	h-dvh justify-start items-center flex">
      <p>Hello World</p>
    </div>
  );
}
