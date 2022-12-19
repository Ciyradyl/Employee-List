import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [anUser, setAnUser] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState(null)

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    if(isShown === false){
      setIsShown((current) => !current);
    }
  };

  const handleClose = () => {
    if (isShown === true) {
      setIsShown((current) => !current);
      setActive(null);
    }
  }

  return (
    <div className="user-list">
      {isShown && (
        <div className="user-details">
          <button onClick={handleClose} className="user-details-button">X</button>
          <img className="user-details-image" src={anUser[0]} alt=""></img>
          <div className="user-details-info">
            <h3 className="user-details-title">{anUser[1]}({anUser[3]})</h3>
            <p className="user-details-sub">{anUser[4]}</p>
            <p className="user-details-sub">{anUser[5]}, {anUser[6]}</p>
            <p className="user-details-sub">{anUser[2]}</p>
            <p className="user-details-sub">{anUser[7]}</p>
          </div>
        </div>
      )}
      <ul>
        {users.map((user, id) => (
          <li 
          onClick={handleClick}>
            {" "}
            <SingleUser
              user={user}
              setAnUser={setAnUser}
              active={active}
              setActive={setActive}
              key={id}
            ></SingleUser>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
