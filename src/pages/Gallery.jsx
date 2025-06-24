import React from 'react'

const images = [
    { id: 1, src: "src/assets/images/gallery1.png", width:"180px", height:"260px", alt: "gallery 1" },
    { id: 2, src: "src/assets/images/gallery2.png", width:"180px", height:"260px", alt: "gallery 2" },
    { id: 3, src: "src/assets/images/gallery3.png", width:"180px", height:"260px", alt: "gallery 3" },
    { id: 4, src: "src/assets/images/gallery4.png", width:"180px", height:"260px", alt: "gallery 4" },
    { id: 5, src: "src/assets/images/gallery5.png", width:"180px", height:"260px", alt: "gallery 5" },
    { id: 6, src: "src/assets/images/gallery6.png", width:"180px", height:"260px", alt: "gallery 6" },
    { id: 7, src: "src/assets/images/gallery7.png", width:"180px", height:"260px", alt: "gallery 7" },
    { id: 8, src: "src/assets/images/gallery8.png", width:"180px", height:"260px", alt: "gallery 8" },
    { id: 9, src: "src/assets/images/gallery9.png", width:"180px", height:"260px", alt: "gallery 9" },
    { id: 10, src: "src/assets/images/gallery10.png", width:"180px", height:"260px", alt: "gallery 10" },
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
}

export default Gallery