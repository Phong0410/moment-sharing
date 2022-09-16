import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user, token, loading } = useSelector((state) => state.auth);
  return (
    <div>
      <p>{user?.name}</p>
    </div>
  );
};

export default Home;
