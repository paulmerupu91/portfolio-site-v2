import React from 'react'
import SkillTooltip from './SkillTooltip'

type Props = {

    skills?: Skill[]
}

type Skill = {
    skillName: string,
    link?: string,
    logo?: string,
    description?: string
}

const skillList: Skill[] = [
    {
        skillName: 'React',
        link: 'https://react.dev/'
    },
    {
        skillName: 'NodeJS',
        link: 'https://nodejs.org/en'
    },
    {
        skillName: 'NextJS',
        link: 'https://nextjs.org/'
    },
    {
        skillName: 'Typescript',
        link: 'https://www.typescriptlang.org/'
    },
    {
        skillName: 'Containers',
        link: ''
    },
    {
        skillName: 'PHP',
        link: 'https://www.php.net/'
    },
    {
        skillName: 'MongoDB',
        link: 'https://www.mongodb.com/'
    },
    {
        skillName: 'GraphQL',
        link: 'https://graphql.org/'
    },
    {
        skillName: 'Prisma ORM',
        link: 'https://www.prisma.io/'
    },
    {
        skillName: 'Mongoose',
        link: 'https://mongoosejs.com/docs/'
    },
    {
        skillName: 'MySQL',
        link: 'https://www.mysql.com/'
    },
    {
        skillName: 'Python',
        link: 'https://www.python.org/'
    },
    {
        skillName: 'Sass',
        link: 'https://sass-lang.com/'
    },
    {
        skillName: 'Yup',
        link: 'https://github.com/jquense/yup'
    },
    {
        skillName: 'TailwindCSS',
        link: 'https://tailwindcss.com/'
    },

    {
        skillName: 'Vite',
        link: 'https://vitejs.dev/'
    },
    {
        skillName: 'Webpack',
        link: 'https://webpack.js.org/'
    },
    {
        skillName: 'Docker',
        link: 'https://www.docker.com/'
    },
    {
        skillName: 'CI/CD',
        link: 'https://bitbucket.org/product/features/pipelines'
    },
    {
        skillName: 'Google Cloud Platform',
        link: 'https://cloud.google.com/'
    },
    {
        skillName: 'Amazon Web Services',
        link: ''
    },
    {
        skillName: 'Git',
        link: 'https://git-scm.com/'
    },
    {
        skillName: 'Jest',
        link: 'https://jestjs.io/'
    },
]

export default function Skills({ skills = skillList }: Props) {

    return (
        <div className="md:col-span-3 flex gap-4 flex-wrap">
            {
                skills.map(skill =>
                    <div key={skill.skillName} data-skill={skill.skillName}>

                        <h3
                            className={`rounded-full bg-white dark:bg-slate-900 inline-block border
                                border-green-400 px-4 py-2 md:px-7 md:py-4
                                dark:border-green-700
                                trigger
                            `}

                        >
                            {skill.skillName}
                        </h3>

                    </div>
                )
            }
            <div className="skill-info-mount"></div>
        </div>
    )
}