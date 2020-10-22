import React, { Component } from 'react';
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import { GenderFilter } from "../filters/genderFilter";
import {SizeFilter} from "../filters/sizeFilter";
import "./shopComponent.scss"
import {ItemTypeFilter} from "../filters/itemTypeFilter";
import {ContentItems} from "../content/contentItems";
export default class ShopComponent extends Component {
    render() {
        return (
            <div className="shopComponent">
                    <Header/>

                <div className="mainArea">
                    <div className="leftFilter">
                        <SizeFilter/>
                    </div>

                    <div className="mainContent">
                    <ItemTypeFilter/>
                    <ContentItems/>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                    <div className="iconsMakeMeHappy">
                        Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </div>
                </div>
            </div>
        )
    }
}

