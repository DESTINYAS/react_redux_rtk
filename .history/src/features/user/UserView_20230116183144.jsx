import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch;
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
    </div>
  );
};
