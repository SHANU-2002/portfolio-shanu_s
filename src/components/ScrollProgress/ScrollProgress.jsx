import React, { useEffect, useState } from 'react'
import './ScrollProgress.css'

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement
            const max = scrollHeight - clientHeight
            setProgress(max > 0 ? (scrollTop / max) * 100 : 0)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="scroll-progress-track">
            <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
        </div>
    )
}

export default ScrollProgress
