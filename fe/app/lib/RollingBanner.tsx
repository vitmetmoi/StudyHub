

import _, { curry } from "lodash"
import { useEffect, useRef, useState } from "react"
import './RollingBanner.scss';

type propsType = {
    arrPathImage: string[],
    width: number,
    height: number
}

export default function RollingBanner(props: propsType) {
    const { arrPathImage, width, height } = props;

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const rollingDiv = useRef<HTMLDivElement>(null);


    const handleScroll = () => {

        if (!rollingDiv.current) return;
        const position = window.pageYOffset;
        let curPositionDiv = (rollingDiv.current.style.left).match(/\d+/);

        if (scrollPosition >= 0 && curPositionDiv) {
            console.log('rolling div', curPositionDiv[0]);
            console.log(rollingDiv.current.style.left + (position - scrollPosition))
            rollingDiv.current.style.left = `${+curPositionDiv[0] + (position - scrollPosition)}px`;
        }

        setScrollPosition(position);
    };

    console.log('scroll', scrollPosition)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, [])


    return (
        <>
            <div ref={rollingDiv} className="rolling-banner-container">
                {props.arrPathImage && props.arrPathImage.map((item, index) => {
                    return (
                        <>
                            <img src={item} width={props.width} height={props.height}></img>
                        </>
                    )
                })}
            </div>
        </>
    )
}