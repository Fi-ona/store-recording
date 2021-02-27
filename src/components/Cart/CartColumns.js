import React, { Component } from 'react';
export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p class="text-uppercase">Total</p>
                </div>
            </div>
        </div>
    )
}