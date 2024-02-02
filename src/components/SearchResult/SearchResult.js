import React from "react";

const SearchResult = (props) => {
    return (
        <div key={props.searchResult.id || props.key} className="col-md-3 mb-4">
            <div className="card h-100 d-flex flex-column">
                <div className="card-body">
                    <img src={props.searchResult.image} className="img-fluid" alt={props.searchResult.title} />
                </div>
                <div className="card-footer text-center" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                    <span>{props.searchResult.title}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
