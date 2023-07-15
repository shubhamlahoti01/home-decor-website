import React, { useState } from "react";
import { FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import "./styles/imageModal.css";

const ImageModal = ({ imageUrl, altText, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 10);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel - 10);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-close-container">
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-image-container">
          <img
            src={imageUrl}
            alt={altText}
            className="modal-image"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          />
          <div className="modal-zoom-buttons">
            <button className="modal-zoom-in" onClick={handleZoomIn}>
              <FaSearchPlus />
            </button>
            <button className="modal-zoom-out" onClick={handleZoomOut}>
              <FaSearchMinus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
