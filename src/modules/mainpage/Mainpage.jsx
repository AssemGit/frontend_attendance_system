import React from "react";
import "./mainpage.css";
import SignUp from "../login/SignUp";

function Mainpage() {
  return (
    <div className="Mainpage">
      <header className="header">
        {/* <h>Student Attendance System</h> */}
      </header>
      <SignUp/>
    </div>
  );
}

export default Mainpage;