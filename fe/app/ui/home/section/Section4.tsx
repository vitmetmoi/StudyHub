"use client"

import './Section4.scss';
import _ from "lodash";
export default function Section4() {

    return (
        <>

            <div className='section4-container'>

                <div className='header-group'>
                    <span className='header-1'>The benefits of studying online in one of our study groups</span>
                    <span className='header-2'>“Just” a study room? Think again!</span>
                </div>

                <div className='card-group'>

                    <div className='card'>
                        <div className='card-image'>
                            <img className='img' src="/section/Small1.png"></img>
                            <div className='icon-box'><img className='icon' src='/icon/icon1.svg'></img></div>
                        </div>
                        <div className='title'>
                            The "good" kind of <br></br>
                            peer pressure</div>
                        <div className='detail'>You know how your parents always say peer pressure is bad? Well… when it comes to studying, they’re wrong. Studying with peers helps you get better grades - and that’s scientifically proven.</div>
                        <button>Read more <img src='/button.svg'></img></button>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img className='img' src="/section/Small2.png"></img>
                            <div className='icon-box icon2'><img className='icon' src='/icon/icon2.svg'></img></div>
                        </div>
                        <div className='title'>24/7 support,<br></br>
                            all year round  </div>
                        <div className='detail'>Find a study buddy (or a procrastinate-mate), access exclusive boot camps, chat with tutors, or ask for community help. When you need a break, take a 5 min guided mindfulness session.</div>
                        <button>Read more <img src='/button.svg'></img></button>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img className='img' src="/section/Small3.png"></img>
                            <div className='icon-box icon3'>
                                <img className='icon' src='/icon/icon3.svg'></img>
                                <div className='icon-box icon4'>
                                    <img className='icon' src='/icon/icon4.svg'></img>
                                </div>
                            </div>
                        </div>
                        <div className='title'>Studying,<br></br>
                            reloaded </div>
                        <div className='detail'>Let’s be honest, any task is more fun when you know there’s a reward at the end of it. We’ll track your progress and gamify your study sessions – all you have to do is set session goals, start the timer and you’ll get rewarded.</div>
                        <button>Read more <img src='/button.svg'></img></button>
                    </div>


                </div>

            </div >
        </>
    )


}