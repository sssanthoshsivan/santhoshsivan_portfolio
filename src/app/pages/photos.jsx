import Image from 'next/image';
import Link from 'next/link';

// Array of image paths
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
    return ( 
        <div className='pb-10 lg:mx-10'>
            <div className='grid grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3'>
                {/* Map over the images array and render each image */}
                {images.map((image, index) => (
                    <div key={index} >
                        <Image src={image} alt={`image-${index}`} width={300} height={300} className='rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150'/>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Photographs;
