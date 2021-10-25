import React, { Component } from 'react'
import { connect } from 'react-redux'


class FavouriteButton extends Component {
    state = {
        style: {
            "color": "white",
            "background-color": "#6c757d",
            "outline": "none"
        },
    }

    changeColor = async () => {
        let change = {
            "color": "red",
            "background-color": "rgba(217, 157, 54, 0)",

        }
        let current = {
            "color": "white",
            "background-color": "#6c757d"
        }
        this.state.style['color'] == "white" && this.state.style['background-color'] == "#6c757d" ?
            await this.setState({ style: change }) : await this.setState({ style: current })

    }
    render() {
        return (
            <>
                <button className={`${this.props.style}`}
                    style={this.state.style}
                    onClick={() => { this.changeColor(); this.props.favouriteitem(this.props.productcom) }}
                >
                    <i className="fas fa-heart"></i>
                </button>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        favouriteitem: (item) => dispatch({ type: 'FAVOURITEITEM', payload: item }),
    }
}

export default connect(null, mapDispatchToProps)(FavouriteButton)
