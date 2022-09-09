import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../src/redux/actions/post";

const Profile = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id));
  });
  const userData = useSelector((state) => state.post.loginUser);
  return (
    <>
      <div>{userData?.name} </div>
      <div>{userData?.email} </div>
    </>
  );
};

export default Profile;
