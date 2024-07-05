import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? "extended" : ""}`}>
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="icon"
          className="menu-icon"
          onClick={() => setExtended(!extended)} // Toggle extended state
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="icon" />
          {extended && <p>New Chat</p>}
        </div>
      </div>
      {extended && (
        <div className="recent">
          <h3 className="recent-title">Recent</h3>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="icon" />
            <p>What is React...</p>
          </div>
        </div>
      )}
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
