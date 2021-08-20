import { useContext } from "react";

import SearchBar from "../components/searchBar";
import { SearchContext } from "../store/searchContext";
import Result from "../components/result";
import { Container } from "@material-ui/core";

import '../style/indexView.css'


export default function Index(){
    var [ results ] = useContext(SearchContext);

    return(
    <>
    <SearchBar/>
    <Container  className="moviesPosters">
        {results.map (result => 
        <Result key={result.imdbID} 
        imdbID={result.imdbID} 
        title={result.Title}
        year={result.Year}
        poster={result.Poster}
        />)}
    </Container>
    </> 
    );
}