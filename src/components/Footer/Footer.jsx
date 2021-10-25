import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer p-5 container text-start">
                    <div className="row">
                        <div className="col-xl-6 col-sm-12 ">
                            <p className="h4">G<span className="text-danger">Ü</span>ZEL SHOPPING</p>
                            <p className="w-75 li">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
                            <p className="icon_color">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-youtube"></i>
                            </p>
                        </div>
                        <div className="col-xl-2 col-sm-12">
                            <p className="font-weight-bold head_list">Shopping online</p>
                            <ul type="none" className="p-0">
                                <li>Order Status</li>
                                <li>Shipping and Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-sm-12">
                            <p className="font-weight-bold head_list">Information</p>
                            <ul type="none" className="p-0">
                                <li>Gift Cards</li>
                                <li>Find a store</li>
                                <li>Newsletter</li>
                                <li>Bacome a member</li>
                                <li>Site feedback</li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-sm-12">
                            <p className="font-weight-bold head_list">Contact</p>
                            <ul type="none" className="p-0">
                                <li>store@uikit.com</li>
                                <li>Hotline: +1 131 138 138</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
