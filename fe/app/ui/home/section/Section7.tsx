import _ from "lodash"
import { useEffect, useState } from "react"
import './Section7.scss';
import RollingBanner from "@/app/lib/RollingBanner";

type propsType = {
    arrPathImage: string[]
}

export default function Section7(props: propsType) {
    const { arrPathImage } = props;

    return (
        <>
            <div className="section7-container">
                <RollingBanner

                ></RollingBanner>
            </div>
        </>
    )
}