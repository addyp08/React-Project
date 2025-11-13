import { motion } from 'framer-motion';
import FacebookIcon from '../../assets/facebook.svg';
import TwitterIcon from '../../assets/twitter.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import TutorCard from './TutorCard.jsx';
import shape from "../../assets/shape.png";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
  <section className="relative bg-animated-gradient text-glow min-h-screen  flex items-center  px-8">
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-4xl w-full py-8"
        >
          {/* Use responsive flex so TutorCard sits beside the paragraph on md+ screens; vertically center children */}
          <div className="md:flex md:items-center md:gap-8">
            <div className="max-w-xl text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight pt-24">
                Education reinvented.<br />To unlock <span className="text-accent">potential</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Welcome to The Online School – personalised, flexible education for every learner.
              </p>
            </div>

            {/* TutorCard wrapper: override its absolute positioning so it flows beside the paragraph */}
            <div className="tutor-wrapper mt-6 md:mt-0 md:ml-10 transform md:translate-x-65 md:translate-y-60">
              <TutorCard />
            </div>
          </div>
          {/* CSS override for the TutorCard's internal absolute class so it behaves like a normal card here */}
          <style>{`.tutor-wrapper .absolute{position:static !important;right:auto !important;bottom:auto !important;}`}</style>
        </motion.section>
      </section>

      {/* Futuristic Footer */}
      <footer className="bg-animated-gradient text-glow py-10 mt-0.5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start">
            <img src={shape} alt="JetX Learning Logo" className="h-12 w-auto mb-3" />
            <p className="text-gray-300 text-sm">
              Empowering learners with futuristic education solutions.
            </p>
          </div>

          {/* Column 2: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ml-80">Contact Us</h3>
            <a href="mailto:support@jetxlearning.com" className="text-gray-300 text-sm ml-80">Email: support@jetxlearning.com</a>
            <br />
            <a href="tel:+919876543210" className="text-gray-300 text-sm mt-2 ml-80">Phone: +91 98765 43210</a>
            

          <div className="flex space-x-4 mt-4 ml-102">
            {[
              { name: 'facebook', src: FacebookIcon, href: 'https://www.facebook.com' },
              { name: 'twitter', src: TwitterIcon, href: 'https://twitter.com' },
              { name: 'linkedin', src: LinkedinIcon, href: 'https://www.linkedin.com' }
            ].map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <img src={s.src} alt={`${s.name} icon`} className="h-5 w-5" />
              </a>
            ))}
          </div>

          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-white/20 pt-4">
          © {new Date().getFullYear()} JetX Learning. All rights reserved.
        </div>
      </footer>
    </>
  );
}