"use client"
import './Section5.scss'
import _ from "lodash";

export default function () {
    return (
        <>
            <div className="section5-container">


                <div className="content-left">
                    <h5 className='title'>Easy as ABC</h5>
                    <span className='des'>No matter what you’re studying for and what your home setup is,<strong> we’ve got a solution for you</strong> , whether in a solo study room or a group session. We provide free and easy ways for you to streamline your study routine, no matter where you’re from, or whether you are in high school or university.</span>
                    <button className='btn'>Create your free account</button>
                </div>


                <div className="content-right">

                    <div className="section">
                        <button className='main-btn' style={{ backgroundImage: `URL(https://cdn.prod.website-files.com/60890f6ac44206aef9237eb4/6204d43c6eff38165a6279c4_ezgif.com-gif-maker.gif)` }}>
                            <div className='tag-box'>Live-in app</div>
                            <span className='text'>Solo study 📚 </span>
                        </button>
                    </div>

                    <div className="section">
                        <button className='main-btn sub' style={{ backgroundImage: 'linear-gradient(139deg, #9656a1, #ff3939)' }}>
                            <div className='tag-box'>Live-in app</div>
                            <span className='text'>Group focus | 25 min ☕  </span>
                        </button>

                        <button className='sub-btn'>Join now <img src='/button.svg'></img></button>
                    </div>

                    <div className="section pos-3">

                        <button className='main-btn' style={{ backgroundColor: '#5865f2', }}>
                            <div className='tag-box end-items'><img style={{ width: '18px', height: '18px' }} src='/icon/discord.svg'></img> On Discord</div>
                            <span className='text'>Nature sounds 🌱  </span>
                        </button>

                    </div>

                    <div className="section" >
                        <button className='main-btn' style={{ backgroundColor: '#2d8cff', }}>
                            <div className='tag-box end-items'><img style={{ width: '18px', height: '18px' }} src='/icon/zoom.svg'></img> On Zoom</div>
                            <span className='text'>Study  | With Camera 📖  </span>
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}