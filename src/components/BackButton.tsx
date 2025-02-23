'use client'
import React, { type JSX } from 'react';

type BackButtonProps = {
    className?: string,
    text?: string
}

function BackButton({className = '', text = 'Go Back'} : BackButtonProps) : JSX.Element {

    const backToPreviousPage = () => {
        window.history.back();
    }
  return (
    <a className={className} onClick={backToPreviousPage} href="#">{text}</a>
  )
}

export default BackButton
