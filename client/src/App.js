import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "./utils/apis/gapi";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useEffect } from "react";

const start = () => {
  gapi.client.init({
    clientId: CLIENT_ID,
    scope: "",
  });
};

gapi.load("client:auth2", start);

function App() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) return;
    navigate("/auth");
  }, [user, navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
