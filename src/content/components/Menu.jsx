import React from "react";
import { format } from "date-fns";
import { IoMenuOutline, IoSettingsOutline } from "react-icons/io5";

const Menu = () => {
  const now = new Date();
  const formattedDate = format(now, "EEEE, MMMM d, yyyy");
  return (
    <div className="menu top-header">
      <span>
        <IoMenuOutline />
      </span>
      <span>{formattedDate}</span>
      <span>
        <IoSettingsOutline />
      </span>
    </div>
  );
};

export default Menu;
