import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
// import Localbase from 'localbase';

import Rating from '../components/rating';
import SearchBar from '../components/searchBar';
import Spinner from '../components/spinner';



export default function Movie({id}) {
	var [result, setResult] = useState();


// HENTER DATA OMRKING FILMENE
	useEffect(function() {
		axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com`, {
			params: {
				i: id,
				r: "json"
			},
			headers: {
					"x-rapidapi-key": "cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a",
					"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
				}
			})
				.then(response => setResult(response.data));
	}, [id]);

	console.log(result)

	return (
		<>
        <div className="single">
            {
            	result === undefined ?  <Spinner/> :
                <>
		<>
		<SearchBar />
		<section>
            <div className="singleMovie">
		
			    <h2 className="singleMovie__title" >
                    {result?.Title}
                    </h2>

				<h3 className="singleMovie__subtitle">
                    {result?.Year}, 
                    {result?.Production}
                </h3>

				<p className="singleMovie__dir">
			    	Director: {result?.Director}
			    </p>

				<p className="singleMovie__act">
			    	Actors: {result?.Actors}
			    </p>

				<p className="singleMovie__genre">
                    {result?.Genre}
                </p>

				<img src={result?.Poster} alt={`Movie poster for ${result?.Title}`} />

				<p className="singleMovie__plot">
			    	{result?.Plot}
			    </p>
            </div>
        </section>
            
            <Rating />
            
            <section>
                <div className="singleMovie__score">
                    <p variant="p">
                        {result?.imdbRating} <FaStar  color={ "#ffc107"} />      
                    </p>
                </div>
        </section>
	</>
	</>
        }
        </div>
        </>
			
			)
		}
    
