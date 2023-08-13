import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <>
            <div className='text-slate-500'>
                Built with Typescript, NextJS, React and Tailwind CSS. Here is a <a className='text-sky-500' href="https://github.com/paulmerupu91/portfolio-site-v2" target="_blank">link</a> to the Github Repo.
            </div>
        </>
    )
}

export default Footer