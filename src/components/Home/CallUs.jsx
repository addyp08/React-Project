import { useState } from "react";
import { motion } from "framer-motion"

export default function CallUs() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${query}`);
    setQuery("");
  };

  return (
    
<motion.section
      className="bg-animated-gradient text-white min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Helpline</h1>
        <p className="text-gray-300 text-center mb-6">
          Have a concern or query? Let us know below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your concern or query here..."
            className="w-full h-32 p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Emergency Contact */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">For quick connect, call us at:</p>
          <a href="tel:+919876543210">
            +91 98765 43210
          </a>
        </div>
      </div>
     </motion.section>
  );
}