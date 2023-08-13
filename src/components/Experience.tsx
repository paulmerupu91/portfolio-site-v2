import React from 'react'

type Props = {}

type Job = {
    title: string,
    companyName: string,
    description?: string[],
    currentJob?: boolean,
    startDate: string,
    endDate?: string,
}

const workExp: Job[] = [
    {
        title: 'Senior Full Stack Developer',
        companyName: 'Adweek',
        // description: [`Developed CI/CD pipelines for production, QA and development instances in early 2023. Automated coding standards check in the pipeline.
        //     About 300 deployments are successfully executed through the pipelines every month.`],
        currentJob: true,
        startDate: 'Jan 1 2023',
        // endDate?: ,
    },
    {
        title: 'Web Developer',
        companyName: 'Adweek',
        // description: ["Developed several essential components of Adweek site such as site navigation, article templates, and others."],
        currentJob: false,
        startDate: 'Aug 26 2019',
        endDate: 'Dec 31 2022',
    },
    {
        title: 'Web Developer',
        companyName: 'Bold Worldwide',
        description: [],
        currentJob: false,
        startDate: 'Feb 01 2018',
        endDate: 'Aug 22 2019',
    },
    {
        title: 'Web Developer',
        companyName: 'Richmond Tile',
        description: [],
        currentJob: false,
        startDate: 'Jul 18 2016',
        endDate: 'Jan 31 2018',
    },
]

function yearsDiff(d1: Date, d2: Date): number {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}

function Experience({ }: Props) {
    return (
        <>
            {
                workExp.map((job, i) => {
                    const startDateObj = new Date(job.startDate);
                    const endDateObj = job.endDate ? new Date(job.endDate) : new Date();
                    const years = yearsDiff(startDateObj, endDateObj);
                    return (

                        <div key={i} className={`col-span-3 md:col-span-1`}>
                            <h4 className='font-bold text-xl text-sky-800 dark:text-sky-600'>
                                {job.companyName}
                            </h4>
                            <h3 className='text-2xl my-2'>
                                {job.title}
                            </h3>
                            <div className='my-2'>
                                {startDateObj.toLocaleDateString('en-us', { year: "numeric", month: "short" })} - {job.currentJob ? <span>current</span> : endDateObj.toLocaleDateString('en-us', { year: "numeric", month: "short" })}</div>

                            <div>
                                {years < 1 ? '<1' : years}  {years > 1 ? `years` : `year`}
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