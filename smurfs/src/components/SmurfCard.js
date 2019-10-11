import React from 'react';

const SmurfCard = props => {
    return (
    <div className='smurf-card'>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Height: {props.height}</p>
    </div>
    )
};

export default SmurfCard;
