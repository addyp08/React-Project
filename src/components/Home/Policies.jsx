import { useState } from "react";
import { motion as Motion } from "framer-motion";
import futuristicBg from "../../assets/Bg-image.jpg"; // Your futuristic image

export default function PoliciesPage() {
  const policies = [
    { title: "Privacy Policy", description: "We ensure your data is secure and never shared without consent." },
    { title: "Refund Policy", description: "Refunds are processed within 7 working days for eligible cases." },
    { title: "Course Access", description: "Access to purchased courses is lifetime unless stated otherwise." },
    { title: "Code of Conduct", description: "Maintain respectful behavior in community forums and sessions." },
    { title: "Certification Policy", description: "Certificates are issued upon successful course completion." },
    { title: "Support Policy", description: "24/7 support available via email and chat for all learners." },
    { title: "Content Usage", description: "Course content is for personal use only, redistribution prohibited." },
    { title: "Updates Policy", description: "Courses are updated regularly to match industry standards." }
  ];


  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <section
      className="relative min-h-screen text-white px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${futuristicBg})` }}
    >
      <h1 className="text-4xl font-orbitron text-center mb-10 mt-20">Platform Policies</h1>

      {/* Glass Container */}
  <Motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
         <div>       
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {policies.map((policy, index) => (
            <li
              key={index}
              onClick={() => setActivePolicy(policy)}
              className="cursor-pointer bg-white/10 rounded-lg p-4 hover:bg-white/20 transition text-center font-semibold hover:shadow-[0_0_15px_rgba(147,51,234,0.6)]"
            >
              {policy.title}
            </li>
          ))}
        </ul>
        </div>
      </Motion.div>

      {/* Floating Description */}
      {activePolicy && (
        <Motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 w-80 text-center"
        >
          <h2 className="text-xl font-bold mb-4">{activePolicy.title}</h2>
          <p className="text-gray-300 mb-4">{activePolicy.description}</p>
          <button
            onClick={() => setActivePolicy(null)}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            Close
          </button>
  </Motion.div>
      )}
    </section>
  );
}