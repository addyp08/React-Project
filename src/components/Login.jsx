import { FaUser, FaLock } from "react-icons/fa";
import bgVideo from "../assets/Login-bg.mp4";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 "></div>

      {/* Glassmorphism Login Box */}
      <div className="relative z-10 bg-white/0 backdrop-blur-xs rounded-2xl h-100 p-10 shadow-lg border border-white/20 w-102">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Login</h1>
        <form className="space-y-6">
          {/* Email Field */}
          <div className="flex items-center bg-white/20 rounded-lg p-3">
            <FaUser className="text-white text-lg mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-white w-full placeholder-gray-300"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center bg-white/20 rounded-lg p-3">
            <FaLock className="text-white text-lg mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white w-full placeholder-gray-300"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white border-2 border-purple-500 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.8)] transition-all duration-300"
          >
            Login
          </button>
          <h2>Dont have an account? <Link to="/signup">Signup</Link></h2>
          <h2></h2>
        </form>
      </div>
    </section>
  );
}