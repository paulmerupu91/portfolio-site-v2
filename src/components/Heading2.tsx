import React from 'react';
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

function Heading2({children}: Props) {
  return (
    <h1 className="col-span-3 items-center flex text-3xl md:text-5xl text-sky-700 dark:text-sky-600">{children}</h1>
  )
}

export default Heading2