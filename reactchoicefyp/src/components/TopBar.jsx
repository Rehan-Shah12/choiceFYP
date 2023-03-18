import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function TopBar() {
  return (
    <div>
      <div className="socialIcons">
        <IconContext.Provider value={{ size: "2em", color: "grey" }}>
          <FaFacebook style={{ marginRight: "0.5rem" }} />
          <RiInstagramFill style={{ marginRight: "0.5rem" }} />
          <FaTwitter style={{ marginRight: "0.5rem" }} />
        </IconContext.Provider>
      </div>
      <div className="breifsale">
        <p>
          <span className=" font-bold">FREE SHIPPING</span> WEEK OF 75% Off
        </p>
      </div>
    </div>
  );
}
