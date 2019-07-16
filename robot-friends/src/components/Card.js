import React from 'react';

const Card = (props) => {
    return(
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow shadow-3">
            <img src = {`https://robohash.org/${props.id}?size=200x200`} alt = 'robotImage'></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;