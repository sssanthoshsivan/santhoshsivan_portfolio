"use client"
import { useState } from 'react';
import Image from 'next/image';
import ModalCarousel from '../components/ModalCarousl';

const images = [
    "/img1.jpeg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img12.jpeg",
    "/img13.jpg",
    "/img15.jpg",
    "/img16.jpeg"
];

const Photographs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className='py-10 lg:mx-10'>
            <div className='grid grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3'>
                {images.map((image, index) => (
                    <div key={index} onClick={() => openModal(index)}>
                        <Image
                            src={image}
                            alt={`image-${index}`}
                            width={300}
                            height={300}
                            className='rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 cursor-pointer'
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <ModalCarousel
                    images={images}
                    currentIndex={currentIndex}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Photographs;
