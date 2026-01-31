import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 border-t border-slate-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold font-['Orbitron'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        COGNIZANCE
                    </h2>
                    <p className="text-slate-500 text-sm">© 2026 All Rights Reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl"><FaTwitter /></a>
                    <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors text-xl"><FaInstagram /></a>
                    <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-xl"><FaLinkedin /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors text-xl"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
