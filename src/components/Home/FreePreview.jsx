import { motion } from "framer-motion";

export default function PreviewPage() {
  const previews = [
    {
      title: "Web Development Basics",
      description: "Learn HTML, CSS, and JavaScript fundamentals.",
      video: "https://www.youtube.com/embed/erEgovG9WBs"
    },
    {
      title: "Data Science Essentials",
      description: "Explore Python, Pandas, and Machine Learning basics.",
      video: "https://www.youtube.com/embed/RBSUwFGa6Fk"
    },
    {
      title: "Cyber Security Fundamentals",
      description: "Understand ethical hacking and secure systems.",
      video: "https://www.youtube.com/embed/j0f1A8jrgTc"
    },
    {
      title: "Cloud Computing Overview",
      description: "Learn AWS, Azure, and cloud architecture concepts.",
      video: "https://www.youtube.com/embed/N0SYCyS2xZA"
    }
  ];

  return (
    
<section className="relative min-h-screen futuristic-bg text-white px-6 py-12 overflow-hidden">
  {/* Neon Grid Overlay */}
  <div className="neon-grid"></div>
  <h1 className="text-4xl font-orbitron text-center mb-12 relative z-10 mt-20">Free Course Previews</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {previews.map((preview, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition"
          >
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <iframe
                className="w-full h-full"
                src={preview.video}
                title={preview.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{preview.title}</h2>
            <p className="text-gray-300 mb-6">{preview.description}</p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold border-2 border-purple-400 hover:border-purple-600 hover:shadow-[0_0_15px_rgba(147,51,234,0.8)] transition">
              Subscribe for Full Course
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}