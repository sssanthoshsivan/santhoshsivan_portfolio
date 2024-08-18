"use client"
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const ModalCarousel = ({ images, currentIndex, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Animate the image when the index changes
        gsap.fromTo(
            '.carousel-image',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5 }
        );
    }, [currentImageIndex]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            // Swiped left
            goToNextImage();
        }

        if (touchStartX - touchEndX < -50) {
            // Swiped right
            goToPrevImage();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button onClick={onClose} className="absolute top-5 right-5 text-white text-2xl">X</button>
            <div className="relative flex items-center justify-center w-full max-w-xl p-5">
                <button onClick={goToPrevImage} className="absolute left-0 screen-xs:hidden text-white text-3xl z-10">{"<"}</button>
                <Image
                    src={images[currentImageIndex]}
                    alt={`image-${currentImageIndex}`}
                    width={400}  // Smaller image size
                    height={400} // Smaller image size
                    className="carousel-image rounded-xl"
                />
                <button onClick={goToNextImage} className="absolute right-0 screen-xs:hidden text-white text-3xl z-10">{">"}</button>
            </div>
        </div>
    );
};

export default ModalCarousel;
