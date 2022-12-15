const SingleUser = ({user}) => {
  return (
    <div className="single-user">
        <img className="user-image" src={user.picture.large} alt=""></img>
        <div className="user-info">
          <h5>{user.name.first} {user.name.last}</h5> 
          <p className="user-mail">{user.email}</p>
          <p className="user-country">{user.location.country}</p>
          <p className="user-phone">{user.phone}</p>
        </div>
    </div>
  );
};

export default SingleUser;
