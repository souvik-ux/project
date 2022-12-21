import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CatFact = () => {
    const [data, setData] = useState("")

    const loadFact = async () => {
        await axios.get('https://catfact.ninja/fact')
            .then(resp => {
                setData(resp.data.fact);
            })
    }


    useEffect(() => {
        loadFact();

    }, [])


    return (
        <div>
            <p>{data}</p>
            <br />
            <button onClick={loadFact}>Refresh</button>
        </div>
    )
}

export default CatFact
