import React, { useState } from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  const [activeDialog, setActiveDialog] = useState(false);

  const openDialog = () => {
    setActiveDialog(true);
  };

  const closeDialog = () => {
    setActiveDialog(false);
  };

  const openImageInNewWindow = () => {
    window.open(item.image, "_blank");
  };

  return (
    <div className="work__card" key={item.id}>
      <img
        src={item.image}
        alt=""
        className="work__img"
        onClick={openImageInNewWindow}
      />
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={openDialog}>
        Details
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>

      {activeDialog && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="popup__close" onClick={closeDialog}>
              &times;
            </span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
