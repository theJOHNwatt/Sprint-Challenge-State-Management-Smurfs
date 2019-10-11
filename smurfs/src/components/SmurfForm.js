import React, {useState} from 'react';
import {postSmurf} from '../actions';
import { connect } from 'react-redux';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        height: '',
        age:''
    })
console.log('new smurf',newSmurf);
    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf, [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <input
            type='text'
            name='name'
            value={newSmurf.name}
            onChange={handleChanges}
            placeholder= 'Name of Smurf'
            />
            <input
            type='text'
            name='height'
            value={newSmurf.height}
            onChange={handleChanges}
            placeholder= 'Height of Smurf'
            />
            <input
            type='text'
            name='age'
            value={newSmurf.age}
            onChange={handleChanges}
            placeholder= 'Age of Smurf'
            />
            <button onClick={() => props.postSmurf(newSmurf)}>Add New Smurf</button>
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

export default connect(mapStatetoProps, {postSmurf})(SmurfForm);

// export default SmurfForm;

