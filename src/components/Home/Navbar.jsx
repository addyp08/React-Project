import shape from "../../assets/shape.png";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate as navigate } from "react-router-dom";
import clickSound from "../../assets/clickSound.mp3";
import hoverEffect from "../../assets/hover-effect.mp3";

export default function Navbar() {
  
const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
    setTimeout(() => navigate("/login"), 300); // slight delay for sound
  };

  
const playHoverSound = () => {
  const audio = new Audio(hoverEffect);
  audio.volume = 0.3;
  audio.play()
};


  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white bg-transparent z-50">
      {/* Logo and Text */}
      <Motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 , ease: "easeOut"}}    
       className="flex flex-col items-center">
        <img src={`${shape}`} alt="JetX Learning Logo" className="h-20 w-20 mb-1" />
        
    <span
    className="text-1xl font-bold mt-1 tracking-widest
     bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 
     text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] 
     hover:scale-110 transition-transform duration-300"
    ><Link to="/">
      JETX LEARNING
      </Link>
        </span>
      </Motion.div>

      {/* Navigation Links */}
      <Motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 , ease: "easeOut"}}
      >
      <ul className="hidden md:flex space-x-6">
  <li  onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/" className="hover:text-accent transition">Home</Link></span>
  </li>
  <li onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/freepreview">Free Preview</Link></span>
  </li>
  <li onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/quiz" >Quick Test</Link></span>
  </li>

  <li onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/subscription" >Subscriptions</Link></span>
  </li>
  <li onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/policies">Policies</Link></span>
  </li>
  <li onClick={playClickSound} onMouseEnter={playHoverSound} className="nav-item px-4 py-2 rounded-lg cursor-pointer">
    <span><Link to="/blog">Blog</Link></span>
  </li>
</ul>
</Motion.div>

      {/* Call Us Button */}
     



<button
  onClick={playClickSound}
  className="relative px-6 py-3 font-bold text-white bg-transparent border-2 border-white rounded-none overflow-hidden transition-all duration-500 cursor-pointer"
  style={{
    clipPath: "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.08)"
  }}
><Link to="/login">Login</Link>
</button>

    </nav>
  );
}