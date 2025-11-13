import { motion as Motion } from "framer-motion";
import tutorBg from "../../assets/Tutor-bg.mp4"; // Add your futuristic background image
import tutor1 from "../../assets/tutor1.png";
import tutor2 from "../../assets/tutor2.png";
import tutor3 from "../../assets/tutor3.png";
import tutor4 from "../../assets/tutor4.jpg";

export default function KnowMore() {
  const tutors = [
    {
      name: "Shubham Bandal",
      expertise: "Goli Specialist",
      experience: "1+ years",
      skills: "DGAF Techniques,No Water Goli Application, Autism Handling",
      approach: "Hands-on projects and real-world applications",
      img: tutor1
    },
    {
      name: "Kushal",
      expertise: "Flirting + YD",
      experience: "4+ years",
      skills: "Charm Offensive, Kachi Maggi, Blowback Techniques",
      approach: "Interact bihari and predictive modeling",
      img: tutor2
    },
    {
      name: "Tage",
      expertise: "Salt in rice",
      experience: "6+ years",
      skills: "Last 3 drags, acting straight, Ahbhal",
      approach: "Immersive simulations and threat analysis",
      img: tutor3
    },
    {
      name: "Addy",
      expertise: "Eating",
      experience: "22+ years",
      skills: "Infinite hunger, Rolling perfect J, sleep deprivation",
      approach: "Guided labs and futuristic deployment strategies",
      img: tutor4
    }
  ];

  return (
    <section
      className="relative min-h-screen text-white overflow-hidden"
    >
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                <source src={tutorBg} type="video/mp4" />
        </video>
      <h1 className="text-4xl font-orbitron text-center mb-12 mt-15 text-white">Meet Our Expert Tutors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-25 max-w-7xl mx-auto">
        {tutors.map((tutor, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition"
          >
            <img
              src={tutor.img}
              alt={`${tutor.name}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{tutor.name}</h2>
            <p className="text-gray-300 mb-2"><strong>Expertise:</strong> {tutor.expertise}</p>
            <p className="text-gray-300 mb-2"><strong>Experience:</strong> {tutor.experience}</p>
            <p className="text-gray-300 mb-2"><strong>Skills:</strong> {tutor.skills}</p>
            <p className="text-gray-300"><strong>Approach:</strong> {tutor.approach}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}