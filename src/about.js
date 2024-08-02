import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const About = () => {
    const images = [
        "https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YSUyMHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/1431603444/photo/software-developer-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=lC7GzT24P-4TXM5Bp9RmwV3Xzp5sxM8nls5RC6ptGTQ=",
        "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=zkLn4o1T0CMCXmTQZlwheJDYuW9fOXXkvTJ9zbl3sCs=",
    ];
    return ( 
        <>
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
        </>
     );
}
 
export default About;