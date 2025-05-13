import './Footer.scss'

const Footer = () => {


    return (
        <>
            <div className="footer-container">
                <div className="footer-content">

                    <div className="group-item">
                        <img className="logo" src="logo.png"></img>
                    </div>

                    <div className="group-item">
                        <h5 className="header">Study Together</h5>
                        <span className='item'>Home</span>
                        <span className='item'>How to Study Together</span>
                        <span className='item'>Community events</span>
                        <span className='item'>Academy</span>
                        <span className='item'>Zoom Study Rooms</span>
                        <span className='item'>Study Stream</span>
                        <span className='item'>Study Room</span>
                        <span className='item'>Micro Communities</span>
                        <span className='item'>Own Study Universe</span>
                        <span className='item'>Study Places Near Me</span>

                    </div>

                    <div className="group-item">
                        <h5 className="header">About</h5>
                        <span className='item'>Latest news & releases</span>
                        <span className='item'>FAQs & Rules</span>
                        <span className='item'>About us</span>
                        <span className='item'>Our Tutors & Supporters</span>
                        <span className='item'>Jobs</span>

                    </div>

                    <div className="group-item">
                        <h5 className="header">Legal</h5>
                        <span className='item'>Privacy policy</span>
                        <span className='item'>Terms and conditions</span>
                        <span className='item'>Cookies</span>
                        <span className='item'>Imprint</span>
                    </div>

                </div>
            </div>
        </>
    )


}

export default Footer;