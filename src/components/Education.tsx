import React from 'react'

type Props = {}

type Education = {
    schoolName: string,
    programName: string,
    degree: string
}

const education: Education[] = [
    {
        schoolName: 'JNTU Kakinada',
        programName: 'Computer Science and Engineering',
        degree: 'Bachelor of Technology'
    },
    {
        schoolName: 'LIU Brooklyn',
        programName: 'Media Arts',
        degree: 'Master of Arts'
    }
]

function Education({ }: Props) {
    return (
        <>
            {education.map((ed, i) =>
                <div key={i}>
                    <div className={`col-span-3 md:col-span-1`}>
                        <h4 className='font-bold text-xl text-sky-800 dark:text-sky-600'>
                            {ed.degree}
                        </h4>
                        <h3 className='text-2xl my-2'>
                            {ed.programName}
                        </h3>
                        <div className='my-2'>
                            {ed.schoolName}</div>

                        <div>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Education