import { useState } from "react";
import { motion } from "framer-motion";
import bgVideo from "../../assets/Bg-video.mp4"; // Your MP4 file

export default function BlogPage() {
  const blogs = [
    {
      title: "Web Development",
      shortDesc: "Web development is booming with modern frameworks.",
      fullDesc: "Our platform teaches HTML, CSS, JS, and React with real-world projects and AI-powered tools."
    },
    {
      title: "Data Science",
      shortDesc: "Data Science drives innovation in every industry.",
      fullDesc: "Learn Python, ML, and data visualization with hands-on labs and interactive dashboards."
    },
    {
      title: "Cyber Security",
      shortDesc: "Cybersecurity is critical in the digital era.",
      fullDesc: "Master ethical hacking, secure coding, and threat analysis with immersive simulations."
    },
    {
      title: "Cloud Computing",
      shortDesc: "Cloud skills are in high demand globally.",
      fullDesc: "Explore AWS, Azure, and cloud architecture with guided labs and futuristic tools."
    }
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Dynamic Video Background */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 mt-15">Trending Courses Blog</h1>

        {/* Overlapping Boxes */}
        <div className="relative flex flex-col items-center ml-80">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: activeCard === index ? 1.15 : 1,
                zIndex: activeCard === index ? 10 : index
              }}
              transition={{ duration: 0.4 }}
              className="absolute bg-white/10 backdrop-blur-lg rounded-xl p-13 shadow-lg border border-white/20 w-100 cursor-pointer hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition"
              style={{
                top: `${index * 80}px`,
                left: `${index * 80}px`
              }}
            >
              <h2 className="text-2xl font-bold mb-6">{blog.title}</h2>
              <p className="text-gray-300 mb-4">
                {activeCard === index ? blog.fullDesc : blog.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}