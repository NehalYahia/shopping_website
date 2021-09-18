import React, { Component } from 'react'
import product from "../../productes"
import axios from 'axios'
export default class Categories extends Component {
    state={
        categories:[
        ]
    }
     

    getData= async ()=>{
        let{data}=await axios.get(`https://fakestoreapi.com/products/categories`)
        console.log(data) ;
        this.setState({
            categories:data
        });
    }


    componentDidMount(){
        this.getData();
    }
   

    render() {

        return (
            
            <>

                <div className="container-fluid bg-warning categories-bg py-5">
                    <div className="container">
                        <div className="row ">
                            {this.state.categories.map((value,index)=>{
                                return(
                                    <div key={index} className="col-2 h5 text-center my-5">
                                        <p>{value}</p>
                                    </div>

                                )
                            

                            })}
                            <div className="col-4 my-5 text-center">
                                <button className="btn btn-danger ml-5 w-100 h-100">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </>
        )
    }
}
