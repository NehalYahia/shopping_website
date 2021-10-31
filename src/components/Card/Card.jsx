import classNames from 'classnames'
import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom'
import Rating from '../Rating/Rating'
import './style.css'

export default class Card extends Component {
    state = {
        display: "d-none",
    }

    displayOverlay = async () => {
        await this.setState({ display: "d-block" })

    }

    hideOverlay = async () => {
        await this.setState({ display: "d-none" })

    }
    handleClick(){

        this.props.history.replace(`/Product-view/${this.props.productcom.category}/${this.props.productcom.id}`);
        window.location.reload();
        window.scroll(0,0);
    }

    render() {
        return (
            <>
                <div className="border border-secondery productCard" onMouseOver={this.displayOverlay} onMouseOut={this.hideOverlay} >
                    <div className="product_img" >
                        <div class="link" onClick={()=>this.handleClick()}   >
                            <img className="p-2" src={this.props.productcom.image} width="100%" height="250px" alt="" />
                        </div>
                    </div>
                    <div className={classNames(`${this.state.display} overlay text-center`)}>
                        <p className="font-weight-bold text-white h4 mt-4">{this.props.productcom.price}$</p>
                        <p className="h4">
                            <Rating />
                        </p>

                    </div>


                </div>
            </>
        )
    }
}
