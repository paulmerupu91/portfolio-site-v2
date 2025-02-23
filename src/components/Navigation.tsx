"use client"

import React, { ReactElement, useEffect, useState } from 'react'
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useSpring, animated } from '@react-spring/web'
import NavLogo from './NavLogo';

const horizontalInnerPaddingAndMargin = 'px-0  '

function Navigation() {

    const svgSize = 21;
    const pathName = usePathname();
    const isBlogArticle = pathName.includes('/blog/');
    const isBlog = pathName === '/blog';
    const isHome = pathName === '/';
    const [titlePreviewInNav, setTitlePreviewInNav] = useState('');
    const [titleIsInView, setTitleIsInView] = useState(true);

    const [stylesFromSpring, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: titleIsInView ? 0 : 1 },
            initial: { opacity: 0 },
            delay: 300,
        }),
        [titleIsInView]
    )

    useEffect(() => {

        let observer: IntersectionObserver | null = null;

        const blogTitleEl = document.getElementsByTagName('h1')?.[0]
        const blogTitle = blogTitleEl?.innerText || '';
        if( isHome ){
            setTitlePreviewInNav('');
        } else if ( isBlog ) {
            setTitlePreviewInNav('Blog');
        } else if ( isBlogArticle ) {
            setTitlePreviewInNav(blogTitle);
        } else {
            setTitlePreviewInNav(blogTitle);
        }
        if (blogTitleEl) {
            observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTitleIsInView(true);
                    } else {
                        setTitleIsInView(false);
                    }
                })
            }, {
                // root: document.querySelector("#scrollArea"),
                rootMargin: "0px",
                threshold: 0,
            })
            observer.observe(blogTitleEl);
        }

        return () => {
            setTitlePreviewInNav('');
            if (observer) {
                observer.disconnect();
            }
        }

    }, [pathName]);
    
    const NavLink = (props) => {
        
        const activeLinkClasses =
            ( pathName?.toUpperCase() === `/${String(props.children).toUpperCase()}` )
            || props?.path === pathName
            ? ' underline underline-offset-4 text-sky-500' : '' ;
        return <Link {...props} className={` hover:text-sky-500 ${activeLinkClasses}`}>{props.children}</Link>
    }

    return (
        <>
        <nav className='fixed flex flex-col sm:flex-row justify-between items-center p-0 md:p-4 top-0 left-0 right-0 text-sky-700 dark:text-sky-600 w-full z-10
            bg-gradient-to-b from-white dark:from-slate-950 to-transparent'
        >
            <div className='ps-6 pe-3 cursor-pointer hover:text-sky-800 dark:hover:text-sky-400
                relative z-30 hidden md:inline-block tracking-wide'
            >
                <NavLogo></NavLogo>
            </div>
            {titlePreviewInNav &&
                <BlogTitlePreview titlePreviewInNav={titlePreviewInNav} isBlogArticle={isBlogArticle} titleIsInView={titleIsInView}></BlogTitlePreview>
            }

            <div
                className="z-30 ml-auto order-1"
            >

                <div
                    className={`flex sm:order-2 py-4 px-6 md:py-4 gap-8 items-center`}
                >

                    <ToggleTheme svgSize={svgSize}></ToggleTheme>
                    <NavLink href='/blog' key="blog">
                        Blog
                    </NavLink>
                    <NavLink href='/' key="home" path={`/`}>
                        Home
                    </NavLink>
                    <LinkExt
                        href='mailto:paulmerupu91@gmail.com'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={svgSize + 5} height={svgSize + 5} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </LinkExt>
                    <LinkExt
                        href='https://www.linkedin.com/in/paulmerupu'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </LinkExt>
                </div>
                <div className={` active-link-animation-el`}>
                    {/* Animates under active link */}
                </div>
            </div>

            <animated.div style={{...stylesFromSpring}}
                className='bg-div border border-slate-200 dark:border-slate-800
                    bg-slate-200 dark:bg-slate-950 bg-opacity-40
                    z-20 absolute md:m-4 top-0 bottom-0 left-0 right-0 md:rounded-full backdrop-blur-lg'
            >
            </animated.div>
        </nav>
        </>
    )
}

export default Navigation

type LinkExtProps = {
    target?: string,
    href: string,
    children: ReactElement<any> | string | number
}

function LinkExt({ target = "_blank", href, children }: LinkExtProps) {
    return (
        <a className=' text-lg hover:text-sky-500'
            href={href}
            target={target}
        >
            {children}
        </a>
    )
}

function BlogTitlePreview({ titlePreviewInNav, titleIsInView, isBlogArticle }: { titlePreviewInNav: string, titleIsInView: boolean, isBlogArticle: boolean }) {

    // const [transitions, api] = useSpring(titleIsInView, () => ({

    //     from: { opacity: 0, duration: 1000, delay: 1000 },
    //     initial: { opacity: 1, duration: 1000, delay: 1000 },
    //     enter: { opacity: 1, duration: 1000, delay: 1000 },
    //     leave: { opacity: 0, duration: 1000, delay: 1000},
    //   }))

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: titleIsInView ? 0 : 1 },
            leave: { opacity: 0 },
        }),
        [titleIsInView]
    )

    return (

        <animated.div style={props}
            className={`
                order-2 z-30 hidden lg:inline-block sm:order-1 text-sm
                text-slate-600 dark:text-slate-400
                ${horizontalInnerPaddingAndMargin} py-1
            `}
        >
            <span className=' font-thin'>
                /&nbsp;
            </span>
            {titlePreviewInNav}
        </animated.div>
    )

}