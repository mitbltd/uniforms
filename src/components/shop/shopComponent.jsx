import React, { Component } from 'react';
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

export default class ShopComponent extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

