import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fakeUser = {
      username: 'john_doe',
      email: 'john.doe@example.com',
      // Add other user details as needed
    };

    setUser(fakeUser);
  }, []);

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      {user ? (
        <>
          <div>
            <strong>Username:</strong> {user.username}
          </div>
          <div>
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
