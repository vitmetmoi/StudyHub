"use client"

import './HomeBanner.scss';
import Navigation from './Navigation';
import { styled } from "@mui/material/styles";

export default function HomeBanner() {

    const BannerTitle = styled('div')(({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            fontSize: '49px',
            fontWeight: '750',
            color: 'white',
            margin: 0,
            textAlign: 'center',
            marginTop: '30%'
        },
        [theme.breakpoints.up("sm")]: {
            maxWidth: '70%',
            fontSize: '68px',
            fontWeight: '600',
            lineHeight: '70px',
            color: 'white',
            margin: 0,
        }
    }));

    return (
        <>
            <Navigation></Navigation>
            <div className='banner-container'>


                {/* <BannerContent> */}
                <div className='banner-content'>


                    <div className='section'>
                        <BannerTitle>Meet, chat, and study with students from all over the world 🌍</BannerTitle>
                    </div>
                    <div className='section'>
                        <h6>
                            Join the largest <span className='bol-text'>global student community </span>online and say goodbye to lack of motivation.
                        </h6>
                    </div>
                    <div className='section'>
                        <button>Study Together now</button>
                    </div>
                    <div className='section'>
                        <div className='banner-tag'>100% Free</div>
                        <div className='banner-tag'>25 566 Online</div>
                    </div>
                    <div className='section'>
                        <span className='button-bottom'>Join our Onboarding Session -</span>
                    </div>

                    {/* </BannerContent> */}
                </div>

            </div>
        </>
    )


}