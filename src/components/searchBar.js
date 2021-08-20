import { InputBase, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { Link, navigate } from "@reach/router";

import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

import searchContext from "../store/searchContext";

import "../style/searchBar.css";




export default function SearchBar() {
    var [ results, setResults] = useContext(searchContext);
    var [ page, setPage ] = useState(1);


    function getNextPg(e) {
        axios.get(`https://movie-databse-imdb-alternative.p.rapidapi.com`, {
            params: {
                s: e.target.search.value,
                page: page,
                r: "json"
            }, 
            headers: {
                "x-rapidapi-key": "cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a",
					"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(response => {
            setResults([...results, ...response.data.Search]);
            setPage(page + 1);
            navigate("/");
        })
    }

function handleSubmit(e) {
    e.preventDefault();
    getNextPg(e);
}

return (
    <AppBar position="fixed">
        <Toolbar className="toolbar">
                <Typography variant="h6">
                    <Link to="/" style={{color:"white", textDecoration:"none"}}>Movie Rapid</Link>
                </Typography>

            <form onSubmit={handleSubmit} className="searchForm">
                <div>
						<SearchIcon className="searchForm__icon" />
                </div>
                <InputBase name="search" id="search" placeholder="Keyword" type="search" className="searchForm__input" />
            </form>
        </Toolbar>
    </AppBar>
)
}