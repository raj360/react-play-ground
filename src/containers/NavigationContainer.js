import React from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => ({
  user: state.user
});

let NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
