import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-20 bg-black text-white sticky bottom-0">
                <aside>
                    <p className="font-bold text-3xl">
                        Beauty World <br />
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <header className=" footer text-bold text-xl text-white">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebookF className='h-10 w-15'></FaFacebookF>
                        <FaYoutube className='h-10 w-15'></FaYoutube>
                        <FaTwitter className='h-10 w-15'></FaTwitter>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
