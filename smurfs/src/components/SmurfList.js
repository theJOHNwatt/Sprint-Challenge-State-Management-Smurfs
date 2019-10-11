import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs, postSmurf} from '../actions';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    if (props.isFetching) {
        return <h2>Finding Surfs...</h2>;
    }

    return (
        <div>
            <SmurfForm />
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map (item => (
                <SmurfCard
                key={item.id}
                name={item.name}
                height={item.height}
                age={item.age}
                />
            ))}
        </div>
        
    )
}


const mapStatetoProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
        
    };
};

export default connect(mapStatetoProps, {fetchSmurfs, postSmurf})(SmurfList);