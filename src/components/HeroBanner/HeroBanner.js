import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <div className="container-fluid p-0">
            <div className="w-100 h-100 hero-banner">
                <div className="row h-100">
                    <div className="col ps-5 h-100 d-flex flex-column align-items-start justify-content-center border">
                        <div className="text-center text-white">
                            <h1>Rent Wedding Stuff</h1>
                            <button type="button" className="btn btn-primary">Click Me</button>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default HeroBanner;