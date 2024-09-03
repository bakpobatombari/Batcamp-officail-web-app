import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const {data:info,error,isPending} = useFetch('http://localhost:8800/info/' + id);
    const history = useHistory();
    const handleDelete = () =>{
        fetch('http://localhost:8800/info/' + info.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/database');
        })
    }
    return ( 
        <div className="blog-details" style={{marginBottom:'11.5rem'}}>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { info && (
                <article>
                    <h2>Fisrtname: {info.firstName}</h2>
                    <p>Lastname: {info.LastName}</p>
                    <p>Email: {info.email}</p>
                    <p>Message: <br /> {info.message}</p>
                    <button onClick={handleDelete}>Replied</button>
                    <br/>
                    <button onClick={()=>{
                        history.push('/database')
                    }}>Back</button>
                </article>
            )}
        </div>
     );
}
 
export default Detail;