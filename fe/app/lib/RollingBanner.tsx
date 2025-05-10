

import _ from "lodash"
import { useEffect, useState } from "react"
import './RollingBanner.scss'
export default function RollingBanner() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    console.log('scroll', scrollPosition)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [])


    return (
        <>
            <div className="section7-container">
                section7
            </div>
        </>
    )
}