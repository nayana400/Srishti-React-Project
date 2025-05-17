import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:3002/Blog/ViewAllUsers")
      .then((response) => {
        const allUsers = response.data.data || [];
        const approvedUsers = allUsers.filter(user => user.approved === true && user.isActive === true);
        setUserCount(approvedUsers.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 p-5 text-center">
      <h2>Number of Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h4>Total Approved & Active Users: {userCount}</h4>
      )}
    </div>
  );
};

export default UserCount;
