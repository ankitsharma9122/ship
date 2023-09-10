import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeQuestion.css";


const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
    </div>
  );
};

export default HomeMainbar;
