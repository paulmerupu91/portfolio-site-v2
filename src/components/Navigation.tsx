import React, { ReactElement } from 'react'
import ToggleTheme from './ToggleTheme';

type Props = {}

function Navigation({ }: Props) {

    const svgSize = 21;

    return (
        <nav className='fixed top-0 left-0 right-0 text-sky-700 w-full z-10
            bg-gradient-to-b from-white dark:from-slate-900 to-transparent'
        >
            <div className='xl:container flex mx-auto pt-6 md:pt-10 pb-20 px-6
                lg:px-12 gap-8 items-center justify-end'>
                <ToggleTheme svgSize={svgSize}></ToggleTheme>
                <Link href='mailto:paulmerupu91@gmail.com'

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={svgSize + 5} height={svgSize + 5} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                </Link>
                <Link href='https://www.linkedin.com/in/paulmerupu'

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation

type LinkProps = {
    target?: string,
    href: string,
    children: ReactElement | string | number
}

function Link({ target = "_blank", href, children }: LinkProps) {
    return (
        <a className='text-lg hover:text-sky-500'
            href={href}
            target={target}
        >
            {children}
        </a>
    )
}