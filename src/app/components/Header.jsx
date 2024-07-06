import Link from "next/link";
import {SiGmail} from 'react-icons/si';

const Header = () => {
    return ( 
        <div>
            <nav className="fixed w-full top-0 left-0 z-50 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className='text-sm font-medium md:text-lg md:font-normal text-slate-600'>Santhosh Sivan</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:flex space-x-4">
                        <Link href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help you ?"><SiGmail className=' text-slate-600 hover:text-slate-900 text-2xl mt-2 -mr-3 md:text-3xl md:mx-5'/></Link>
                        <Link className='bg-transparent border border-slate-700 hover:bg-slate-900 hover:text-white text-black font-semibold px-4 py-2 rounded-md ml-8' href="https://drive.google.com/uc?id=1peoLr2w4IzEY9DPy7k1DwHdfx9oKN-q5&export=download">Resume</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Header;

