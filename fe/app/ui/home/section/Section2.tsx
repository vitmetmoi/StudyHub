"use client"
import { useEffect, useState } from 'react'
import './Section2.scss'
import _ from "lodash";
import { styled } from "@mui/material/styles";
import Link from 'next/link';

export default function Section2() {

    const Image = styled('img')(({ theme }) => ({
        height: '250px',
        animationName: 'animated-text',
        [theme.breakpoints.down("sm")]: {
            width: '100%',

        },
        [theme.breakpoints.up("sm")]: {
            width: '100%',

        }
    }));

    const Wrapper = styled('div')(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.up("sm")]: {
            flexWrap: "wrap",
            gap: '3%',
        }

    }))

    const Item = styled('div')(({ theme }) => ({
        marginBottom: '100px',
        [theme.breakpoints.down("sm")]: {
            width: "80%"
        },
        [theme.breakpoints.up("sm")]: {
            width: "28%"
        }

    }))

    return (
        <div className='section2-container'>
            <h5>Discover Study Together</h5>
            <Wrapper>

                <Item>

                    <Image
                        src="/section/solo_study.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Own Study Universe</h6>
                        <span className='sub-detail'>Create your very own study room with atmospheric <span className='boolean'>backgrounds</span>, <span className='boolean'>personal timers</span>, and <span className='boolean'>goals</span>.</span>
                    </div>
                </Item>

                <Item>

                    <Image
                        src="/section/group_study.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Group Study Rooms</h6>
                        <span className='sub-detail'>Join <span className='boolean'>motivated students </span> from all over the world to boost your <span className='boolean'>productivity</span> and find your study flow.</span>
                    </div>
                </Item>

                <Item>

                    <Image
                        src="/section/help.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Free Tutor Help!</h6>
                        <span className='sub-detail'>Feeling stuck? Just raise your hand and one of our <span className='boolean'>expert community tutors</span> will jump in and help.</span>
                    </div>
                </Item>

                <Item>

                    <Image
                        src="/section/mindfulness.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Mindfulness</h6>
                        <span className='sub-detail'>Balance is crucial – check out our <span className='boolean'>mindfulness exercises</span> to give your mind a breather.</span>
                    </div>
                </Item>
                <Item>

                    <Image
                        src="/section/events.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Community Events</h6>
                        <span className='sub-detail'>Our live events tackle everything from <span className='boolean'>productivity courses to career advice</span>.</span>
                    </div>
                </Item>

                <Item>

                    <Image
                        src="/section/dashboard.svg"
                        alt="Picture of the author"
                    ></Image>

                    <div className='detail-group'>
                        <h6 className='detail'>Study Stats</h6>
                        <span className='sub-detail'>See your <span className='boolean'>progress</span> every day in your Stats and on the <span className='boolean'>community leaderboard.</span></span>
                    </div>
                </Item>


            </Wrapper>

            <button>
                Ready? Try it out!
                <Link href={'/'}></Link>
            </button>



        </div>

    )
}