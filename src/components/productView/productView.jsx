import axios from 'axios'
import React, { Component } from 'react'
import AddButton from '../AddButton/AddButton'
import FavouriteButton from '../FavouriteButton/FavouriteButton'
import Rating from '../Rating/Rating'

export default class ProductView extends Component {

    state = {
        productDetails: [],
        count: [],
    }


    getProductDetails = async () => {
        await axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`).then(data => {
            this.setState({ productDetails: data.data, count: data.data.rating })
        })
    }

    componentDidMount = async () => {
        await this.getProductDetails();

    }
    render() {

        return (

            <>
                <div className="container">
                    <div className="row p-2 ">
                        <div className="col-6 py-5">
                            <img className="" src={this.state.productDetails.image} width="100%" height="500px" />
                        </div>
                        <div className="col-6 ">
                            <div className="py-5 px-2">
                                <h2>{this.state.productDetails.title}</h2>
                                <hr />
                                <p>{this.state.productDetails.description}</p>
                                <p className="font-weight-bold text-danger h3">${this.state.productDetails.price}</p>
                                <div className="h1">
                                    <Rating />
                                </div>
                                <p className="p-2 font-weight-bold">count: {this.state.count.count}</p>
                                <hr />
                            </div>
                            <div className="px-2">
                                <AddButton productcom={this.state.productDetails} style="btn btn-danger text-light font-weight-bold w-75" />
                                <FavouriteButton productcom={this.state.productDetails} style="btn w-25" />
                            </div>


                        </div>
                    </div>


                </div>
            </>
        )
    }
}
