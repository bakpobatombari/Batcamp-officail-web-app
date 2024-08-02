
import homepic from './assets/images/website.jpeg';
import './assets/css/bootstrap.min.css';
import aboutpic from './assets/images/pic.jpg'
import cycle from './assets/images/alexandru-acea--WBYxmW4yuw-unsplash.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import portif from './assets/images/about-prog.jpeg'

const Home = () => {
    const images = [
        "https://media.istockphoto.com/id/1489415049/photo/two-diverse-software-developers-having-a-meeting-in-a-conference-room-female-and-male-tech.webp?b=1&s=170667a&w=0&k=20&c=HIYlSIoHTy1diSvekZnL90pFiiq_2IPKah9MKv849A4=",
        "https://media.istockphoto.com/id/1431603444/photo/software-developer-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=lC7GzT24P-4TXM5Bp9RmwV3Xzp5sxM8nls5RC6ptGTQ=",
        "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=",
    ];
    return (  
        <>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
        <div className="container about">
            <center>
            <h2>Welcome To Batcamp</h2>
            <div className="hr-line col-md-3"></div>
            </center>
            <div className="row">
                <div className="about-pic col-md-6">
                    <img src={aboutpic} className='col-md-12 about-picture' alt="" />
                </div>
                <div className="about-writeup col-md-6">
                    <center>
                    <h2>About US</h2>
                    <div className="hr-line col-md-3"></div>
                    </center>

                    <p>
                        Batcamp Global Services Is A Web Designing and Graphics Design Company Established on 23rd Setember 2023 By Batombari Bakpo With
                        The Aim Of Creating Interactive Websites And Graphics For Your Schools, Offices, Buisnesses, and Organisations.
                    </p>
                </div>
            </div>
        </div>
        <div className="offers container-fluid">
        <div className="container">
        <center>
            <h2>What We Offer</h2>
            <div className="hr-line col-md-3"></div>
            </center>
            <div className="row">
            <div className="offer-pic col-md-6">
                <img src={cycle} className="cycle col-md-9" alt="development cycle" />
            </div>
            <div className="offer-deals col-md-6">
                <ul>
                    <li>Web Development Course</li>
                    <li>Graphics Design Course</li>
                    <li>UI/UX Design Course</li>
                    <li>Digital Marketing</li>
                    <li>Web Hosting Course</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        <div className="portifolio container mb-4">
            <div className="row">
            <div className="col-md-6">
                <img src={portif} style={{
                    borderRadius:"50%",
                    height:"340px",
                    border:"1px solid white"
                    }} className="col-md-9" alt="Portifolio" />
            </div>
            <div className="col-md-6">
                <center>
                    <h2 style={{
                        fontFamily:"serif"
                        }}>About Me</h2>
                        <div className="hr-line col-md-2"></div>
                </center>
                <p style={
                    {
                        marginTop: "20px",
                        fontSize: "24px",
                        fontFamily: "serif"
                    }
                }>My Name Is Batombari Bakpo, I am 12 Years Old And I Am The Ceo & Founder Of Batcamp Global Services, I Started The Company In Order To Stop The Challenges in Learning And Creating Websites And Grapahics Designs</p>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default Home;