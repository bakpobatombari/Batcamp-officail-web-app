import batom from './assets/images/about-prog.jpeg'
const Leadership = () => {
    return ( 
        <>
        <div className="container mt-4">
            <div className="col-md-12">
                <div className="member batom">
                    <div className="pic">
                        <img src={batom} className="col-md-12" alt="" />
                    </div>
                    <div className="info text-center">
                        <p>Bakpo Batombari</p>
                        <p>CEO & Founder</p>
                    </div>
                </div>
            </div>
                <div className="row">
                <div className="member others col-md-3">
                    <div className="pic">
                        <img src={batom} className="col-md-12" alt="" />
                    </div>
                    <div className="info text-center">
                        <p>Okafor Onyedikachi</p>
                        <p>Chief Web Designer</p>
                    </div>
                </div>
                <div className="member col-md-3">
                    <div className="pic">
                        <img src={batom} className="col-md-12" alt="" />
                    </div>
                    <div className="info text-center">
                        <p>Oguike Chigozirim</p>
                        <p>Chief Graphics Designer</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Leadership;