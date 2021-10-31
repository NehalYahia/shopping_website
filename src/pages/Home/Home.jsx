import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import Features from "../../components/Features/Features"
import Bestseller from '../../components/Bestseller/Bestseller'
import Categories from '../../components/categories/Categories'
// import Offers from './Offers/Offers'
import axios from 'axios'
import CarouselSlider from '../../components/carouselSlider/carouselSlider'
export default class Home extends Component {
    //     state={
    //         products:[]
    //     }

    //     getAllProducts=async()=>{
    //         let {data}= await axios.get(`https://fakestoreapi.com/products`)
    //         this.setState({products:data})


    //     } 

    //     componentDidMount=async ()=>{
    //        await this.getAllProducts();




    //   }



    render() {
        return (

            <>
                <Header />
                <Features />
                {/* <Offers/> */}
                <Bestseller />
                <Categories />
                <CarouselSlider  {...this.props} API={`https://fakestoreapi.com/products`} textHeader="Selected For You" />
            </>
        )
    }
}

