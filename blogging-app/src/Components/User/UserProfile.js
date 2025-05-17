import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      axios.post(`http://localhost:3002/Blog/ViewOneUser/${userId}`)
        .then(response => {
          const data = response.data.data;
          if (Array.isArray(data) && data.length > 0) {
            setUserData(data[0]);
          }
        })
        .catch(error => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userId]);

  return (
    <div className="card p-4 shadow-sm">
      {userData ? (
        <>
          <h3>My Profile</h3>
          <p><strong>Email:</strong> {userData.Email}</p>
          <p><strong>Phone Number:</strong> {userData.PhoneNo}</p>
          <p><strong>Date of Birth:</strong> {new Date(userData.DOB).toLocaleDateString()}</p>
          <p><strong>Account Status:</strong> {userData.isActive ? 'Active' : 'Inactive'}</p>
        </>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default UserProfile;
