import { useEffect, useRef } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
    { name: "Aarav Sharma", role: "Organizer", linkedin: "#", instagram: "#" },
    { name: "Ishita Gupta", role: "Creative Lead", linkedin: "#", instagram: "#" },
    { name: "Rohan Verma", role: "Logistics", linkedin: "#", instagram: "#" },
    { name: "Ananya Singh", role: "Tech Lead", linkedin: "#", instagram: "#" },
    { name: "Vihaan Patel", role: "Marketing", linkedin: "#", instagram: "#" },
    { name: "Meera Reddy", role: "Sponsorship", linkedin: "#", instagram: "#" },
];

const Team = () => {
    const sectionRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(listRef.current.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-950 text-white border-t border-slate-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold font-['Orbitron'] mb-12 text-slate-500 uppercase tracking-[0.2em]">
                    Meet The Team
                </h2>

                <div ref={listRef} className="flex flex-wrap justify-center gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="bg-slate-900 px-6 py-4 rounded-lg border border-slate-800 hover:border-purple-500 transition-colors duration-300 min-w-[200px]">
                            <h3 className="text-xl font-bold text-slate-200">{member.name}</h3>
                            <p className="text-sm text-purple-400 mb-3">{member.role}</p>

                            <div className="flex justify-center gap-3">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
                                    <FaInstagram size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
