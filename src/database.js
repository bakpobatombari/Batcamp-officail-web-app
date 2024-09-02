import Dblist from "./dataList";
import useFetch from "./useFetch";

const MyBase = () => {

    const {data: blogs,isPending,error} = useFetch('https://bakpobatombari.github.io/batcampdb/db.json');

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
        {blogs && <Dblist info={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default MyBase;