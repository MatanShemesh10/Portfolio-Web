import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ChevronDown, Aperture, Github, Linkedin, Mail, FileText, Code, ExternalLink } from 'lucide-react';

// *Note: The exact relative path depends on your project structure. Assuming assets/profile.jpg is correct.*
import profileImage from './assets/profile.jpg'; 

// --- שינוי #2: שימוש בתמונה המיובאת ---
const PLACEHOLDER_PROFILE_IMAGE_URL = "https://placehold.co/400x600/1F2937/F3F4F6?text=Your+Profile+Photo"; 
const PROFILE_IMAGE_URL = profileImage; 

const projects = [
  {
    id: 1,
    client: "CORE SYSTEMS LAB",
    title: "Core-Systems-Lab",
    category: "C++ / Python",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    videoSim: "scale-105 saturate-0",
    gitUrl: "https://github.com/MatanShemesh10/Core-Systems-Lab",
    description: "An engineering lab for exploring core system concepts, data structures, performance optimization, and advanced C++/Python design patterns."
  },

  {
    id: 2,
    client: "SERVERLESS CLOUD",
    title: "AWS Serverless Control Hub",
    category: "React / TypeScript / AWS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    videoSim: "scale-110 hue-rotate-15",
    gitUrl: "https://github.com/MatanShemesh10/Aws-Serverless-Control-Hub",
    description: "A full serverless dashboard built with React, AWS Lambda, DynamoDB, and CloudWatch — including user authentication, real-time logs, and automated deployments."
  },

  {
    id: 3,
    client: "RAG SYSTEMS",
    title: "RAG-CatNLP",
    category: "LLM / RAG / NLP",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    videoSim: "grayscale hover:grayscale-0 transition-all duration-500",
    gitUrl: "https://github.com/MatanShemesh10/RAG-CatNLP",
    description: "Local RAG chatbot running fully offline with embeddings, custom datasets, and a sleek interactive UI."
  },

  {
    id: 4,
    client: "MCP SYSTEMS",
    title: "MCP Advanced To-Do Manager",
    category: "Python / MCP Server",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    videoSim: "opacity-80 hover:opacity-100 transition-all duration-500",
    gitUrl: "https://github.com/MatanShemesh10/Mcp-Advanced-ToDo-Manager",
    description: "Advanced task manager powered by an MCP server — supporting priorities, categories, persistent storage, and full automation logic."
  },

  {
    id: 5,
    client: "AI TRUTH ENGINE",
    title: "Truth Keeper",
    category: "AI / NLP / Jupyter",
    image: "https://www.polimek.com/wp-content/uploads/2025/03/xray-foto.jpg",
    videoSim: "scale-105 saturate-50 hover:saturate-100 transition-all duration-500",
    gitUrl: "https://github.com/MatanShemesh10/Truth_Keeper",
    description: "An AI-powered fake-news detection model combining NLP, credibility scoring, and misinformation pattern analysis — built in collaboration with IMT Lucca, Italy."
  },

  {
    id: 6,
    client: "MOBILE INTELLIGENCE",
    title: "SeatAssist App",
    category: "Java / Mobile",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop",
    videoSim: "scale-100 hover:scale-105 transition-all duration-500",
    gitUrl: "https://github.com/MatanShemesh10/SeatAssist_App",
    description: "A Java-based smart seating suggestion app designed to improve shared-space ergonomics and interaction."
  },
];


// --- NEW COMPONENT: Interactive Profile Image ---
const InteractiveImage = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-xs h-full max-h-[660px] overflow-hidden interactive" // Decreased max-width to max-w-xs
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="IMAGE"
      style={{
        transition: 'transform 0.4s ease-out',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: isHovered ? '0 0 40px rgba(59, 130, 246, 0.4)' : 'none',
        borderRadius: '8px'
      }}
    >
      <img 
        src={src}
        alt="Matan Shemesh Profile"
        onError={(e) => {
            e.target.onerror = null; 
            e.target.src = PLACEHOLDER_PROFILE_IMAGE_URL; 
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out`}
        style={{
          // Change filter on hover for the interactive effect
          filter: isHovered ? 'grayscale(0%) brightness(100%)' : 'grayscale(80%) brightness(80%)',
        }}
      />
      
      {/* Interactive Border Effect (Blue Glow) */}
      <div 
        className={`absolute inset-0 border-2 transition-colors duration-300 pointer-events-none`}
        style={{
          borderColor: isHovered ? '#3b82f6' : '#1f2937', // blue-500 or neutral-800
        }}
      />
      
    </div>
  );
};

// --- Brain/Neuro Animation (using SVG for high-energy effect) ---
const BrainAnimation = () => {
  // Utility function to generate a random delay for staggered animation effect
  const randomDelay = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min) / 10 + 's';
  };
  
  // Custom styles for slightly faster spin
  const spinFaster = { animationDuration: '10s' };
  const spinSlow = { animationDuration: '20s' };

  return (
    <div className="relative w-full h-[340px] flex justify-center items-center overflow-hidden rounded-xl">

      {/* Background Grid - Flicker Effect on Opacity */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.3]" xmlns="http://www.w3.org/2000/svg">
        {/* vertical lines - slight flicker effect */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={(i * 100) / 20 + "%"}
            y1="0"
            x2={(i * 100) / 20 + "%"}
            y2="100%"
            stroke="#4a7aff"
            strokeWidth="0.3"
            opacity="0.15"
            className="animate-pulse" // Added pulse for subtle flicker
            style={{ animationDuration: randomDelay(10, 30) }}
          />
        ))}
        {/* horizontal lines - slight flicker effect */}
        {[...Array(20)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={(i * 100) / 20 + "%"}
            x2="100%"
            y2={(i * 100) / 20 + "%"}
            stroke="#4a7aff"
            strokeWidth="0.3"
            opacity="0.15"
            className="animate-pulse" // Added pulse for subtle flicker
            style={{ animationDuration: randomDelay(10, 30) }}
          />
        ))}
      </svg>
      
      {/* Dynamic Synaptic Paths (Increased count and speed for more activity) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
            {/* Define a blur filter for the synapse glow effect */}
            <filter id="synapseGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        {/* Synapse 1: Fast, Diagonal Fire (Cyan) */}
        <path
          d="M 50 50 C 70 30, 90 20, 95 5"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          filter="url(#synapseGlow)"
          className="animate-synapse-fire" // Uses custom dash animation
          style={{ animationDuration: '1.5s' }}
        />
        
        {/* Synapse 2: Medium Speed, Curved Fire (Blue) */}
        <path
          d="M 50 50 C 30 70, 10 70, 5 95"
          fill="none"
          stroke="#4A7AFF"
          strokeWidth="1.5"
          filter="url(#synapseGlow)"
          className="animate-synapse-fire" // Uses custom dash animation
          style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        />

        

      </svg>


      {/* Center Glow (slightly bigger, more pronounced pulse) */}
      <div className="absolute w-32 h-32 bg-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '1s' }}></div>

      {/* Central Aperture (Faster Spin) */}
      <div className="absolute">
        <Aperture className="w-10 h-10 text-blue-400 animate-spin" style={spinFaster} /> 
      </div>

      {/* Core Neuron (Gradient Pulse Effect) */}
      <div className="absolute w-24 h-24 rounded-full animate-gradient-pulse" 
           style={{
             background: 'radial-gradient(circle, #0F3A5E 0%, #1A5276 50%, #0F3A5E 100%)',
             animationDuration: '2s' // Control pulse speed here
           }}>
      </div>

      {/* Outer Orbit #1 (Main Orbit) */}
      <svg className="absolute w-[260px] h-[260px] animate-spin-slow" style={{ animationDuration: '20s' }} viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="85"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-blue-400/40"
        />
        {/* moving neuron */}
        <circle
          cx="185"
          cy="100"
          r="4"
          className="fill-blue-300 animate-orbit"
          style={{ animationDuration: "12s" }}
        />
      </svg>

      {/* Orbit #2 tilted (Faster spin for better feel) */}
      <svg
        className="absolute w-[200px] h-[200px] animate-spin-slow"
        viewBox="0 0 200 200"
        style={{ transform: "rotate(25deg)", animationDuration: '15s' }}
      >
        <circle
          cx="100"
          cy="100"
          r="65"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-blue-400/30"
        />
        <circle
          cx="165"
          cy="100"
          r="3"
          className="fill-blue-400 animate-orbit"
          style={{ animationDuration: "5s" }}
        />
      </svg>
      
      {/* NEW Orbit #3 (Cross-Axis) */}
      <svg
        className="absolute w-[300px] h-[300px] animate-spin-slow"
        viewBox="0 0 200 200"
        style={{ transform: "rotate(90deg) rotateY(45deg)", animationDuration: '28s' }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="100"
          ry="30"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-cyan-400/20"
          fill="none"
        />
      </svg>

      {/* NEW Orbit #4 (Tilted Ellipse) */}
      <svg
        className="absolute w-[180px] h-[180px] animate-spin-slow"
        viewBox="0 0 200 200"
        style={{ transform: "rotate(-45deg)", animationDuration: '13s' }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="50"
          ry="80"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-blue-500/20"
          fill="none"
        />
      </svg>


      {/* Small peripheral neurons (faster pulse) */}
      <div className="absolute left-[20%] top-[30%] w-2 h-2 bg-blue-300/70 rounded-full animate-pulse-slow" style={{ animationDuration: '1.2s', animationDelay: '0.1s' }}></div>
      <div className="absolute right-[22%] top-[40%] w-1.5 h-1.5 bg-blue-300/70 rounded-full animate-pulse-slow" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }}></div>
      <div className="absolute left-[30%] bottom-[25%] w-2.5 h-2.5 bg-blue-300/70 rounded-full animate-pulse-slow" style={{ animationDuration: '1s', animationDelay: '0.2s' }}></div>
      <div className="absolute right-[15%] bottom-[15%] w-1 h-1 bg-cyan-300/70 rounded-full animate-pulse-slow" style={{ animationDuration: '1.8s', animationDelay: '0.7s' }}></div>
      <div className="absolute left-[10%] top-[10%] w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-pulse-slow" style={{ animationDuration: '0.9s', animationDelay: '0.4s' }}></div>


      {/* Label */}
      <p className="absolute bottom-4 left-4 text-[10px] font-mono-tech tracking-widest text-neutral-600">
        NEURAL.NETWORK.V06.GRADIENT_CORE
      </p>
    </div>
  );
};
// ... (CustomCursor, Navigation components remain unchanged)
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // We listen to the whole window for mouseover/mouseout events
    // to detect interaction with elements that have the 'interactive' class or are standard interactive tags.
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, .interactive');
      if (target) {
        setHovered(true);
        // Get custom hover text from data-cursor attribute
        setHoverText(target.dataset.cursor || '');
      } else {
        setHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    // Using a more generalized event listener for hover detection
    window.addEventListener('mouseover', onMouseOver);
    // Since mouseover fires when entering any child element, we need a better way 
    // to handle leaving the interactive zone, but for simplicity here, we rely on mouseover's logic.

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small dot - disappears on hover */}
      <div 
        className="fixed pointer-events-none z-[100] bg-blue-400 mix-blend-difference rounded-full transition-transform duration-75 ease-out"
        style={{
          width: '8px',
          height: '8px',
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${hovered ? 0 : 1})`
        }}
      />
      {/* Outer circle/box - expands on hover */}
      <div 
        className="fixed pointer-events-none z-[100] border border-blue-400 mix-blend-difference transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          width: hovered ? '80px' : '30px',
          height: hovered ? '80px' : '30px',
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
          borderRadius: hovered ? '4px' : '50%'
        }}
      >
        {hovered && (
            <div className="text-[10px] font-bold text-blue-400 tracking-widest animate-pulse font-mono-tech">
              {hoverText || 'SELECT'}
            </div>
        )}
      </div>
      {/* Horizontal and Vertical "crosshair" lines */}
      <div 
          className="fixed pointer-events-none z-[90] bg-white/5"
          style={{ left: position.x, top: 0, width: '1px', height: '100vh', transform: 'translateX(-50%)' }}
      />
      <div 
          className="fixed pointer-events-none z-[90] bg-white/5"
          style={{ top: position.y, left: 0, height: '1px', width: '100vw', transform: 'translateY(-50%)' }}
      />
    </>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white backdrop-blur-sm bg-black/20">
      <div className="flex items-center gap-2 interactive" data-cursor="HOME">
        <Code className="w-6 h-6 text-blue-500" />
        <span className="font-syncopate font-bold tracking-widest text-lg">M.SHEMESH</span>
      </div>
      
      <div className="hidden md:flex gap-12 font-bold tracking-[0.2em] text-xs font-mono-tech">
        {['WORK', 'ABOUT', 'RESUME', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="interactive hover:text-blue-400 transition-colors duration-300 steps-10"
              data-cursor={item}
            >
              {item}
            </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden interactive" data-cursor="MENU">
        {isOpen ? <X /> : <Menu />}
      </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 md:hidden">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
                <X className="w-8 h-8" />
            </button>
            {['WORK', 'ABOUT', 'RESUME', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-syncopate font-bold hover:text-blue-500"
            >
              {item}
            </a>
            ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-neutral-900">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[120px]" />
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* --- UPDATED LAYOUT: 3 Columns for Desktop, Stacked for Mobile --- */}
      <div className="z-10 w-full h-full max-w-7xl pt-32 pb-16 px-6 md:px-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Interactive Image (Left) - Adjusted to justify-start */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start items-start pt-8 lg:pt-0 lg:h-full " data-cursor="IMAGE">
            <InteractiveImage src={PROFILE_IMAGE_URL} />
        </div>
        
        {/* Column 2: Main Text Content (Center) - Remains col-span-2 */}
        <div className="lg:col-span-2 text-center flex flex-col justify-center items-center">
            <div className="overflow-hidden mb-6">
                <h2 className="text-sm md:text-base tracking-[0.5em] text-blue-500 font-bold font-mono-tech reveal-stutter" style={{animationDelay: '0.2s'}}>
                    SOFTWARE ENGINEER
                </h2>
            </div>
            
            <div className="overflow-hidden">
                <h1 className="text-5xl md:text-9xl font-syncopate font-bold tracking-tighter text-white reveal-stutter" style={{animationDelay: '0.4s'}}>
                MATAN
                </h1>
            </div>
            
            <div className="overflow-hidden">
                <h1 className="text-5xl md:text-9xl font-syncopate font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-neutral-600 to-white reveal-stutter" style={{animationDelay: '0.6s'}}>
                SHEMESH
                </h1>
            </div>

            <p className="mt-8 max-w-lg text-center text-neutral-400 text-sm tracking-wide leading-relaxed reveal-stutter font-mono-tech" style={{animationDelay: '0.8s'}}>
                ENGINEERING ROBUST DIGITAL SOLUTIONS. <br/>
                SPECIALIZING IN SCALABLE ARCHITECTURE AND CLEAN CODE.
            </p>
            
            <div className="mt-12 flex gap-6 reveal-stutter" style={{animationDelay: '1s'}}>
                <a href="#work" className="border border-neutral-700 hover:border-blue-500 px-8 py-3 text-xs font-bold tracking-widest hover:bg-blue-500/10 transition-all duration-300 interactive" data-cursor="PROJECTS">
                    VIEW WORK
                </a>
                <a href="#contact" className="bg-white text-black hover:bg-blue-400 px-8 py-3 text-xs font-bold tracking-widest transition-all duration-300 interactive" data-cursor="CONTACT">
                    GET IN TOUCH
                </a>
            </div>
        </div>
        
        {/* Column 3: Brain Animation (Right) - Hidden on smaller screens */}
        <div className="lg:col-span-1 hidden lg:flex">
            <BrainAnimation />
        </div>
      </div>

      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end text-xs text-neutral-600 font-mono-tech">
        <div className="flex flex-col gap-1 hidden md:flex">
            <span>SYS.STATUS: OPERATIONAL</span>
            <span>LAST.LOGIN: {new Date().toLocaleDateString()}</span>
        </div>
        <a href="#work" className="animate-bounce interactive" data-cursor="SCROLL">
            <ChevronDown className="w-6 h-6 text-blue-500" />
        </a>
        <div className="text-right flex flex-col gap-1 hidden md:flex">
            <span>SCROLL TO INITIALIZE</span>
            <span>VER: 2.5.0</span>
        </div>
      </div>
    </section>
  );
};
// --- End of Hero Update ---
// --- Project Card Component ---
interface Project {
    id: number;
    client: string;
    title: string;
    category: string;
    image: string;
    videoSim: string;
    gitUrl: string;
    description: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article 
            className="group w-full border-b border-neutral-900 overflow-hidden interactive"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cursor="VIEW PROJECT"
        >
            <div className="flex flex-col md:flex-row items-start md:items-center py-12 md:py-20 px-6 md:px-16 transition-all duration-300 group-hover:bg-neutral-950">
                
                {/* Image/Simulated Video Column (Hidden on mobile) */}
                <div className="hidden md:block w-full md:w-1/3 lg:w-1/4 pr-8">
                    <div className={`relative w-full h-32 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out ${project.videoSim} ${isHovered ? 'scale-105 shadow-blue-500/30' : ''}`}>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; 
                                target.src = `https://placehold.co/400x150/1c1c1c/94a3b8?text=${project.title.replace(/\s/g, '+')}`;
                            }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-xs font-mono-tech tracking-widest text-neutral-500 group-hover:text-blue-400 transition-colors duration-300">{project.category} / {project.client}</p>
                        <h3 className="text-2xl md:text-4xl font-syncopate font-bold text-white group-hover:text-neutral-50 transition-colors duration-300">{project.title}</h3>
                        <p className="text-sm text-neutral-400 mt-2 max-w-lg">{project.description}</p>
                    </div>
                    
                    {/* Action Button: Replaced VIEW CASE and CODE link with a single VIEW CODE button */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a 
                            href={project.gitUrl} 
                            className="flex items-center text-xs font-mono-tech tracking-widest text-white border border-blue-600 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 interactive"
                            data-cursor="VIEW CODE"
                            target="_blank" // פתיחה בטאב חדש
                            rel="noopener noreferrer"
                        >
                            <Code className="w-4 h-4 mr-2" />
                            VIEW CODE
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

const Ticker = () => {
    return (
        <div className="w-full bg-neutral-900 text-neutral-500 py-4 overflow-hidden border-y border-neutral-800">
            <div className="whitespace-nowrap flex animate-ticker">
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="mx-8 font-mono-tech text-xs tracking-widest flex items-center gap-4">
                      <span className="text-blue-500">///</span> PYTHON 
                      <span className="text-blue-500">///</span> CPP 
                      <span className="text-blue-500">///</span> REACT 
                      <span className="text-blue-500">///</span> TYPESCRIPT 
                      <span className="text-blue-500">///</span> SQL 
                      <span className="text-blue-500">///</span> DB 
                      <span className="text-blue-500">///</span> API 
                      <span className="text-blue-500">///</span> AWS 
                      <span className="text-blue-500">///</span> CI/CD 
                      <span className="text-blue-500">///</span> GITHUB ACTION 
                      <span className="text-blue-500">///</span> OOP
                  </span>
                ))}
            </div>
        </div>
    );
};

const Resume = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-24 bg-black relative border-t border-neutral-900">
            
            <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
               <FileText className="w-96 h-96 text-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
                
                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-sm font-mono-tech text-blue-500 mb-8 tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"/> 
                        ABOUT ME
                    </h2>

                    <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8 font-manrope">
                        I BUILD <span className="text-neutral-500">SCALABLE SYSTEMS</span> AND SOLVE COMPLEX ENGINEERING PROBLEMS.
                    </h3>

                    <p className="text-neutral-400 leading-relaxed max-w-md mb-6 font-mono-tech text-sm">
                        I am Matan Shemesh, a Software Engineer specializing in scalable architectures, 
                        simulation platforms, backend systems, and infrastructure engineering. 
                        I work across Python, C++, cloud environments, distributed systems, and automation.
                    </p>

                    <p className="text-neutral-400 leading-relaxed max-w-md font-mono-tech text-sm">
                        My experience spans system-level engineering, CI/CD pipelines, cloud integration, 
                        and developing reliable, high-performance software for complex real-world products. 
                        I enjoy transforming hard technical challenges into clean, efficient, and maintainable solutions.
                    </p>

                    <div className="mt-12" id="resume">
                        <button className="group flex items-center gap-4 border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 interactive" data-cursor="DOWNLOAD">
                            <span className="font-bold tracking-widest text-sm">DOWNLOAD RESUME</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-12">

                    {/* EXPERIENCE */}
                    <div>
                        <h4 className="text-white mb-6 border-b border-neutral-800 pb-2 font-syncopate font-bold">
                            EXPERIENCE
                        </h4>

                        <ul className="space-y-6">

                            <li className="group">
                                <span className="block text-xs text-neutral-500 font-mono-tech mb-1">
                                    2023 - Present
                                </span>
                                <span className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                                    Software Engineer - General Motors, Autonomous Simulation
                                </span>
                                <p className="text-sm text-neutral-600 mt-1">
                                    Building simulation infrastructure and backend in Python & C++, integrating on-prem and cloud systems,
                                    developing CI/CD pipelines, and improving reliability of autonomous-vehicle platforms using
                                    SIL/HIL validation and robust engineering practices.
                                </p>
                            </li>

                            <li className="group">
                                <span className="block text-xs text-neutral-500 font-mono-tech mb-1">
                                    2025 - Present
                                </span>
                                <span className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                                    Researcher - Smart Transportation Systems, Ruppin
                                </span>
                                <p className="text-sm text-neutral-600 mt-1">
                                    Developing LLM-powered traffic prediction models, real-time ETA optimization, and 
                                    data-driven mobility solutions using real-world transportation data.
                                </p>
                            </li>

                        </ul>
                    </div>

                    {/* EDUCATION */}
                    <div>
                        <h4 className="text-white mb-6 border-b border-neutral-800 pb-2 font-syncopate font-bold">
                            EDUCATION
                        </h4>

                        <ul className="space-y-4">
                            <li>
                                <span className="block text-xs text-neutral-500 font-mono-tech mb-1">
                                    2020 - 2024
                                </span>
                                <span className="text-lg font-bold">
                                    B.Sc. Computer Engineering
                                </span>
                                <p className="text-sm text-neutral-600 mt-1">
                                    Ruppin Academic Center - Final project: AI-based fake news detection system, 
                                    presented at IMT Lucca, Italy.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}


const Footer = () => {
    return (
        <footer id="contact" className="bg-neutral-950 py-20 px-6 border-t border-neutral-900 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl md:text-6xl font-syncopate font-bold text-white">
                        LET'S CONNECT
                    </h2>
                    <p className="text-neutral-500 font-mono-tech max-w-sm">
                        Currently available for new opportunities. <br/>
                        Feel free to reach out for collaborations or just a chat.
                    </p>
                    <a 
                        href="mailto:sMatan10@gmail.com" 
                        className="text-2xl md:text-3xl font-light hover:text-blue-500 transition-colors duration-300 interactive flex items-center gap-4 group font-mono-tech"
                        data-cursor="EMAIL ME"
                    >
                        <Mail className="w-6 h-6" />
                        sMatan10@gmail.com
                    </a>
                </div>

                <div className="flex flex-col gap-4 items-start md:items-end">
                    <a href="https://www.linkedin.com/in/matanshemesh/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold tracking-widest hover:text-blue-400 transition-colors interactive" data-cursor="LINKEDIN">
                        LINKEDIN PROFILE <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/MatanShemesh10" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold tracking-widest hover:text-blue-400 transition-colors interactive" data-cursor="GITHUB">
                        GITHUB PROFILE <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm font-bold tracking-widest hover:text-blue-400 transition-colors interactive" data-cursor="WHATSAPP">
                        +972 53 825 3062 <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

            </div>
            
            <div className="mt-20 border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 font-mono-tech">
                <p>© 2025 MATAN SHEMESH. ALL RIGHTS RESERVED.</p>
                <p>BUILT WITH REACT & TAILWIND</p>
            </div>
        </footer>
    )
}

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white">
      
      {/* Cinematic Overlays */}
      <div className="grain"></div>
      <div className="vignette"></div>
      
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Ticker />
        
        <section id="work" className="w-full">
            {/* Project Card Section Title - added for context */}
            <div className="p-16 text-center border-b border-neutral-900">
                <h2 className="text-xl md:text-4xl font-syncopate font-bold text-white tracking-wider">
                    // SELECTED PROJECTS //
                </h2>
            </div>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>

        <Resume />
      </main>

      <Footer />
    </div>
  );
};

export default App;