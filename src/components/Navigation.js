import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <div className = "p-2">
        <Link  to="/" className = "btn btn-primary" style={{marginRight: 10}} > To-Do List</Link>
        <Link  to="/new-item"  className="btn btn-secondary"> + Add New</Link>
    </div>
)