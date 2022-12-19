import React, {} from "react";

const SingleUser = ({user, setAnUser, active, setActive}) => {


  const getName = () => {

    setActive(user);

    setAnUser(
      [
        user.picture.large,
        user.name.first + " " +  user.name.last,
        user.gender,
        user.login.username,
        user.email,
        user.location.country,
        user.location.city,
        user.phone
      ]
    )
  }

  return (
    <div className={`single-user ${active === user && "active"}`} onClick={getName}>
        <img className="user-image" src={user.picture.large} alt=""></img>
        <div className="user-info">
          <h5>{user.name.first} {user.name.last}</h5> 
        </div>
    </div>
  );
};

export default SingleUser;
