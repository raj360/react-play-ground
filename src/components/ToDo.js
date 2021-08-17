import React from 'react';
import PropTypes from 'propt-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDo = ({title}) => (<ListGroup.Item>{title}</ListGroup.Item>);

ToDo.prototype = {
title:PropTypes.string.isRequired,
}

export default ToDo;

