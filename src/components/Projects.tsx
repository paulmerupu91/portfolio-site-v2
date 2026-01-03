import React from 'react';

type Props = {
    projects: any[]
}

function Projects({ projects }: Props) {
    return (
        <>
            {
                projects?.map((edge: any, i: number) => {
                    const project = edge.node;
                    return (

                        <div key={project.databaseId || i} className={`col-span-3 md:col-span-1 flex flex-col gap-3`}>
                            <h4 className='font-bold text-2xl '>
                                {project.title}
                            </h4>
                            <div className='text-xl flex flex-col gap-2 font-extralight' dangerouslySetInnerHTML={{ __html: project.content }}>

                            </div>
                        </div>

                    )
                }
                )
            }
        </>

    )
}

export default Projects