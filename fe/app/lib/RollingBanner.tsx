

import _ from "lodash"
import { useEffect, useState } from "react"
import './RollingBanner.scss';

type propsType = {
    arrPathImage: string[]
}

export default function RollingBanner(props: propsType) {
    const { arrPathImage } = props;

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
            <div className="rolling-banner-container">

            </div>
        </>
    )
}