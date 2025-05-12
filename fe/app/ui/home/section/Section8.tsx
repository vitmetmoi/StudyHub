import './Section8.scss'
import RollingBanner from "@/app/lib/RollingBanner";

const Section8 = () => {

    const handleGetImgPath = (from: number, to: number) => {
        const arrPathImage: string[] = [];

        for (let i = from; i <= to; i++) {
            arrPathImage.push(`/rolling/user${i}.jpg`)
        }

        return arrPathImage;

    }


    return (
        <>
            <div className="section8-container">
                <h5 className="header">Improve your studying constantly</h5>
                <span className="title">Join our live Together Sessions or watch the recorded events</span>

                <button className="btn-view-more">View more events</button>

                <RollingBanner
                    arrPathImage={handleGetImgPath(1, 9)}
                    width={160}
                    height={160}
                    borderRadius={100}
                    reverse={true}
                    gap={20}
                ></RollingBanner>

                <div className='gap' style={{ margin: '10px 0' }}></div>

                <RollingBanner
                    arrPathImage={handleGetImgPath(10, 18)}
                    width={160}
                    height={160}
                    borderRadius={100}
                    reverse={false}
                    gap={20}
                ></RollingBanner>
            </div>
        </>
    )
}

export default Section8;