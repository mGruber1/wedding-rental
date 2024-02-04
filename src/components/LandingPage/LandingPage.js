import React from "react";
import HeroBanner from "../HeroBanner/HeroBanner";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


const LandingPage = (props) => {
    return (
        <>
            <HeroBanner />
            <SearchBar setSearchValue={props.setSearchValue} cart={props.cart} />
            <SearchResults searchResults={props.searchResults} cart={props.cart} addToCart={props.addToCart} />
        </>
    )
}

export default LandingPage;