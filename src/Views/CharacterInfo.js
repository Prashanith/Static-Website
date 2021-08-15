/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../DataFetch/useFetch";
import {useState} from "react"
const CharacterInfo = () => {
    const { id }= useParams();
    const { error, isPending, data: character } = useFetch('http://localhost:8000/blogs/'+id)
    const history =useHistory();
    const [temp,setTemp] = useState(false);

   
    const handleDelete=()=>{
        fetch('http://localhost:8000/blogs/'+character.id,{
            method:'DELETE'
        })
        .then(
            (res)=>{
                console.log("deleted")                
            }
        )
        .finally(
            ()=>{
                history.push("/")
               
            }
        )        
        setTemp(false);                 
    }

    return (        
        <div>
            <div>
            <div>{ isPending && <div>Loading...</div> }</div>
            <div>{ error && <div>{error}</div> }</div>
            <div>
                { 
                    character && 
                    <article>
                    <p className="charTitle">{ character.title }</p>
                    <div>
                        <img src={character.imageUrl} alt="Image Not Found" height="300px" className="imgStyle"/>
                    </div>
                    <div className="characterBlog">
                        <p>
                            { character.description }
                        </p>
                    </div>
                    <button onClick={ handleDelete }>Delete</button>
                   
                    </article> 
                }
            </div>

            </div>
            {
                temp &&
                <div>
                    <div className="overlay"></div>  
                    <div className="model">Character Review Deleted</div>
                </div>
                
            }
            
                
            
            

        </div>
     );
}
 
export default CharacterInfo;