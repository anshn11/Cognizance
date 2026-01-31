import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const schedule = [
    { time: "09:00 AM", title: "Opening Ceremony", desc: "Kickoff with keynote speakers." },
    { time: "11:00 AM", title: "Hacking Begins", desc: "Start working on your projects." },
    { time: "01:00 PM", title: "Lunch Break", desc: "Networking and food." },
    { time: "05:00 PM", title: "Mentorship Round", desc: "Expert guidance for teams." },
    { time: "08:00 PM", title: "Dinner", desc: "Refuel and recharge." }, // Added an item to show length
];

const Timeline = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line grows down
            gsap.fromTo(lineRef.current,
                { height: 0 },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );

            // Items fade in and slide up
            itemsRef.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { opacity: 0, x: 20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-slate-950 text-white relative">
            <div className="container mx-auto px-4 max-w-2xl relative">
                <h2 className="text-4xl font-bold font-['Orbitron'] mb-16 text-center text-cyan-400">Schedule</h2>

                <div className="relative pl-8 border-l border-slate-800 space-y-12">
                    {/* Animated neon line overlay */}
                    <div ref={lineRef} className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                    {schedule.map((item, index) => (
                        <div
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            className="relative group"
                        >
                            {/* Glowing Dot on the line */}
                            <div className="absolute -left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-900 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-2 h-2 bg-slate-500 group-hover:bg-cyan-400 rounded-full transition-colors duration-300"></div>
                            </div>

                            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-mono mb-3 border border-cyan-500/30 shadow-[0_0_5px_rgba(34,211,238,0.2)]">
                                    {item.time}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
