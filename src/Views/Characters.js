import ListViewer from "./ListViewer"
import useFetch from '../DataFetch/useFetch'

const Characters= () => { 
    const { error, isPending, data: characters } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { characters && <ListViewer characters={ characters} /> }
        </div>
    );
}
 
export default Characters;