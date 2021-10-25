import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Login from './components/login/Login'
import Sign_in from './components/sign_in/Sign_in'
import ProductView from './components/productView/productView'
import CategoryProducts from './components/categoryProducts/CategoryProducts'
import Footer from './components/Footer/Footer'







export default class App extends Component {
  // state={
  //   cartitems:[]
  // }


  //   handleUpdateCart(data)
  // {
  //   this.setState({cartitems:data})

  // }
  render() {
    return (
      <>

        {/* <Navbar cartitems={this.state.cartitems} updateCart={this.handleUpdateCart.bind(this)}/> */}
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign_in" component={Sign_in} />
          <Route path="/productView/:id" component={ProductView} />
          <Route path="/categoryProducts/:name" component={CategoryProducts} />
          <Footer />








      </>
    )
  }
}

