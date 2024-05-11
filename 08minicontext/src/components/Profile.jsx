import React from "react";
import userContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) return <h1>Not Logged in</h1>;
  return <div>Profile: {user.username}</div>;
};

export default Profile;
