/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    const abortController= new AbortController();

    useEffect(() => {
        setTimeout(() => {
          fetch(url,{signal:abortController.signal})
          .then(res => {
            if (!res.ok) { 
              throw Error('Internal Error! Could not fetch requested Data');
            } 
            return res.json(); 
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            if(err.name=== "AbortError"){
              console.log("Fetch Aborted")
            }
            else{
              setIsPending(false);
              setError(err.message);
            }
            
          })
        }, 1000);
        return ()=>abortController.abort()
      }, [url])
    
      return { data, isPending, error };
}
 
export default useFetch;