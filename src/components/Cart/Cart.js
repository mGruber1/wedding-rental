import React from "react";

const Cart = (props) => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    {
                        props.cart.map((cartItem, index) => (
                            <div className="card mb-2" key={index}>
                                <div className="card-title text-center m-0">
                                    <span>
                                        {cartItem.title}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <img className="img-fluid" src={cartItem.image} />
                                        </div>
                                        <div className="col d-flex justify-content-between align-items-center">
                                            <h3>{cartItem.price} €</h3>
                                            <button type="button" className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash me-2" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                </svg>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="col">col 2</div>
            </div>
        </div>
    )
}

export default Cart;