import React, { Component } from 'react'
import product from '../../productes'
import img1 from "../../images/images (1).jpg"
import img2 from "../../images/Fashion-Accessories.jpg"

export default class Offers extends Component {
    render() {
        return (
            <>
               <div className="container">
                   <div className="row">
                       <div className="col-7 p-0 border border-dark">
                           
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                                        <div className="carousel-inner">
                                            <div className="position-absolute w-50 carousel-text">
                                                <p className="text-dark-50 pl-2 ">CREATE YOUR <span className="m-5 pl-4">INDIVIDUALITY</span></p>
                                            </div>
                                        {product.map((value,index)=>{
                                          if(value.category =="men's clothing")
                                           { if(index==0)
                                                return(
                                                    <div key={index} className="carousel-item active carousel-show">
                                                        <img src={value.image} className="d-block w-100" alt="..."/>
                                                    </div>
                                                )
                                            else
                                            return(
                                                <div key={index} className="carousel-item  carousel-show">
                                                    <img src={value.image} className="d-block w-100" alt="..."/>
                                                </div>
                                            )
                                                 }
                                        })}
                                        
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                            

                       </div>
                       <div className="col-5">
                           <div className="row border border-dark position-relative my-1 ml-1">
                               <img className="w-100 h-100" src={img1} alt="" ></img>
                               <div className="w-50 position-absolute text-white offer-text text-center">
                                   <p className="" >women's clothing</p>
                                   <p className="">50%</p>
                               </div>
                            </div>
                            <div className="row border border-dark position-relative my-1 ml-1">
                                <img className="w-100 h-100" src={img2} alt="" ></img>
                                <div className="w-50 position-absolute text-white offer-text2 text-center">
                                    <p className="" >accessories</p>
                                    <p className="">50%</p>
                                </div>
                            </div>
                       </div>
                   </div>
               </div> 
            </>
        )
    }
}
