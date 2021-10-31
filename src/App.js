import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Login from './components/login/Login'
import Sign_in from './components/sign_in/Sign_in'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import CategoryView from './pages/CategoryView/CategoryView'
import ProductPage from './pages/ProductPage/ProductPage'

export default class App extends Component {

  render() {
    return (
      <>

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign_in" component={Sign_in} />
          <Route path="/product-view/:name/:id" component={ProductPage} />
          <Route path="/category-view/:name" component={CategoryView} />
        </Switch>

        <Footer />








      </>
    )
  }
}

