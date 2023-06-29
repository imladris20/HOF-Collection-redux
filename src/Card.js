/* Always initialize with syntax below

import React from "react";

const Card = () => {
    return (

    )
}

export default Card;

*/

import React from "react";

const Card = (props) => {
    const {name,  backnumber, team, position} = props;
    return (
        <div className="tc bg-light-red dib br3 pa3 ma2 dim bw2 shadow-5">
            <img alt={`${name}`} src={`https://robohash.org/set_set4/${name}${backnumber}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{`#${backnumber} in ${team}`}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default Card;

