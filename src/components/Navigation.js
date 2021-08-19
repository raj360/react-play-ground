import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button  from 'react-bootstrap/Button';
import {signIn,signOut } from '../Auth';

const Profile = styled.span`
    margin-left: 15px;
`;

const ProfileImage = styled.img`
    border-radius:50%;
    max-width: 30px;
    margin-right: 5px;
`;
 

export default ({user}) => (
    <div className = "p-2">
        <Link  to="/" className = "btn btn-primary" style={{marginRight: 10}} > To-Do List</Link>
        <Link  to="/new-item"  className="btn btn-secondary"> + Add New</Link>
        
        {!user && (<Button onClick = {signIn} style={{marginLeft: 10}} >Sign In</Button>)}
        
        {
          user && (
                <>
                  <Button onClick = {signOut} style={{marginRight: 10,marginLeft: 10}} >Sign Out </Button>
                  
                  <Profile>
                      <ProfileImage src={user.profile.picture} />
                      {user.profile.email}
                  </Profile>
                </>
          )
        }
        
    </div>
);