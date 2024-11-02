import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page";
import ChatInterface from "./chat-interface";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
}
