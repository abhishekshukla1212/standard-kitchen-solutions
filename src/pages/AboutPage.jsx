import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaVolumeMute, FaVolumeUp, FaCheckCircle } from "react-icons/fa";

const teamMembers = [
  {
    name: "Krishna Yadav",
    role: "Founder",
    bio: "Hello, I am Krishna. I am the founder of Standard Kitchen Solutions, driven by a passion for functional and beautiful design.",
    image: "/team/Krishna Yadav.webp",
    verified: true,
    instagram: "https://instagram.com/krishnayadav_67",
  },
  {
    name: "Mangesh Vishwakarma",
    role: "Team Member",
    bio: "Hello, I am Mangesh. I am a dedicated professional specializing in innovative modular designs and space optimization for modern homes.",
    image: "/team/Mangesh.webp",
    verified: false,
    instagram: "https://instagram.com/mangesh_vk_",
  },
  {
    name: "Ankit",
    role: "Team Member",
    bio: "Hello, I am Ankit. I am a master carpenter specializing in bespoke, high-quality finishes for your dream spaces.",
    image: "/team/Ankit.webp",
    verified: false,
  },
  {
    name: "Suraj Vishwakarma",
    role: "Team Member",
    bio: "Hello, I am Suraj. I am a dedicated professional ensuring flawless installations, repairs, and perfect execution on site.",
    image: "/team/Suraj.webp",
    verified: false,
  },
  {
    name: "Dinesh Vishwakarma",
    role: "Master Carpenter",
    bio: "Hello, I am Dinesh. I bring years of expertise in premium woodwork, ensuring every cabinet and wardrobe is crafted to absolute perfection.",
    image: "/team/Dinesh Vishwakarma.webp",
    verified: false,
  },
  {
    name: "Ramprasad Yadav",
    role: "Interior Expert",
    bio: "Hello, I am Ramprasad. I oversee our custom modular interior installations, delivering flawless finishing and site management on every project.",
    image: "/team/Ramprasad Yadav.webp",
    verified: false,
  },
];

function AboutPage({ onBack, onOpenContact, onOpenKitchen, onOpenCarpentry }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-darktext selection:bg-olive/30 overflow-x-hidden">
      <Navbar 
        onGoHome={onBack} 
        onOpenContact={onOpenContact}
        onOpenKitchen={onOpenKitchen}
        onOpenCarpentry={onOpenCarpentry}
        isAboutPage={true} 
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden px-6 md:px-12 lg:px-24">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="/materials/Story.webm"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-ivory max-w-2xl">
          <p className="uppercase tracking-[4px] text-olive mb-4 font-bold text-sm md:text-base drop-shadow-md">
            The Founder's Story
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Building the <br/>
            Heart of Your <br/>
            Home
          </h1>
          
          {/* Mute/Unmute Toggle */}
          <button 
            onClick={toggleMute}
            className="mt-4 flex items-center gap-3 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium transition-all duration-300 border border-white/20"
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            <span>{isMuted ? "Unmute Story" : "Mute Story"}</span>
          </button>
        </div>
      </section>

      {/* History / Mission */}
      <section className="py-12 md:py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-olive/10 text-olive font-bold tracking-widest uppercase text-sm border border-olive/20">
            Est. 4 Years Ago
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#4A2E1B] leading-tight">
            Crafting Spaces That Inspire
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-700 font-medium">
            Four years ago, Standard Kitchen Solutions began with a singular, unwavering vision: to transform ordinary kitchens into the vibrant, beating heart of the home. We understand that a kitchen isn't just about cabinets and counters—it's where memories are made, recipes are passed down, and families come together.
            <br /><br />
            Today, our dedicated team of master craftsmen brings unparalleled precision to every project. Whether it's a breathtaking modular setup, intricate custom carpentry, or flawless chimney and hob installations, we don't just build kitchens—we build lasting trust.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 md:py-20 bg-[#F8F9FA] px-4 border-t border-zinc-200">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A2E1B]">Meet Our Team</h2>
            <p className="mt-4 text-lg text-zinc-500 font-medium">The skilled professionals bringing your dream kitchen to life.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-2 lg:p-1.5 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="bg-[#EAECEF] rounded-[1.25rem] overflow-hidden flex flex-col h-full relative border border-black/5">
                  
                  {/* Image Section */}
                  <div className="relative h-72 sm:h-56 lg:h-48 w-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div className="absolute -bottom-1 left-0 w-full h-16 lg:h-12 bg-gradient-to-t from-[#EAECEF] via-[#EAECEF]/60 to-transparent"></div>
                  </div>

                  {/* Text Section */}
                  <div className="px-5 lg:px-4 pb-5 lg:pb-4 pt-0 relative z-10 flex-1 flex flex-col text-left">
                    <div className="flex items-center gap-1.5 lg:gap-1">
                      <h3 className="text-lg lg:text-sm font-bold text-zinc-900 tracking-tight">{member.name}</h3>
                      {member.verified && (
                        <FaCheckCircle className="text-green-700 text-[16px] lg:text-[14px]" />
                      )}
                    </div>
                    
                    <p className="text-sm lg:text-[11px] text-zinc-700 leading-relaxed lg:leading-snug mt-2 lg:mt-1.5 mb-5 lg:mb-4 flex-1">
                      <span className="font-bold text-zinc-900">{member.role}</span> &bull; <span className="hidden lg:inline">{member.bio.substring(0, 70)}...</span><span className="inline lg:hidden">{member.bio}</span>
                    </p>
                    
                    {/* Bottom Action Bar */}
                    <div className="pt-4 lg:pt-3 border-t border-black/5">
                       <a 
                         href={member.instagram || "#"}
                         target={member.instagram ? "_blank" : "_self"}
                         rel={member.instagram ? "noopener noreferrer" : ""}
                         className="w-full bg-white text-zinc-900 px-4 lg:px-3 py-2.5 lg:py-1.5 rounded-full text-sm lg:text-[11px] font-bold shadow-sm hover:bg-zinc-50 transition border border-zinc-200 flex items-center justify-center gap-1.5 lg:gap-1"
                       >
                         Connect <span className="text-lg lg:text-base leading-none font-normal mb-[1px]">+</span>
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer 
        onOpenAbout={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
        onHomeClick={onBack}
        onOpenContact={onOpenContact}
      />
    </main>
  );
}

export default AboutPage;