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
                <h5 className="header">Meet fellow students from all over the world</h5>

                <RollingBanner
                    arrPathImage={arrPathImage}
                    width={220}
                    height={50}
                    borderRadius={0}
                    reverse={false}
                    gap={0}
                ></RollingBanner>



                <RollingBanner
                    arrPathImage={arrPathImage}
                    width={220}
                    height={50}
                    borderRadius={0}
                    reverse={true}
                    gap={0}
                ></RollingBanner>
            </div>
        </>
    )
}