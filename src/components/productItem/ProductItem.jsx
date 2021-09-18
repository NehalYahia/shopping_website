import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ProductItem extends Component {


    state = {
        style:{
            "color":"white",
            "background-color":"#6c757d",
            "outline":"none"
        }
        
    }

    changeColor=async()=>{
        let change= {
            "color":"red",
            "background-color":"white",
            
        }
        let current= {
            "color":"white",
            "background-color":"#6c757d"
        }
        this.state.style['color']=="white"&& this.state.style['background-color']=="#6c757d"?await this.setState({style:change}):await this.setState({style:current})

    }
    render() {
        return (
            <>
              
                                <div className="col-3 my-5 border border-secondary p-2">
                                    <button className="btn" style={this.state.style}
                                            onClick={() =>{this.changeColor();this.props.favouriteitem(this.props.productcom)}}>
                                        <i className="fas fa-heart"></i>
                                    </button>
                                    <img src={this.props.productcom.image} width="100%" height="250px" alt=""></img>
                                    <p className="text-center text-truncate">{this.props.productcom.title}</p>
                                    <button className="btn btn-danger w-100" onClick={() => this.props.additem(this.props.productcom)}>Add to cart</button>
                                    

                                </div>

                          
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // data: (item) => dispatch({ type: 'CARTITEMS', payload: item }),
        additem: (item) => dispatch({ type: 'ADDITEMS', payload: item }),
        favouriteitem: (item) => dispatch({ type: 'FAVOURITEITEM', payload: item }),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)

