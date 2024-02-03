import React from "react";
import Cart from "../Cart/Cart";

const SearchBar = (props) => {
    return (
        <div className="container mt-4 col-sm col-md-6 d-flex justify-content-center">
            <form className="w-50">
                <div className="form-group d-flex">
                    <input type="text"
                        className="form-control me-2"
                        id="searchbox"
                        placeholder="Search Wedding Rentals"
                        onChange={(e) => props.setSearchValue(e.target.value)}>
                    </input>
                    <button type="button" className="btn btn-primary me-2">Search</button>
                    {props.cart.length !== 0 ? <Cart cart={props.cart}></Cart> : ""}

                </div>
            </form>
        </div>
    )
}

export default SearchBar;