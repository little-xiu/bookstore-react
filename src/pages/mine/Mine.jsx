import React, {Component} from 'react'
import Header from "../../components/header.jsx"
class Mine extends Component{
    render(){
        return (
            <div id="mine" className="page">
                <Header showBack>我的</Header>
            </div>
        )
    }
}

export default Mine;