import React from 'react';

const SmurfCard = props => {
    return (
    <div className='smurf-card'>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <p>{props.height}</p>
    </div>
    )
};

export default SmurfCard;
