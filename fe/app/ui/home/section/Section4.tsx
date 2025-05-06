"use client"

import './Section4.scss';
import _ from "lodash";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from 'react'
import FloatingAvatar from '@/app/lib/FloatingAvatar';
import ScrollBannner from '@/app/lib/ScrollBanner';
export default function Section4() {

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
            <ScrollBannner />
            <div className='section4-container'>

                <div className='header-group'>
                    <span className='header-1'>The benefits of studying online in one of our study groups</span>
                    <span className='header-2'>“Just” a study room? Think again!</span>
                </div>

                <div className='card-group'>

                    <div className='card'>
                        <div className='card-image'></div>
                        <div className='title'></div>
                        <div className='detail'></div>
                        <button></button>
                    </div>

                    <div className='card'>
                        <div className='card-image'></div>
                        <div className='title'></div>
                        <div className='detail'></div>
                        <button></button>
                    </div>

                    <div className='card'>
                        <div className='card-image'></div>
                        <div className='title'></div>
                        <div className='detail'></div>
                        <button></button>
                    </div>


                </div>

            </div >
        </>
    )


}