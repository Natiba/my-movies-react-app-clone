import React, {useState} from 'react';
import ResultCard from './cardResult'

const Search = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            if (!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    };

    return ( 
        <div className="search-page">
            <div className="container">
                <div className="search-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search" 
                        value={query}
                        onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results" style={{color: "white"}}>
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Search;