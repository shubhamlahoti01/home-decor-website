import React from "react";
import { useInView } from "react-intersection-observer";
import "./styles/imageGallery.css"; // Import your CSS file for styling

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://alexisring.com/wp-content/uploads/2023/03/1-web-or-mls-Editorial-1.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg",
      alt: "Image 5",
    },
  ];
  const [ref, inView] = useInView({
    // Animation only occurs once when the section comes into view
    threshold: 0.2, // Trigger the animation when the section is 10% in view
  });

  return (
    <div ref={ref} className={`gallery-container ${inView ? "visible" : ""}`}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
