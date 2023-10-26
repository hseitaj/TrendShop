import React, { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';

function UserProfile() {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="user-profile">
      {user && (
        <>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;
