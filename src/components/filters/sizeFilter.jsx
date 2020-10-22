import React, {Component} from "react";
import "./filter.scss";
import {getValue, replaceQueryPart} from "../../utils/queryStringUtils";

export class SizeFilter extends Component{
   ages = ["all","3-4", "5-6", "7-8", "9-10", "11-12" ]
    clickFunction = (item) => {
        replaceQueryPart("size", item);
    };

    render() {
        const activeItem = getValue("size");

       return (<div className="filterContainer">
       <ul>
           {this.ages.map(item=> (<li className={activeItem==item ? "active" : ""} key={item} onClick={(x,y) => this.clickFunction(item)}><a>{item}</a></li> ))}
       </ul>
       </div>)
    }
}
