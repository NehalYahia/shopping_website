import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddButton extends Component {

    state = {
        btnText: "Add to cart",

    }

    changeBtnText = async () => {
        await this.setState({ btnText: [<i class="fas fa-check"></i>] })
        setTimeout(() => {
            this.setState({ btnText: "Add to cart" })
        }, 3000)

    }
    render() {
        return (
            <>
                <button className={`${this.props.style}`}
                    onClick={() => { this.props.additem(this.props.productcom); this.changeBtnText() }}
                >
                    {this.state.btnText}
                </button>

            </>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        additem: (item) => dispatch({ type: 'ADDITEMS', payload: item }),
        // favouriteitem: (item) => dispatch({ type: 'FAVOURITEITEM', payload: item }),
    }
}

export default connect(null, mapDispatchToProps)(AddButton)
