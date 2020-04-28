import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function News() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        // .then(response => {
        //     console.log('control here 2');
        //     console.log(response);
        //     setResults(response.data.hits);
        // })
        getResults();
        return () => {}
    }, []);

    const getResults = async () => {
        const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
        setResults(response.data.hits);
    }

    return <>
        <ul>
            {results.map(result => (
                <li key={result.objectID}>
                    <a href={result.url}>{result.title}</a>
                </li>
            ))}
        </ul>
    </>
}