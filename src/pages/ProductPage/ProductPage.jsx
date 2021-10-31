import React, { Component } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CarouselSlider from '../../components/carouselSlider/carouselSlider';
import ProductView from '../../components/productView/productView';

export default class ProductPage extends Component {
    state = {
        productname: ""
    }
    productName = (name) => {
        this.setState({ productname: name })
    }

    render() {
        var nameFromUrl = `${this.props.match.params.name}`; // category name
        var idFromUrl = `${this.props.match.params.id}`; // product id
        console.log(this.productName)

        return (

            <>
                <div className="container">
                    <BreadCrumb path_name={nameFromUrl} productname={this.state.productname} />
                    <ProductView path_id={idFromUrl} selectProductName={this.productName} />
                    <CarouselSlider  {...this.props} API={`https://fakestoreapi.com/products`} textHeader="You May Also Like"/>

                </div>
            </>

        )
    }
}
