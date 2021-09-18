import React, { Component } from 'react'
import {Redirect , Route ,Switch} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Login from './components/login/Login'
import Sign_in from './components/sign_in/Sign_in'








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
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Sign_in" component={Sign_in}/>


        
        
      </>
    )
  }
}

