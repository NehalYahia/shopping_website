import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <>
                <div className="container my-3 text-white text-center text-weight-bold">
                    <div className="row">
                        <div className="col-4 bg-danger arrow-left p-4">
                            <p className="m-0"><i className="fas fa-plane rotate"></i> FREE SHOPPING</p>
                        </div>
                        <div className="col-4 bg-dark arrow-center p-4">
                            <p className="m-0"><i className="far fa-clock"></i> 30-DAYS RETURNS</p>
                        </div>
                        <div className="col-4 bg-danger arrow-right p-4">
                            <p className="m-0"><i className="fas fa-plane rotate"></i> FREE SHOPPING</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
