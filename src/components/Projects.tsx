import React from 'react';
import CustomLink from './CustomLink';

type Props = {}

type Job = {
    title: string,
    description?: string | React.ReactNode,
    link?: string | React.ReactNode,
    githubLink?: string | React.ReactNode
}

const workExp: Job[] = [
    {
        title: 'Chat Room',
        description: <div>A light-weight and performant event-driven chat application build with <CustomLink href="https://react.dev/">React</CustomLink>, <CustomLink href="https://expressjs.com/">Express</CustomLink> and <CustomLink href="https://socket.io/">Socket.IO</CustomLink>.</div>,
        link: <CustomLink className='text-small' green={true} href='chat-room.paulmerupu.com'>chat-room.paulmerupu.com 🔗</CustomLink>
    },
    {
        title: 'Taskboard',
        description: <div>Easy-to-use Kanban board built with <CustomLink href="https://react.dev/">React</CustomLink>.</div>,
        githubLink: <CustomLink className='text-small' green={true} href='https://github.com/paulmerupu91/taskboard'>https://github.com/paulmerupu91/taskboard 🔗</CustomLink>
    },

]

function Experience({ }: Props) {
    return (
        <>
            {
                workExp.map((project, i) => {

                    return (

                        <div key={i} className={`col-span-3 md:col-span-1`}>
                            <h4 className='font-bold text-2xl text-sky-800 dark:text-sky-600'>
                                {project.title}
                            </h4>
                            <h3 className='text-xl my-2'>
                                {project.description}
                            </h3>
                            <div className='my-2'>
                                {project.link}
                            </div>
                            <div className='my-2'>
                                {project.githubLink}
                            </div>

                            

                        </div>

                    )
                }
                )
            }
        </>

    )
}

export default Experience