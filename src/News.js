import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

export default function News() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("react hooks");
    const searchInputRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        getResults();
    }, []);

    const getResults = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        }
        catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    const handleSearch = event => {
        event.preventDefault();
        getResults();
    }

    const handleClearSearch = () => {
        setQuery("");
        searchInputRef.current.focus();
    }

    return <>
        <form onSubmit={handleSearch}>
            <input
                type="text"
                onChange={event => setQuery(event.target.value)}
                value={query}
                ref={searchInputRef}
            />
            <button type="submit">Get results</button>
            <button type="button" onClick={handleClearSearch}>Clear</button>
        </form>
        {loading
            ? <div>Getting Results...</div>
            : (<ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>)}
        {error && <div>{error.message}</div>}
    </>
}