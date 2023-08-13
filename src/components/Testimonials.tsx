import React from 'react'

type Props = {}

const data = [
    {
        testimonial: 'We’ve launched several projects together at Adweek and hopefully many more to come. I very much appreciate Paul’s insights, feedback, and most importantly a good heart and the willingness of creating the very best version of what’s in front of us.',
        name: 'Simon Dabkowski',
        link: 'https://www.linkedin.com/in/simondabkowski'
    },
    {
        testimonial: 'Paul is detail-oriented, thinks critically when building new features, solves problems proactively, and is just a pleasure to work with.',
        name: 'Stefan Bohacek',
        link: 'https://www.linkedin.com/in/stefanbohacek'
    },
    {
        testimonial: 'Paul is an outstanding developer and teammate... He\'s also a student of his craft.',
        name: 'Jonathan Oustaev',
        link: 'https://www.linkedin.com/in/jonathanoustaev'
    },

]

function Testimonials({ }: Props) {
    return (
        <>
            {data.map(item =>
                <div key={item.name} >
                    <div className="md:border-e md:border-b border-green-300 md:pe-4 lg:pe-8 md:pb-4 lg:pb-8 rounded-e-3xl rounded-b-3xl rounded-s-none rounded-t-none">
                        <p className='lg:text-xl mt-6 block'>
                            {item.testimonial}{`"`}
                        </p>
                        <a href={item.link} className=" mt-4 block text-sky-800 hover:text-sky-600 font-bold">
                            <span>{item.name}</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}

export default Testimonials