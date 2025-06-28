import React from 'react'
import gallery1 from "../assets/images/gallery1.png"
import gallery2 from "../assets/images/gallery2.png"
import gallery3 from "../assets/images/gallery3.png"
import gallery4 from "../assets/images/gallery4.png"
import gallery5 from "../assets/images/gallery5.png"
import gallery6 from "../assets/images/gallery6.png"
import gallery7 from "../assets/images/gallery7.png"
import gallery8 from "../assets/images/gallery8.png"
import gallery9 from "../assets/images/gallery9.png"
import gallery10 from "../assets/images/gallery10.png"

const images = [
  { id: 1, src: gallery1, width: "180px", height: "260px", alt: "gallery 1" },
  { id: 2, src: gallery2, width: "180px", height: "260px", alt: "gallery 2" },
  { id: 3, src: gallery3, width: "180px", height: "260px", alt: "gallery 3" },
  { id: 4, src: gallery4, width: "180px", height: "260px", alt: "gallery 4" },
  { id: 5, src: gallery5, width: "180px", height: "260px", alt: "gallery 5", className:"gallery-last" },
  { id: 6, src: gallery6, width: "180px", height: "260px", alt: "gallery 6" },
  { id: 7, src: gallery7, width: "180px", height: "260px", alt: "gallery 7" },
  { id: 8, src: gallery8, width: "180px", height: "260px", alt: "gallery 8" },
  { id: 9, src: gallery9, width: "180px", height: "260px", alt: "gallery 9",  },
  {
    id: 10,
    src: gallery10,
    width: "180px",
    height: "260px",
    alt: "gallery 10",
    className:"gallery-last"
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>
        <span className="title-head">Photo</span>
        <br />
        <strong>Gallery</strong>
      </h2>
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
      <div className="nav-arrows">
        <p className="counting">01 / 02</p>
        <button className="button4">←</button>
        <button className="button3">→</button>
      </div>
    </div>
  );
};

export default Gallery;