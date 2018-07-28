import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Guider extends Component{
    render(){
        return (
            <div id="guider">
            <div className="swiper-container" ref="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
                <h1>指引页面</h1>
                <button onClick={this.enterAppAction.bind(this)}>进入</button>
            </div>
        )
    }
    enterAppAction(){
        //调用app组件的进入事件
        this.props.onEnter();
    }
    componentDidMount () {
        /*this.swiper = new Swiper (this.refs.swiper,{

        })*/
    }
}

Guider.propTypes = {
    onEnter: PropTypes.func
}

export default Guider;