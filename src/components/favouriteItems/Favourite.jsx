import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
 class Favourite extends Component {
    render() {
        return (
            <>

                <div className="card card-body">
                    {this.props.favouriteItem?.length===0?
                    <h4 className="text-center text-danger border border-danger m-0 p-3">
                        YOUR FAVOURITE LIST Is Empty <i className="fas fa-heart"></i>
                    </h4>
                        :
                    
                    <div className="container">
                        <div className="row p-5">
                            <h2 className="pb-3">YOUR FAVOURITE ITEMS <i className="fas fa-heart"></i></h2>
                            {this.props.favouriteItem?.map((value, index) => {
                                return (
                                    <div key={index} className="row my-2 border w-100 favourite_item">
                                        <div className="col-9 p-3">
                                            <img src={value.image} className=""
                                                 width="100px" 
                                                 height="100px" 
                                                 style={{"object-fit":"contain"}} 
                                                 alt="" 
                                            />
                                            <p className="text-center d-inline-block p-5 w-50 title">{value.title}</p>
                                            <p className="text-center d-inline-block p-5 font-weight-bold " >{value.price}$</p>
                                        </div>
                                        <div className="col-3 d-flex ">
                                        <button className="btn btn-danger w-50 align-self-center mx-2" 
                                                onClick={() => this.props.additem(value)}>
                                            Add to cart
                                        </button>
                                        <button className="btn bg-white border border-danger text-danger align-self-center "
                                                onClick={() => this.props.favouriteitem(value)} >
                                             <i className="fas fa-heart"></i>
                                         </button>
                                        </div>
                                       
                                    </div>
                                )
                            })}

                        


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
        favouriteItem: state.favourite.favouriteItem
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        additem: (item) => dispatch({ type: 'ADDITEMS', payload: item }),
        favouriteitem: (item) => dispatch({ type: 'FAVOURITEITEM', payload: item })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)

