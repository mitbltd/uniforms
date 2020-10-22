import React from "react";

export function ContentItem(props) {

    return <div className='contentItem'>
        <img src={require("./../../img/dummy.jpeg")} />
        <h2>{props.name}</h2>
        {props.size && (<p>Size: {props.size}</p>)}
        {props.condition && ( <p>Condition: {props.condition}</p>)}
        {props.count && (<p>Count: {props.count}</p>)}
        { props.description && (<div>Description: {props.description}</div>)}
    </div>
}