import React from 'react'

type Props = {}

function SectionSpacer({}: Props) {
  return (
    <div className="col-span-full py-4 seperator">
        <div className="relative left-[-50vw] w-[200vw]  border-t
            border-dashed border-slate-300 dark:border-slate-700"
        ></div>
    </div>
  )
}

export default SectionSpacer