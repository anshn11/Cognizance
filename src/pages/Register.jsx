import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaUser, FaUsers, FaEnvelope, FaCalendarAlt, FaChessKing } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        gsap.fromTo(formRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send data to backend here
        alert("Registration Successful!");
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative z-10 px-4">
            <div ref={formRef} className="w-full max-w-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>

                <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Team Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Team Name */}
                    <div className="space-y-2">
                        <label className="text-slate-300 font-bold flex items-center gap-2">
                            <FaUsers className="text-cyan-400" /> Team Name
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. Cyber Punks"
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                        />
                    </div>

                    {/* Event Selection */}
                    <div className="space-y-2">
                        <label className="text-slate-300 font-bold flex items-center gap-2">
                            <FaCalendarAlt className="text-purple-400" /> Select Event
                        </label>
                        <select className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all">
                            <option value="ai">AI & ML Hackathon</option>
                            <option value="cyber">Cybersecurity CTF</option>
                            <option value="web3">Web3 & Blockchain</option>
                            <option value="open">Open Innovation</option>
                        </select>
                    </div>

                    {/* Team Leader */}
                    <div className="space-y-2">
                        <label className="text-slate-300 font-bold flex items-center gap-2">
                            <FaChessKing className="text-yellow-400" /> Team Leader
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Leader's Full Name"
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all"
                        />
                    </div>

                    {/* Team Members */}
                    <div className="space-y-2">
                        <label className="text-slate-300 font-bold flex items-center gap-2">
                            <FaUser className="text-pink-400" /> Team Members
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Enter names separated by commas (e.g. Member 1, Member 2, Member 3)"
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        Register Team
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
