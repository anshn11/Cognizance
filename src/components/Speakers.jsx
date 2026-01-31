import { useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import speaker1 from '../assets/speaker1.jpg';
import speaker2 from '../assets/speaker2.jpg';
import speaker3 from '../assets/speaker3.jpg';
import speaker4 from '../assets/speaker4.jpg';

gsap.registerPlugin(ScrollTrigger);

const speakers = [
    { name: "Dr. Sunita Verma", role: "AI Researcher", company: "DeepMind", image: speaker1, linkedin: "#", instagram: "#" },
    { name: "Vikram Malhotra", role: "Ethical Hacker", company: "BlackHat", image: speaker2, linkedin: "#", instagram: "#" },
    { name: "Rohan Mehra", role: "Blockchain Expert", company: "Ethereum", image: speaker3, linkedin: "#", instagram: "#" },
    { name: "Adithya Menon", role: "CTO", company: "FutureCorp", image: speaker4, linkedin: "#", instagram: "#" },
];

const Speakers = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold font-['Orbitron'] mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    Industry Leaders
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col items-center text-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="w-32 h-32 rounded-full mb-6 relative p-1 border-2 border-slate-600 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold font-['Orbitron'] mb-2 group-hover:text-cyan-300 transition-colors">{speaker.name}</h3>
                                <p className="text-purple-400 font-bold mb-1">{speaker.role}</p>
                                <p className="text-slate-400 text-sm mb-4">{speaker.company}</p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-xl">
                                        <FaLinkedin />
                                    </a>
                                    <a href={speaker.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors text-xl">
                                        <FaInstagram />
                                    </a>
                                </div>

                                {/* Glitch bar */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
