import React, {Component} from "react";
import './filter.scss';

export class GenderFilter extends Component {

    options = ["Girls", "Boys"];

    render() {
        return <div className="filterContainer">
            <ul>
                {this.options.map(item => (<li key={item}><a >{item}</a></li> ))}
            </ul>
        </div>
    }
}

