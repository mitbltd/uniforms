import React, {Component} from "react";
import "./filter.scss";
import {getValue, replaceQueryPart} from "../../utils/queryStringUtils";

export class ItemTypeFilter extends Component{
    types = ["all","Polo Shirts", "PE T-Shirts", "Jumpers", "Cardigans", "Summer Dress", "Trousers", "Coats", "Skirts"];

    click(item) {
        replaceQueryPart("type", item);
    }

    render()
    {
        const activeItem = getValue("type");

        return <div className="filterContainerVertical">
            <ul>
                {this.types.map(item => (<li className={activeItem==item ? "active" : ""} key={item} onClick={() => this.click(item)}><a >{item}</a></li> ))}
            </ul>
        </div>

    }

}