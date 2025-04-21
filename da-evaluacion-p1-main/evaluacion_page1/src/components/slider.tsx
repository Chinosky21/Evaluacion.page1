import { useState } from 'react';

const ImageSlider = () => {
  // Lista dinámica de imágenes (importadas o URLs)
  const images = [
    'src/assets/images/slide1.jpg',
    'src/assets/images/img2.png',
    'src/assets/images/img3.jpg',
    'src/assets/images/img4.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500"
      />
      <button
        onClick={goToPrevious}
        className=" top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className=" top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        ▶
      </button>
    </div>
  );
};

export default ImageSlider;
