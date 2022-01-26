import  { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {                       //url can be different so pass in props
    const [data, setData] = useState(null)                    // null because not all data will be the same "array", "object" and so on...
    const [isLoading, setIsLoading] = useState(false)         //if the data is loading. Loading is boolean bcs its true or false
    const [error, setError] = useState(null)                  // all the errors

    useEffect(() => {
        setIsLoading(true)                                    // set the state to true before the fetching stars
        axios.get(url)
            .then((response) => {                             //after we make the API call we get the data
                 setData(response.data)                       //we set the data that we get from the API request
            })
            .catch((err) =>   {                               //catch the errors.
                setError(err)
            })                                                //update the error state with the catch error
            .finally(() => {                                  //.finally() is a function that runs after the promise is resolved
                setIsLoading(false)                           //set is loading to false again
        })
    }, [url])                                                  // if the url changes we want to request the new data
    
    const refetch = () => {                                    //OPTIONAL "" Create refetch function that lets us fetch again                  
         setIsLoading(true)                                 
        axios.get(url)
            .then((response) => {                
                 setData(response.data)                 
            })
            .catch((err) =>   {                
                setError(err)
            })                                  
            .finally(() => {                             
                setIsLoading(false)                           
        })
    }


    return {data,isLoading,error, refetch}                              // return the 3 states
}

