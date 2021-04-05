import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const controller = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: controller.signal })
                .then((res) => {
                    if (!res.ok){
                        throw Error("Could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError'){
                        console.log("fetch Aborted");
                    }else {
                        setIsPending(false);
                        setError(err.message)
                    }
                })

        }, 1000);

        return () => controller.abort();

    },[url]);

    return { data , isPending, error };
}

export default useFetch;