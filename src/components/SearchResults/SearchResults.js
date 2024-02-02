import React from "react";

const SearchResults = (props) => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                {props.searchResults.map((searchResult, index) => (
                    <div key={searchResult.id || index} className="col-md-3 mb-4">
                        <div className="card h-100 d-flex justify-content-center align-items-center">
                            <div className="card-body">
                                <img src={searchResult.image} className="img-fluid"></img>
                            </div>
                            <div className="card-footer text-center">{searchResult.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;
