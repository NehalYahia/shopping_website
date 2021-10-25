import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Cart from '../cart/cart'
import Favourite from '../favouriteItems/Favourite'
import { connect } from 'react-redux'


class Navbar extends Component {

    state = {
        categories: [
        ]
    }

    // get categories of products
    getCategories = async () => {
        let { data } = await axios.get(`https://fakestoreapi.com/products/categories`)
        this.setState({
            categories: data, isReady: true
        });
    }

    async componentDidMount() {
        await this.getCategories();
    }

    render() {
        return (
            <>

                <div className="header sticky-top bg-white">
                    <div className="container">
                        <form className="form-inline mb-3 d-inline-block w-25">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
                        </form>

                        <h1 className="text-center display-4 d-inline-block w-50 "><Link className="text-dark" to="/Home">G<span className="text-danger">Ü</span>ZEL SHOPPING</Link></h1>

                        <div className="cart-group d-inline-block w-25 text-right">
                            <button class="btn btn-danger" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                <i className="fas fa-cart-plus"></i>
                                <span className="p-3">{this.props.products.length}</span>
                            </button>
                            <button class="btn btn-danger ml-1" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>

                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <Cart />
                    </div>
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <Favourite />
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav w-75">
                                    <li className="nav-item mr-3 ">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>

                                    {this.state.categories.map((value, index) => {
                                        return (

                                            <li key={index} className="nav-item mr-3">
                                                <Link className="nav-link" to={`/categoryProducts/${value}`}>{value}</Link>
                                            </li>

                                        )


                                    })}

                                </ul>


                                {/* social media */}
                                <ul className="navbar-nav mr-5 pr-5">
                                    <li className="nav-item mr-2 ml-5 pl-5 h2">
                                        <Link className="nav-link" to="/"><i class="fab fa-instagram-square"></i> <span className="sr-only">(current)</span></Link>
                                    </li>

                                    <li className="nav-item mr-2 h2">
                                        <Link className="nav-link" to="/"><i class="fab fa-facebook-square"></i></Link>
                                    </li>

                                    <li className="nav-item mr-2 h2">
                                        <Link className="nav-link" to="/"><i class="fab fa-twitter-square"></i></Link>
                                    </li>

                                    <li className="nav-item mr-2 h2">
                                        <Link className="nav-link" to="/"><i class="fab fa-pinterest-square"></i></Link>
                                    </li>


                                </ul>


                                <button className="btn border border-secondary ">
                                    <Link className="text-secondary " to="/Login" >
                                        <i class="fas fa-user-alt"></i>
                                    </Link>
                                </button>


                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.addpro.products,
    }
}





export default connect(mapStateToProps, null)(Navbar)