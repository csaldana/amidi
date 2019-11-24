import React, {Component} from "react";
import Slider from "./Slider";
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Company from "./Company";

class Index extends Component{
    render() {

        return(
            <main>
                <Slider />
                <Company />
            </main>
        );
    }
}

export default Index;