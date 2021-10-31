import React, { Component } from 'react'

export default class BreadCrumb extends Component {
    render() {
        return (
            <>
                <p className="pt-5 text-secondary container">
                    <i class="fas fa-home"></i>
                    / {this.props.path_name} {this.props.productname ?  ` / ${this.props.productname}` : ""}
                </p>
            </>
        )
    }
}
