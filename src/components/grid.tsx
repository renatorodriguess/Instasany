import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

interface GridContaierProps {
    children: ReactNode,
    className?: string
}


export function GridContaier({children, className}: GridContaierProps) {
    const defaultClass = 'w-full mx-auto px-3 max-w-grid'
    const combinedClasses = twMerge(defaultClass, className)
    return(
        <div className={combinedClasses}>
            {children}
        </div>
    )
}