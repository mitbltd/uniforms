import React, {Component} from "react";
import itemsForSales from './../../data/itemsForSales.json'
import {ContentItem} from "./contentItem";
import {getFilterComposite} from "../../utils/filterUtils";
import "./contentItems.scss";

export class ContentItems extends Component
{
    render() {
        console.log(itemsForSales);
        console.log(itemsForSales.items[0]);
        const filter = getFilterComposite();

        return <div className='contentItems'>
            <ul>
                {itemsForSales.items.filter(filter).map(item=> <li><ContentItem {...item}/></li>)}
            </ul>
        </div>

    }
}