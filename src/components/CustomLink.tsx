import React from 'react'

type Props = {
    children?: React.ReactNode,
    href: string,
    className?: string,
    green?: boolean
}

function CustomLink({children, href, className, green = false}: Props) {

    const textColor = !green ? `text-sky-700  hover:text-sky-500 dark:text-sky-500 dark:hover:text-sky-300`
        : `text-green-700  hover:text-green-500 dark:text-green-500 dark:hover:text-green-300`;
  return (
    <a target="_blank" href={href} className={` ${textColor} ${className}`}>{children}</a>
  )
}

export default CustomLink