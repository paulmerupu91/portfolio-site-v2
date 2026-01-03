// app/ga-tracker.jsx (or any filename)
// "use client" ensures this code runs in the browser
"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export default function GATracker({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Ensure gtag exists and GA_MEASUREMENT_ID is defined
    if (!window.gtag || !GA_MEASUREMENT_ID) return

    // Construct the current path (include searchParams if needed)
    const pagePath = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname

    // Track the pageview
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
    })

    console.log('Tracked pageview:', pagePath);

  }, [pathname, searchParams])

  return children
}