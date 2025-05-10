import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Section6.scss'
export default function Section6() {
    return (
        <>
            <div className='section6-container'>

                <h2 className='header'>Don’t just take our word for it</h2>
                <span className='title'>Studying online in a focus room with friends and strangers is a game-changer for <strong>millions</strong> of students all over the world.
                    <br></br>    … and the crowd goes wild:</span>

                <img className='gif' src='/icon/heart-gif.gif'></img>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={80}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">


                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>Awesome Community</span>
                                <span className='slide-title'>‍"As a chronic procrastinator, this community really helps me motivate myself to get my homework done. Has cool leaderboards, timers, and study tips. It’s a really large community so it’s pretty easy to meet people, too."</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>Productivity Booster</span>
                                <span className='slide-title'>"I have never been so focused and productive when studying by myself before. I can study with someone basically 24/7 if I really wanted too. It has been an amazing help! 💜 Thanks Study Together!"</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>Goals</span>
                                <span className='slide-title'>"I’ve been a part of it for probably a little over a month and I’ve noticed how it’s improved my ability to stay focused. Since everyone is also studying in the call and working hard, I feel obliged to stay on task as well."</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>Study Together is great</span>
                                <span className='slide-title'>„Study Together is perfect no flaws no nothing. It gives me a purpose and before this I did not study a lot now I do. Thanks Study Together.“</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>Thank you</span>
                                <span className='slide-title'>‍„Yesterday I completed my one year in this community. I feel so amazed that I have so many study hours without even noticing them, just cuz I was so focused with my study pals to achieve what I wanted to!!“</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-introduce'>
                            <div className='slide-content'>
                                <span className='slide-header'>The level system is pog </span>
                                <span className='slide-title'>„The VC level system keeps me motivated — the more time spent studying, the more levels you gain and the fancier your role becomes. There’s even silent study calls with lofi music, silence, nature sounds and other types of ambience. 10/10 would recommend it to a friend.“</span>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    )
}