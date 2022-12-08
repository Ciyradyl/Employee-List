import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser"

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20")
    setUsers(response.data.results)
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <ul>
        {users.map((user, id) => (
          <li> <SingleUser user={user} key={id}></SingleUser> </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
