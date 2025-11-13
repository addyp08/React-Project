import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import CallUs from "./components/Home/CallUs";
import Quiz from "./components/Quiz/quiz";
import { Quizprovider } from "./components/Quiz/context";
import Subscription from "./components/Home/Subscription";
import FreePreview from "./components/Home/FreePreview";
import PoliciesPage from "./components/Home/Policies";
import BlogPage from "./components/Home/Blog";
import TutorInfo from "./components/Home/Tutorinfo";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/call-us" element={<CallUs />} />
          <Route path="/quiz" element={<Quizprovider><Quiz/></Quizprovider>}/>
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/freepreview" element={<FreePreview />}/>
          <Route path="/policies" element={<PoliciesPage />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/tutor" element={<TutorInfo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}