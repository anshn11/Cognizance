import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRobot, FaLock, FaGlobe, FaCode } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
    { icon: <FaRobot />, title: "AI & ML", description: "Build the future with intelligent algorithms." },
    { icon: <FaLock />, title: "Cybersecurity", description: "Secure the digital world from threats." },
    { icon: <FaGlobe />, title: "Web3 & Blockchain", description: "Decentralize the web with smart contracts." },
    { icon: <FaCode />, title: "Open Innovation", description: "Solve generic problems with creative code." },
];

const Events = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-900/20 blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold font-['Orbitron'] mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                    Event Tracks
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="text-6xl mb-6 text-purple-500 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 transform group-hover:scale-110">
                                {track.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 font-['Orbitron'] tracking-wide">{track.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed">{track.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
