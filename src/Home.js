import homepic from './assets/images/website.jpeg';
import './assets/css/bootstrap.min.css';
import aboutpic from './assets/images/programmer.jpeg'
import cycle from './assets/images/cirlclecy.png'
const Home = () => {
    return (  
        <>
        <div className="homepic">
            <img src={homepic} className='col-md-12' alt="homepic" />
        </div>
        <div className="container about">
            <center>
            <h2>Welcome To Batcamp</h2>
            <div className="hr-line col-md-3"></div>
            </center>
            <div className="row">
                <div className="about-pic col-md-6">
                    <img src={aboutpic} className='col-md-12' alt="" />
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
        </>
    );
}
 
export default Home;