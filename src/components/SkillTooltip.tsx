'use client'
import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    link: string
    skill: string
}

function SkillTooltip({ link, skill }: Props) {

    const [description, setDescription] = useState('');
    const tooltipRef = useRef(null);

    const [show, setShow] = useState( false );

    useEffect(() => {

        if (!(link.length > 0)) return;
        fetch(link, {
            // mode: 'cors'
        }).then(res => res.text()).then(res => {

            const parser = new DOMParser();

            // Parse the text
            const doc: Document | null = parser.parseFromString(res, "text/html");

            if (!doc) return;
            const errorNode = doc.querySelector("parsererror");
            if (errorNode) {
                // parsing failed
                setDescription('Unable to fetch description from the official site.');
            } else {
                // parsing succeeded
                const metaTag: any = doc.documentElement.querySelector('meta[name="description"]');
                if (metaTag) {
                    const descFromSite = metaTag.content;
                    setDescription(descFromSite);
                    
                    const triggerEl = document.querySelector(`[data-skill="${skill}"] .trigger`);

                    triggerEl?.addEventListener( 'click', () => {
                        setShow( !show );
                    } )
                   
                }

            }

        }).catch((err) => console.log('error fetching description for skill', err));

    }, [link, skill])

    return (
        <>
            {link.length > 0 && description && description.length > 0 &&
                <div className='absolute gap-8 xl:gap-12 grid xl:container mx-auto grid-cols-3
                    place-items-start right-0 left-0 w-full px-6 lg:px-12'
                    ref={tooltipRef}
                >
                    {/* <div className='md:col-span-1'></div> */}
                    { show && <SkillInfo skill={skill} setShow={setShow} description={description} /> }
                    
                </div>
            }
        </>
    )
}

export default SkillTooltip

function SkillInfo({ description, setShow, skill }: { description: string, setShow: CallableFunction, skill: string }) {
    const elMount = document.querySelector( '.skill-info-mount' );
    return (
        <>
            {
                elMount && createPortal( 
                    <div className='z-10 h-screen w-screen fixed

                        top-0 left-0 flex items-center content-center'
                        onClick={ () => setShow( false ) }
                    >
                        <div
                            className='h-screen w-screen fixed top-0 left-0'
                            style={{background: `rgb(0, 0, 0, .4)`}}
                        >
                            
                        </div>
                        <div className='z-10 py-6 px-6 border bg-white dark:bg-slate-800 border-green-500
                            min-h-[200px] mx-4 md:w-4/6
                            rounded-lg lg:container md:mx-auto tooltip-template
                            text-xl'
                        >
                            <h4 className='text-2xl mb-4'>{skill}</h4>
                            {description}
                        </div>
                    </div>,
                    elMount
                )
            }
        </>
    )
}