import { useContext } from "react";

import SearchBar from "../components/searchBar";
import searchContext from "../store/searchContext";
import Result from "../components/result";
import { Container } from "@material-ui/core";


export default function Index(){
    var [results] = useContext(searchContext);

    return(
    <>
    <SearchBar/>
    <Container>
        {results.map (result => <Result key={result.imdbID} imdbID={result.imdbID} title={result.Title} year={result.Year} poster={result.Poster} />)}
    </Container>
    </> 
    );
}