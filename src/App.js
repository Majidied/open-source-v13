import Hero from "./components/Hero/Hero";
import Planning from "./components/Planning/Planning";
import Historique from "./components/Historique/Historique";
import Team from "./components/Team/Team";
import ARSection from "./components/ARSection/ARSection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <Planning />
      <Historique />
      <Team />
      <ARSection />
      <Footer />
    </div>
  );
}

export default App;
