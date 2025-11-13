import { motion } from "framer-motion";

export default function Subscription() {
  const courses = [
    { name: "Web Development", price: "$199", description: "Learn HTML, CSS, JavaScript, React." },
    { name: "Data Science", price: "$249", description: "Master Python, Pandas, Machine Learning." },
    { name: "Cyber Security", price: "$299", description: "Secure systems, ethical hacking, and more." },
    { name: "Cloud Computing", price: "$279", description: "AWS, Azure, and cloud architecture." },
  ];

  return (
    <section className="relative min-h-screen py-16 px-6 text-white bg-black overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
      </div>

      <h1 className="text-4xl font-orbitron text-center mb-12 mt-20 relative z-10">Subscribe to Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{course.name}</h2>
            <p className="text-gray-300 mb-4">{course.description}</p>
            <div className="text-3xl font-bold text-purple-400 mb-6">{course.price}</div>
            <button className="w-full bg-purple-600 text-glow py-3 rounded-lg font-semibold border-2 border-purple-400 hover:border-purple-600 hover:shadow-[0_0_15px_rgba(147,51,234,0.8)] transition">
              Subscribe
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}