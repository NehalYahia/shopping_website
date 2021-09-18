import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from '../productItem/ProductItem'

export default class Bestseller extends Component {
    state = {
        AllProducts: []
        
    }

    getAllProducts = async () => {
        let { data } = await axios.get(`https://fakestoreapi.com/products`)
        await this.setState({ AllProducts: data })


    }

    componentDidMount = async () => {
        await this.getAllProducts();


    }



    render() {


        return (
            <>
                <div className="container">
                    <div className="row my-5">
                        <hr className="col-3 border border-dark" />
                        <h2 className="col-3 text-center">BEST SELLER</h2>
                        <hr className="col-3 border border-dark" />
                    </div>

                    <div className="row">
                    {this.state.AllProducts.map((value, index) => {
                            return (
                       <ProductItem productcom={value}/>

                       )


                    })}
                    </div>

                </div>

            </>
        )
    }
}




