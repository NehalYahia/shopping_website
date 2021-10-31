import React, { Component } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import CarouselSlider from '../../components/carouselSlider/carouselSlider';
import CategoryItems from '../../components/categoryItems/CategoryItems'

export default class CategoryView extends Component {
    render() {
        var nameFromUrl = `${this.props.match.params.name}`; // category nmae
        return (
            <>
                <div className="">
                    <BreadCrumb path_name={nameFromUrl} />
                    <CategoryItems path_name={nameFromUrl} />
                    <CarouselSlider  {...this.props} API={`https://fakestoreapi.com/products`} textHeader="You May Also Like"/>

                </div>
            </>
        )
    }
}
