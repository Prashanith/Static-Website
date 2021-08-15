import '../StyleSheets/navbar.css'
import { 
    Link
  } from "react-router-dom";

const Navigator = () => {
    return (
        <nav className="navbar">
            <h1>
                The Stark Family
            </h1>
            <ul>
                <li>
                    <Link to="/" className="aStyle">
                    Home
                    </Link>              
                </li>
                <li>
                    <Link to="/characters" className="aStyle">
                    Characters
                    </Link>              
                </li>
                <li>
                    <Link to="/addcharacter" className="aStyle">
                    AddCharacter
                    </Link>              
                </li>
                <li>
                    <Link to="/about" className="aStyle">
                    About
                    </Link>              
                </li>
               
            </ul>
        </nav>
    );
}
 
export default Navigator;