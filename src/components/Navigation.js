import React from 'react';
import {Link} from 'react-router-dom';


export default () => (
    <div>
        <Link exact path="/" className = "btn btn-primary" > ToDo List</Link>
      
        <Link  path="/new-item"  className="btn btn-secondary"> + Add ToDo</Link>
    </div>
)