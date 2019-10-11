import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';
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
            {props.error && <p>{props.error}</p>}
            {props.smurfsApi.map (item => (
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
        smurfsApi: state.smurfsApi,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStatetoProps, {fetchSmurfs})(SmurfList);