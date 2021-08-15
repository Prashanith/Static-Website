/* eslint-disable no-multi-str */
/* eslint-disable no-unused-vars */
import Characters from "../Views/Characters";
import useFetch  from "../DataFetch/useFetch";

const Home = () => {
    return (
        <div className="homePage">           
            <div>
                <h1 className="not-found">The Stark Family Characters Info</h1>
                <img src="https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Stark-family-tree-got-1005915.jpg?r=1591626972800" alt="The Stark Family Tree" className="imgStyle"/>
            </div>  
        </div>
    );
}
 

export default Home;