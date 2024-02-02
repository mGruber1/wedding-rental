import React from "react";
import SearchResult from "../SearchResult/SearchResult";

const SearchResults = (props) => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                {props.searchResults.map((searchResult, index) => (
                    <SearchResult searchResult={searchResult} key={index}></SearchResult>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;
