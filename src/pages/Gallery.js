
import React, { useEffect, useState } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    src: "GalleryPictures/IMG_1916.jpeg",
    title: "Gallery Image 1",
    category: "Featured",
  },
  {
    src: "GalleryPictures/IMG_1924.jpeg",
    title: "Gallery Image 2",
    category: "Featured",
  },
  {
    src: "GalleryPictures/IMG_1928.jpeg",
    title: "Gallery Image 3",
    category: "Events",
  },
  {
    src: "GalleryPictures/IMG_1938.jpeg",
    title: "Gallery Image 4",
    category: "Events",
  },
  {
    src: "GalleryPictures/IMG_1949.jpeg",
    title: "Gallery Image 5",
    category: "Featured",
  },

  {
    src: "GalleryPictures/IMG_1963.jpeg",
    title: "Gallery Image 7",
    category: "Other",
  },
  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <span className="gallery-eyebrow">OUR COLLECTION</span>
        <h1>Gallery</h1>
        <p>
          Explore our collection of photos, special moments,
          and featured work.
        </p>
      </header>

      <section className="gallery-grid" aria-label="Photo gallery">
        {galleryImages.map((image, index) => (
          <button
            className="gallery-card"
            key={image.src}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`View ${image.title}`}
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="gallery-thumbnail"
            />

            <span className="gallery-card-overlay">
              <span className="gallery-card-category">
                {image.category}
              </span>
              <span className="gallery-card-title">
                {image.title}
              </span>
              <span className="gallery-view-icon" aria-hidden="true">
                ↗
              </span>
            </span>
          </button>
        ))}
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="gallery-full-image"
            />
            <p className="gallery-lightbox-caption">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
