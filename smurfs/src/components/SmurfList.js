import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions';
import SmurfForm from './SmurfForm';

const SmurfList = props => {


    return (
        <div></div>
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