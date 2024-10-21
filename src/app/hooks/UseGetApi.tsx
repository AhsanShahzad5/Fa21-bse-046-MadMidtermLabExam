
import React, { useEffect, useState } from 'react'

const UseGetApi = (url: string) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();
    }, [url])

    const getProducts = async()=>{
        try {
            const res = await fetch(url , );
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }

    };

    return {data}

    
}

export default UseGetApi


 