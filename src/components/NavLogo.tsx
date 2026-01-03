'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useRef, useEffect, type JSX } from 'react';
import { useSpring, animated } from '@react-spring/web'

function NavLogo(): JSX.Element {

    console.log('NavLogo');

    const router = useRouter();

    const ref = useRef(null);
    const logoText = 'Paul Merupu';
    const logoTextArr = logoText.split('');
    const [hovered, setHovered] = useState(false);

    return (
        <div
            ref={ref}
            className=' '
            onMouseEnter={(e) => {
                e.stopPropagation();
                setHovered(true);
            }}
            onMouseLeave={(e) => {
                e.stopPropagation();
                setHovered(false);
            }}
            key={'nav-logo'}
            onClick={() => router.push('/')}
        >
            {logoTextArr.map((letter, index) => {
                return (
                    <SingleChar key={`single_char_${index}_${letter}`} letter={letter} index={index} hovered={hovered} />
                )
            })}
        </div>
    )
}

export default NavLogo

const SingleChar = ({ letter, index, hovered = false }: { letter: string, index: number, hovered: boolean }) => {

    const [init, setInit] = useState(0);

    // Flicker effect using React Spring
    const random = Math.random();
    const delay = random * 300;
    // const opacityEffectVal = 0.3;
    const opacityEffectVal = 1;

    const [stylesFromSpring, api] = useSpring(
        () => ({
            from: {
                opacity: hovered ? 1 : opacityEffectVal,
            },
            to: {
                opacity: 1,
            },
            initial: {
                opacity: hovered ? 1 : opacityEffectVal
            },
            leave: { opacity: hovered ? 1 : opacityEffectVal },
            delay: delay,
            // Do not start automatically
            immediate: false,
            config: { duration: 50 }
        }),
        [init, hovered]
    )

    if (hovered === true) {
        api.stop();
    }
    useEffect(() => {

        // if( hovered === false ) {
        //     return;
        // }

        const randomTimeoutTime = Math.random() * 1000 * 6;
        const timeout = setTimeout(() => {
            if (hovered === false) {
                api.start({
                    opacity: opacityEffectVal
                });
                setInit(randomTimeoutTime);
            }
        }, randomTimeoutTime + 2000)
        return () => clearTimeout(timeout)

    }, [init, hovered, api])

    return (
        <animated.span
            className={` inline relative `} key={`key_${letter}_${index}`} style={stylesFromSpring}

        >
            <ChangingLetter letter={letter} />
        </animated.span>
    )
}

const ChangingLetter = ({ letter }: { letter: string }) => {


    return (
        <span>
            {letter}
        </span>
    )
}