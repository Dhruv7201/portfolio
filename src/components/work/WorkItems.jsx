import React, { useState, useEffect } from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  const [activeDialog, setActiveDialog] = useState(false);
  const [enlargeImage, setEnlargeImage] = useState(false);

  // Handle escape key to close popups
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDialog(false);
        setEnlargeImage(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openDialog = () => {
    setActiveDialog(true);
  };

  const closeDialog = () => {
    setActiveDialog(false);
  };

  const openImage = () => {
    setEnlargeImage(true);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" onClick={openImage} />

      {enlargeImage && (
        <div
          className="popup-overlay"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: "100" }}
          onClick={() => setEnlargeImage(false)}
        >
          <div className="popup-img" onClick={(e) => e.stopPropagation()}>
            <img src={item.image} alt="" className="popup__img" />
          </div>
          <span
            className="popup__close"
            onClick={() => setEnlargeImage(false)}
            style={{
              borderColor: "black",
              color: "black",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "5px",
            }}
          >
            &times;
          </span>
        </div>
      )}

      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={openDialog}>
        Details
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>

      {activeDialog && (
        <div className="popup-overlay" onClick={closeDialog}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
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
