import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <>
            <div className='text-slate-500 px-6 py-12 lg:p-12 sticky bottom-0 -z-10 bg-slate-100 dark:bg-slate-950'>
                Built with Typescript, NextJS, React and Tailwind CSS. Here is a <a className='text-sky-500' href="https://github.com/paulmerupu91/portfolio-site-v2" target="_blank">link</a> to the Github Repo.
            </div>
        </>
    )
}

export default Footer