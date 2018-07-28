import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home.jsx";
import Mine from "./pages/mine/Mine.jsx";
import More from "./pages/more/More.jsx";
import Category from "./pages/category/Category.jsx";
import Guide from "./pages/guider/Guider.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Tabs from "./components/Tabs.jsx";
class App extends Component {
  constructor () {
    super();
    this.state = {
      isLoad: localStorage.getItem("loaded") ? true : false
    }
  }
  render() {
    let appDom = null;
    if(this.state.isLoad) {
      appDom = (
      <Router>
        <div className="App">
          {/*根页面路由*/}
          <Switch>
            <Route path="/" exact render={()=>{
              return <Redirect to="/home"/>
            }}/>
            <Route path="/home" component={Home}/>
            <Route path="/Mine" component={Mine}/>
            <Route path="/More" component={More}/>
            <Route path="/Category" component={Category}/>
            <Route path="/Cart" component={Cart}/>
            <Route render={()=>{
              return <Redirect to="/home"/>;
            }}/>
          </Switch>
          <Tabs/>
        </div>
      </Router>
    );
    } else {
      appDom = <Guide onEnter={this.handAppEnter.bind(this)}/>
    }
    return appDom;
  }
  handAppEnter () {
    this.setState({
      isLoad: true
    })
    localStorage.setItem("loaded",true);
  }
}

export default App;
