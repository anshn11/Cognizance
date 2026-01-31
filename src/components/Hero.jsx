import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const btnRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
            // Changed to fromTo to ensure valid start/end states
            gsap.fromTo(btnRef.current,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    delay: 0.5
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black opacity-80 -z-10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="z-10 max-w-5xl relative">
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-black font-['Orbitron'] mb-8 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                    COGNIZANCE <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">2026</span>
                </h1>
                <p className="text-xl md:text-3xl text-cyan-100 mb-12 font-['Inter'] tracking-widest uppercase opacity-90 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]">
                    Innovate <span className="mx-2 text-purple-500">•</span> Create <span className="mx-2 text-pink-500">•</span> Dominate
                </p>
                <div ref={btnRef} className="relative inline-block group cursor-pointer" onClick={() => navigate('/register')}>
                    <div className="absolute inset-0 bg-cyan-500 rounded-sm blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <button
                        className="relative z-20 px-12 py-4 bg-cyan-500 text-black font-black text-xl tracking-widest uppercase transform -skew-x-12 hover:bg-white hover:scale-105 transition-all duration-300 clip-path-polygon"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
                    >
                        <span className="block transform skew-x-12">Register Now</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
