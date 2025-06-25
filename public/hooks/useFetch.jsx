import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setError(null);
    fetch(url)
       .then((result) =>{
        if(!result.ok)
            throw new Error ('Network Error');
        return result.json();
       })
       .then((data)=>{
        setData(data);
        setLoading(false);
       })
       .catch((error)=>{
        setError(error.message);
        setLoading(false);
       })
  },[url]);

  return {data,error,loading}
}
