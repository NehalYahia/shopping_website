import React, { Component } from 'react'
import img from "../../images/Online-fashion-retailers.jpg"


export default class Header extends Component {
    render() {
        return (
            <>
            <div className="container-fluid p-0 position-relative">
                <img className="d-block w-100 h-100" src={img} alt="" />
                <div className="position-absolute w-25 text-center py-4 header-text">
                    <p className="text-black-50 m-0 font-italic">Limited Time OIffer</p>
                    <p className="font-weight-bold m-0">SELLECT ITEMS</p>
                    <p className="text-danger font-weight-bolder m-0 display-4"><sup>EGP</sup>100</p>
                    <p className="text-black-50 font-italic">Limited Quantities available</p>
                    <a className="btn btn-danger">SHOP NOW</a>
                </div>
            </div>
                
            </>
        )
    }
}
