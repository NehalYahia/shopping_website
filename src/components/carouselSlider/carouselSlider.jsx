import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios'
import ProductItem from '../productItem/ProductItem';
import './style.css'
import Card from '../Card/Card';
export default class CarouselSlider extends Component {
    constructor(props) {
        super();
        this.state = {
            activeItemIndex: 0,
            width: window.innerWidth,
            Products: []
        };
        window.addEventListener("resize", this.update);
    }

    getProducts = async () => {
        let { data } = await axios.get(this.props.API)
        await this.setState({ Products: data })
    }

    update = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    setActiveItemIndex = (value) => {
        this.setState({ activeItemIndex: value });
    }

    componentDidMount = async () => {
        await this.getProducts();
    }


    componentDidMount() {
        this.update();
    }

    
    render() {
        const { activeItemIndex } = this.state;
        const chevronWidth = 100;
        var x; //Number of cards to show per slide.
        if (this.state.width <= 576) {
            x = 1
        }
        else if (this.state.width <= 768) {
            x = 3
        }
        else {
            x = 4
        }


        return (
            <>
                <div className="pt-3">
                    <h2 className="text-center py-3 fontFamily">{this.props.textHeader}</h2>
                    <div className="container" >
                        <ItemsCarousel
                            requestToChangeActive={this.setActiveItemIndex}
                            activeItemIndex={activeItemIndex}  //which item should be active.
                            numberOfCards={x} //Number of cards to show per slide.
                            gutter={10} //Space between cards.
                            leftChevron={<button className="btn btn-danger">{<i class="fas fa-chevron-left"></i>}</button>}
                            rightChevron={<button className="btn btn-danger">{<i class="fas fa-chevron-right"></i>}</button>}
                            outsideChevron  // the chevron will be rendered outside the carousel.
                            chevronWidth={chevronWidth}
                            disableSwipe  //swiping on touch devices.
                        >

                            {this.state.Products.map((value, index) => {
                                return (
                                    <Card {...this.props} key={index} productcom={value} />

                                )


                            })}

                        </ItemsCarousel>
                    </div>


                </div>

            </>
        )
    }
}
