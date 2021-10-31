import axios from 'axios'
import React, { Component } from 'react'
import ProductItem from '../productItem/ProductItem'
import ViewButtons from '../ViewButtons/ViewButtons'

export default class CategoryItems extends Component {
    state = {
        categoryProducts: []
    }
    getCategoryProducts = async () => {
        let data = await axios.get(`https://fakestoreapi.com/products/category/${this.props.path_name}`, this.state.categoryProducts)
        await this.setState({ categoryProducts: data.data })
    }

    componentDidMount = async () => {
        await this.getCategoryProducts();
    }
    render() {
        return (
            <>
                <div className="position-relative">
                    <ViewButtons/>
                    <div className="container">
                        <div className="row">
                            {this.state.categoryProducts.map((value, index) => {
                                return (
                                    <ProductItem key={index} productcom={value} categoryName={this.props.path_name} />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
