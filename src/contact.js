import { Slide } from "react-slideshow-image";
const Contact = () => {
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
         <div className="container">
            <div className="col-md-12">
                <div className="row">
                <div className="card"></div>
                </div>
            </div>
         </div>
        </>
    );
}
 
export default Contact;