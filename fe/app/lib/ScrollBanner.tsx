"use client"

import './ScrollBanner.scss';
import _ from "lodash";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from 'react';
export default function ScrollBannner() {

    const items: string[] = [
        'community',
        'tutoring',
        'social events',
        'motivation',
        'leaderboard',
        'progress',
        'together'
    ]

    return (
        <>
            <div className='scroll-banner-container'>
                <div className='scroll-banner'>
                    {
                        items.map((value: string, index: number) => {
                            return (
                                <div className='item'>
                                    {value}
                                </div>
                            )
                        })
                    }

                    {
                        items.map((value: string, index: number) => {
                            return (
                                <div className='item'>
                                    {value}
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </>
    )


}