'use client'
import React, { useEffect } from 'react'

type Props = {
    svgSize: number
}

function toggleThemeLS(){
    console.log( 'setting theme' );
    if( localStorage.getItem( 'theme' ) === 'dark' ){
        localStorage.setItem( 'theme', 'light' );
        document.documentElement.classList.remove('dark')
    }else{
        localStorage.setItem( 'theme', 'dark' );
        document.documentElement.classList.add('dark')
    }
}

function ToggleTheme({ svgSize = 21 }: Props) {

    return (
        <div className='toggle-theme relative text-lg mr-1 dark:text-sky-500
                hover:text-sky-500 dark:hover:text-sky-300 cursor-pointer'

        >
            <div className='absolute bg-sky-200 top-[50%] left-[50%]
                    dark:bg-sky-500 opacity-25 p-4 -z-10 rounded-full blur-md'
                style={{transform: 'translate( -50%, -50%)'}}
            ></div>
            <svg
                onClick={ () => toggleThemeLS() }
                xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16"
            >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
        </div>
    )
}

export default ToggleTheme