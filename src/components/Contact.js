import React from "react";
import Director from "./Director";
import Tl from "./Tl";
import Hr from "./Hr";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <Link className="tc" to="director">
        Director
      </Link>
      <Link className="tc" to="hr">
        HL
      </Link>
      <Link className="tc" to="tl">
        TL
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
