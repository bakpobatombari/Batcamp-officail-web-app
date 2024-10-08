import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import aboutpic from './assets/images/newbatcamp.jpg'
import { useState } from 'react';
import cycle from './assets/images/main-cycle.jpeg'
const About = () => {
    const images = [

        "https://media.istockphoto.com/id/1431603444/photo/software-developer-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=lC7GzT24P-4TXM5Bp9RmwV3Xzp5sxM8nls5RC6ptGTQ=",
        "https://media.istockphoto.com/id/1431603444/photo/software-developer-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=lC7GzT24P-4TXM5Bp9RmwV3Xzp5sxM8nls5RC6ptGTQ=",
        "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=",
    ];
    const [isPending, setIsPending] = useState(true);
    const age = "12 Years Old";
    setTimeout(()=>{setIsPending(false)},1000)
    return ( 
        <div>
        {!isPending && <div>
        <div className="slideshow mb-4">
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
        </div>
        <div className="container mb-4">
            <div className="col-md-12">
                <h2 style={{textAlign:'center'}} className='mb-4'>About Us</h2>
                <div className="row">
                    <div className="col-md-5">
                        <div className="col-md-12">
                            <img src={aboutpic} className='col-md-12' height={'350px'} alt="picture" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p style={{textAlign:'center', fontFamily:'serif', fontSize:'25px'}}>Batcamp Global Services Is A Web Designing and Graphics Design Company Established on 25th August 2023 By Batombari Bakpo With The Aim Of Creating Interactive Websites And Graphics For Your Schools, Offices, Buisnesses, and Organisations.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid about-me mb-4">
            <div className="container">
                <div className="col-md-12">
                    
                    <div className="row">
                        <div className="col-md-5 mb-4 mt-4">
                            <img src={aboutpic} style={{height:'350px',borderRadius:'50%'}} alt="" className="col-md-12" />
                        </div>
                        <div className="col-md-7">
                        <center>
                    <h2 style={{
                        fontFamily:"serif"
                        }}>About Me</h2>
                        <div className="hr-line col-md-2"></div>
                </center>
                        <p style={{textAlign:'center', fontFamily:'serif', fontSize:'25px'}}>My Name Is Batombari Bakpo, {age} And I Am The Ceo & Founder Of Batcamp Global Services, I Started The Company In Order To Stop The Challenges in Learning And Creating Websites And Grapahics Designs</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>}
        {isPending && <div className='mt-4 text-center'>Loading...</div>}
        </div>
     );
}
 
export default About;