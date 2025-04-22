"use client"

import './Section3.scss';
import _ from "lodash";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from 'react'

export default function Section3() {

    const Wrapper = styled('div')(({ theme }) => ({
        display: "flex",

        [theme.breakpoints.down("sm")]: {
            gap: '65px',
            flexDirection: "column",
            marginTop: '10%'
        },
        [theme.breakpoints.up("sm")]: {
            alignItems: "center",
            justifyContent: "center",
            gap: '65px',
            marginTop: '5%'
        }

    }))

    const Item = styled('div')(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        },
        [theme.breakpoints.up("sm")]: {
            width: '30%'
        }
    }))

    return (
        <>
            <div className='section3-container'>

                <h6>Not just a study stream room</h6>
                <h3>
                    Find your community. Set Goals.<br></br>
                    Achieve Them. Get rewarded.
                </h3>

                <Wrapper>
                    <Item>
                        <div className='content-left'>
                            <img src='/section/sample-img.png'></img>

                        </div>
                    </Item>
                    <Item>
                        <div className='content-right'>


                            <h5 className='header'>Stronger together 💪</h5>
                            <span className='text'>
                                Imagine a world in which <span className='boolean'>studying is actually enjoyable </span>. A world where you <span className='boolean'>set goals</span> and actually <span className='boolean'>accomplish them.</span> Where you <span className='boolean'>find guidance where you need it,</span> and you feel supported. Where you <span className='boolean'>see progress</span> and can <span className='boolean'>celebrate your achievements</span> alongside thousands of peers - where someone is always there for you! OK - enough imagining - <span className='boolean'>welcome to StudyTogether.</span>
                            </span>

                            <div className='group-btn'>
                                <button>Learn more <img src='/button.svg'></img> </button>
                                <button>FAQ & Rules <img src='/button.svg'></img></button>
                            </div>
                        </div>
                    </Item>

                </Wrapper>

            </div>
        </>
    )


}