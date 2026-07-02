import { useEffect, useRef, useState } from 'react'

// Attaches to any element; adds 'is-visible' once the element enters
// the viewport, then stops observing (animation plays once).
export const useReveal = (options = {}) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        if (typeof IntersectionObserver === 'undefined') {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(node)
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -80px 0px', ...options }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return [ref, isVisible]
}

export default useReveal
