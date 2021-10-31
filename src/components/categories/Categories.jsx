import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import './style.css'
export default class Categories extends Component {
    state = {
        categories: [
        ]
    }


    getData = async () => {
        let { data } = await axios.get(`https://fakestoreapi.com/products/categories`)
        console.log(data);
        this.setState({
            categories: data
        });
    }


    componentDidMount() {
        this.getData();
    }


    render() {

        return (

            <>

                <div className="container-fluid bg-dark categories-bg py-5">
                    <div className="d-flex justify-content-around ">
                        {this.state.categories.map((value, index) => {

                            return (
                                <>
                                    <div key={index} className=" h5 text-center align-self-center" style={{ "width": "200px" }}>
                                        <Link className="text-white text-decoration-none" to={`/category-view/${value}`}>{value}</Link>
                                    </div>
                                    {index == 1 ?
                                        <div className=" my-5 text-center">
                                            <button className="btn btn-danger px-5 w-100 h-100">SHOP NOW</button>
                                        </div>
                                        :
                                        " "
                                    }

                                </>

                            )



                        })}
                    </div>
                </div>

            </>
        )
    }
}
