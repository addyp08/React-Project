export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary via-purple-800 to-pink-700 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300" />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">Sign Up</button>
        </form>
      </div>
    </section>
  );
}