/* eslint-disable react/jsx-no-undef */
import {Link} from 'react-router-dom'


const ListViewer = ({ characters,handleDelete }) => {  
    const notFound="image not found"  ;
    return (  
        <div>
            <ul >
                <li className="list-view">
                    {                          
                        characters.map((character)=>(
                        <div className="characterBlog" key={ character.id }>
                            <Link to={ `/characters/${character.id}` }>
                                <h2>{ character.title }</h2>                                
                            </Link>
                            <img src={character.imageUrl} alt={notFound} width="300px" height="300px"/>
                        </div>
                        ))
                    }
                </li>
          </ul>
        </div>
    );
}
 
export default ListViewer;