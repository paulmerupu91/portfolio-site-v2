import React from 'react'
import Link from 'next/link'
import BackButton from '@/components/BackButton'

function page() {
    return (
        <div className="flex flex-col flex-grow justify-center text-center gap-8 xl:gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden">
            <h2 className=' font-bold text-2xl'>Not Found</h2>
            <p className="">
                <Link href="/">Return Home</Link>&nbsp; or &nbsp;<BackButton />
            </p>
        </div>
    )
}

export default page
