import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMicrochip, FaRocket } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-950 text-white relative">
            <div className="container mx-auto px-4">
                <div ref={contentRef} className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold font-['Orbitron'] mb-8 text-cyan-400">About The Event</h2>
                    <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                        Cognizance 2026 is the premier student hackathon bringing together the brightest minds to solve real-world problems.
                        Experience 24 hours of coding, innovation, and networking with industry leaders.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500 transition-colors duration-300">
                            <FaMicrochip className="text-4xl text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Cutting-edge Tech</h3>
                            <p className="text-slate-400">Get hands-on with the latest in AI, Blockchain, and IoT.</p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition-colors duration-300">
                            <FaRocket className="text-4xl text-cyan-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Launch Your Idea</h3>
                            <p className="text-slate-400">Turn your concept into a prototype and pitch to investors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
