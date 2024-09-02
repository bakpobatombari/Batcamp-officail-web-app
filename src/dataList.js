import {Link} from 'react-router-dom'

const Dblist = ({info, firstname}) => {
    return ( 
        <div className="blog-list mb-4">
            <h1 className='text-center'>DB</h1>
            <h2>{firstname}</h2>
        {info.map((data) => (
            <div className="blog-preview" key={info.id}>
                <Link to={`/info/${data.id}`}>
                <h2>{data.email}</h2>
                <p>{data.message}</p>
                </Link>
            </div>
        ))}
        </div>
     );
}
 
export default Dblist;