

import _, { curry } from "lodash"
import { useEffect, useRef, useState } from "react"
import './RollingBanner.scss';

type propsType = {
    arrPathImage: string[],
    width: number,
    height: number,
    reverse: boolean,
    borderRadius: number,
    gap: number
}

export default function RollingBanner(props: propsType) {
    const { arrPathImage, borderRadius, width, height, reverse, gap } = props;

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const rollingDiv = useRef<HTMLDivElement>(null);

    return (
        <>
            <div ref={rollingDiv} className="rolling-banner-container">
                <div style={{ gap: gap }} className={reverse === true ? 'rolling-content reverse' : "rolling-content"}>
                    {
                        arrPathImage.map((value: string, index: number) => {
                            return (
                                <img src={value} style={{ borderRadius: borderRadius }} width={width} height={height}></img>
                            )
                        })
                    }

                    {
                        arrPathImage.map((value: string, index: number) => {
                            return (
                                <img src={value} style={{ borderRadius: borderRadius }} width={width} height={height}></img>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}