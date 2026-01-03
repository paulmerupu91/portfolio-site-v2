'use client';
import React, { useState, useEffect, type JSX } from 'react';
import { useSpring, useTransition, animated, useSpringRef } from '@react-spring/web';
import { usePathname } from 'next/navigation'

type Props = {
    children: React.ReactNode
}

function AnimatedDiv({ children }: Props): JSX.Element {

    // const [stylesFromSpring, api] = useSpring(
    //         () => ({
    //             from: { opacity: 0, y: 20 },
    //             // to: { background: titleIsInView ? 'rgba(100, 100, 100, 0)' : 'rgba(100, 100, 100, 1)', opacity: 1 },
    //             to: { opacity: 1, y: 0 },
    //             // leave: { opacity: 0, y: 0 },
    //         }),
    //         []
    // )

    // Use transitions to animate the component when the route changes
    // const [key, setKey] = useState(0); // State to track page transitions
    const pathname = usePathname() // Hook from React Router to get the current route
    const [index, set] = useState(0);

    const transRef = useSpringRef();
    const transitions = useTransition(pathname, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        // leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    useEffect(() => {
        transRef.start()
    }, [pathname, transRef])

    return (
        <>
            {transitions((style, i) => {
                return <animated.div style={{ ...style, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</animated.div>
            })}
        </>
    )

    return transitions((style, item) => (
        <animated.div style={style} key={pathname}>
            {item}
        </animated.div>
    ));

    // return (
    //     <>
    //         {/* <animated.div
    //             style={{ ...stylesFromSpring }}
    //         >
    //             {children}
    //         </animated.div> */}
    //     </>
    // )
}

export default AnimatedDiv
