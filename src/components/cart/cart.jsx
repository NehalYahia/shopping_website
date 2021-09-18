import React, { Component } from 'react'
import { connect } from 'react-redux';

class cart extends Component {

    // async componentDidUpdate(){
    //    await this.props.totalprice()
    // }
  
    

    render() {
        return (
            <>


                <div className="card card-body">
                    {this.props.products?.length===0?<h4 className="text-center text-danger border border-danger m-0 p-3">Your Cart Is Empty  <i className="fas fa-cart-plus"></i></h4>:
                    
                    <div className="container">
                    <div className="row">
                        <div className="col-8 bg-secondary p-5">
                            <h2 className="pb-3">YOUR SHOPPING CART</h2>
                            {this.props.products?.map((value, index) => {
                                return (
                                    <div key={index} className="row my-2 border">
                                        <div className="col-2">
                                            <img src={value.image} className="img-thumbnail" alt="" />
                                            {/* <p className="text-center">{value.title}</p> */}
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <button className="btn btn-danger"onClick={() =>this.props.decrease(value)} >-</button>
                                        </div>
                                        <div className="col-2 align-self-center">
                                           {value.qty}
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <button className="btn btn-warning" onClick={() =>this.props.increase(value)}>+</button>
                                        </div>
                                        <div className="col-2 align-self-center">
                                            {value.price}$
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <button className="btn btn-danger" onClick={() =>this.props.delete(value)}><i class="fas fa-trash-alt"></i></button>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                        <div className="col-4 bg-dark">
                            <div className="text-center bg-warning m-3 p-5 h3 align-self-center">
                                <p>TOTAL COST:</p>
                                <p>{this.props.totalprice}</p>
                            </div>
                        </div>


                    </div>

                </div>
                    }
               

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addpro.products,
        totalprice:state.addpro.totalprice
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        delete:(value)=>dispatch({type:'DELETEITEMS',payload:value}),
        increase:(value)=>dispatch({type:'INCREASE',payload:value}),
        decrease:(value)=>dispatch({type:'DECREASE',payload:value}),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(cart)
