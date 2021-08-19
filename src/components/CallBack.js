import React from 'react';
import {connect} from 'react-redux';
import {handleAuthenticationCallback} from '../actions';
import {Redirect} from 'react-router';

const mapStateToProps = (state) => ({
  user:state.user,
});

let CallBack = ({user,dispatch}) => {

  if(user)  return <Redirect to="/" />;
  
    dispatch(handleAuthenticationCallback());
  
  return <div className="text-center" >Loading user profile ...</div>

};

CallBack = connect(mapStateToProps)(CallBack);

export default CallBack;


