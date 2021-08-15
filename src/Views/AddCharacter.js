/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useHistory} from "react-router-dom"

const AddCharacter = () => {
    const [title,setNewCharacter] = useState('');
    const [description,setDescription] = useState('');
    const [imageUrl,setImageUrl] = useState('');

    const [isPending,setIsPending] = useState(false);
    const history=useHistory();


    const handleClick=(e)=>{
        e.preventDefault();
        const characterBlog={
            title,
            imageUrl,
            description
        }
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(characterBlog)
        }
        )
        .then(
            ()=>{
                console.log("Character Added")
                console.log(characterBlog)
                setIsPending(false)
                history.push('/characters')
            }
        )
    }

    return (  
        <div>
            <form onSubmit={ handleClick } method="post">
                <label htmlFor="character">Character</label>
                <br/>
                <input 
                type="text" 
                name="character" 
                id="character" 
                value={title}
                onChange={ (e)=> setNewCharacter(e.target.value)}
                required/>
                <br/>

                <label htmlFor="imageUrl">Image Url</label>
                <br/>
                <input type="url" name="imageUrl" id="imageUrl"
                value={imageUrl}
                onChange={ (e)=> setImageUrl(e.target.value)}
                required/>
                <br/>

                <label htmlFor="description">Character Description</label>
                <br/>
                <textarea 
                name="description"
                rows="7" 
                id="description" 
                value={description}
                onChange={ (e)=>setDescription(e.target.value)}
                required></textarea>
                <br/>

                <br/>
                {isPending && <button disabled>Submitting Blog</button>}
                {!isPending && <input type="submit" value="Submit"/> }
                
            </form>
        </div>
    );
}
 
export default AddCharacter;