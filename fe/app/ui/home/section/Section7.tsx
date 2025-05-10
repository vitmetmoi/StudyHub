import _ from "lodash"
import { useEffect, useState } from "react"
import './Section7.scss';
import RollingBanner from "@/app/lib/RollingBanner";



export default function Section7() {

    const arrPathImage: string[] = [
        '/rolling/school1.svg',
        '/rolling/school2.svg',
        '/rolling/school3.svg',
        '/rolling/school4.svg',
        '/rolling/school5.svg',
        '/rolling/school6.svg',
        '/rolling/school7.svg',
    ]


    return (
        <>
            <div className="section7-container">
                <RollingBanner
                    arrPathImage={arrPathImage}
                    width={500}
                    height={60}
                ></RollingBanner>
            </div>
        </>
    )
}