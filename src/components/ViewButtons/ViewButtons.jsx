import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
class ViewButtons extends Component {
    render() {
        return (
            <>
               <div className="ViewButtons d-inline-block p-1 position-sticky">
                   <button className="btn text-white  m-1" onClick={this.props.vertical}><i class="fas fa-grip-vertical"></i></button>
                   <button className="btn text-white" onClick={this.props.horizontal}><i class="fas fa-grip-horizontal"></i></button>
                </div> 
            </>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        horizontal:()=>dispatch({type:'HORIZONTAL'}),
        vertical:()=>dispatch({type:'VERTICAL'}),
    }
}



export default connect(null, mapDispatchToProps)(ViewButtons)
