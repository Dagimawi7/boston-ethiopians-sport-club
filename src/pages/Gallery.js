
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
    src: "GalleryPictures/IMG_1974.jpeg",
    title: "Gallery Image 6",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8516.jpeg",
    title: "Gallery Image 7",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8543.jpeg",
    title: "Gallery Image 8",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8570.jpeg",
    title: "Gallery Image 9",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8583.jpeg",
    title: "Gallery Image 10",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8600.jpeg",
    title: "Gallery Image 11",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8606.jpeg",
    title: "Gallery Image 12",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8626.jpeg",
    title: "Gallery Image 13",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8760.jpeg",
    title: "Gallery Image 14",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8828.jpeg",
    title: "Gallery Image 15",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_8843.jpeg",
    title: "Gallery Image 16",
    category: "Other",
  },
  {
    src: "GalleryPictures/IMG_9973.jpeg",
    title: "Gallery Image 17",
    category: "Other",
  },
  {
    src: "GalleryPictures/Screenshot_20260609_112357_Gallery(1).JPG",
    title: "Gallery Image 18",
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
