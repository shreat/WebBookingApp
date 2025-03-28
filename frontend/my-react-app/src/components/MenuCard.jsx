import React from "react";

function MenuCard(props){
    return(
        <div className="card">
            <div className="card-body">
                <img src="\src\assets\react.svg"></img>
                <p className="card-title">{props.title}</p>
            </div>
        </div>
    );
}

export default MenuCard;