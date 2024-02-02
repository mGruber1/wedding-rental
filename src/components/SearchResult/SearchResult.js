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
                <div className="card-footer text-center d-flex justify-content-between align-items-center">
                    <h5 className="m-0">{props.searchResult.price} €</h5>
                    <button type="button" onClick={() => props.addToCart(props.searchResult)} className="btn btn-sm btn-success">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
