import { Link } from "react-router-dom";

export default function TutorCard() {
  return (
    <div className="absolute right-8 bottom-24 bg-animatedR-gradient text-white rounded-xl p-6 shadow-lg w-64">
      <h3 className="text-lg font-semibold">Looking for a Tutor?</h3>
      <button className="mt-4 bg-black text-neonGreen px-4 py-2 rounded-full font-bold hover:bg-gray-400 transition cursor-pointer">
        <span><Link to="/tutor">Learn more</Link></span>
      </button>
    </div>
  );
}
