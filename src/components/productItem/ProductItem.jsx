import classNames from 'classnames'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddButton from '../AddButton/AddButton'
import FavouriteButton from '../FavouriteButton/FavouriteButton'
import './style.css'

class ProductItem extends Component {  
    render() {
        return (
            <>

                <div className={classNames(this.props.view=="horizontal"? "horizontal":"vertical", "productItem" ) } >
                    <div className="product_img">
                        <Link to={`/Product-view/${this.props.productcom.category}/${this.props.productcom.id}`}>
                            <img className="p-3" src={this.props.productcom.image} width="100%" height="250px" alt="" />
                        </Link>
                    </div>
                    <div className="product_info pb-2 pt-5 px-4">
                        <p className="text-left text-truncate">{this.props.productcom.title}</p>
                        <p className="font-weight-bold">{this.props.productcom.price}$</p>
                        <AddButton productcom={this.props.productcom} style="w-75 btn btn-light text-secondary font-weight-bold addCart" />
                        <FavouriteButton productcom={this.props.productcom} style="btn w-25 favourite" />
                    </div>
                </div>

            </>
        )   
    }
}


const mapStateToProps = (state) => {
    return {
        // products: state.products,
        view:state.productView.view

    }
}

export default connect(mapStateToProps, null)(ProductItem)

