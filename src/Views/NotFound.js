import { Link } from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Page Not Found</h2>
            <h3>Click <Link to="/">here</Link> to go to homepage</h3>            
        </div>
     );
}
 
export default NotFound;