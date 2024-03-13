import img1 from "../public/img1.jpeg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img12 from "../public/img12.jpeg";
import img13 from "../public/img13.jpg";
import img15 from "../public/img15.jpg";
import img16 from "../public/img16.jpeg";
import Image from 'next/image'
import Link from 'next/link';

const Photographs = () => {
    return ( 
        <div className='py-10'>

            <div className='grid grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3'>
              <Image src={img3} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img9} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img15} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img13} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img8} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img12} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img1} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img4} alt="image" className='rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img16} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img5} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
            </div>
    </div>
     );
}
 
export default Photographs;

