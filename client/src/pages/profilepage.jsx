import React, { useState, useEffect } from 'react';
import '../css/profile.css'

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fakeUser = {
      username: 'Aayur',
      email: 'aayur@gmail.com',
      // Add other user details as needed
    };

    setUser(fakeUser);
  }, []); 

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {user ? (
        <>
          <div className='centerme'>
            <strong>Username:</strong> {user.username}
          </div>
          <div className='centerme'>
            <strong>Email:</strong> {user.email}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
