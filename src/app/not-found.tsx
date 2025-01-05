import React from 'react'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

function page() {
    return (
        <div className="flex gap-8 md:grid auto-rows-min xl:gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28">
            <h2 className=' font-bold text-2xl'>Not Found</h2>
            <div className="flex">
                <Link href="/">Return Home</Link>&nbsp; or &nbsp;<BackButton/>
            </div>
        </div>
    )
}

export default page
