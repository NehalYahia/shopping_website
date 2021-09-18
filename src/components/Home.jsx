import React, { Component } from 'react'
import Bestseller from './Bestseller/Bestseller'
import Categories from './categories/Categories'
import Header from './Header/Header'
import Features from './Features/Features'
import Offers from './Offers/Offers'
import axios from 'axios'
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
                <Header/>
                <Features/>
                <Offers/>
                <Bestseller />
                <Categories/>
            </>
        )
    }
}

