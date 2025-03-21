import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd"; // Import DndProvider
import { HTML5Backend } from "react-dnd-html5-backend"; // Import HTML5Backend for drag-and-drop functionality
import CrashCourse from "./CrashCourse";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreatePage from "./CreatePage";
import AgentPage from "./AgentPage";
import BuyGenCreditsPage from "./BuyGenCreditsPage"; 
import FAQSection from "./FAQSection";
import OvermindPage from "./OvermindPage";
import SwiperComponent from "components/SwiperComponent";
import ShopPage from "./ShopPage";
import ManagePage from "./ManagePage";
import BondPage from "./BondPage";
import ChainHorizontalBar from "../components/ChainHorizontalBar";
import { useState } from "react"; 
import { Chain } from "../utils/chains"; // Assuming this is defined correctly in your utils/chains.ts
import ItemPage from "./ItemPage";
import PreOrderPage from "./PreOrderPage"; // Pre-order page
import ChainPage from "./ChainPage";  // Dynamic Chain Page component
import ProfilePage from "./ProfilePage"; // Import the Profile Page
import AnimatedPreOrderButton from "components/AnimatedPreOrderButton";



function App() {
  // Initialize selectedChain state
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);

  return (
    <DndProvider backend={HTML5Backend}> {/* Wrap the entire app with DndProvider for drag-and-drop */}
      <Router>
        <main className="pt-4">
          <Navbar />

          {/* Chain selection bar */}
          <ChainHorizontalBar selectedChain={selectedChain} setSelectedChain={setSelectedChain} />

          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <section className="text-center max-w-screen-lg mx-auto py-1">
                    <h1 className="text-5xl font-bold text-accent2 mt-14">
                      ISAI Agent Studio<br />
                      <span className="text-accent1 text-3xl">Craft, Evolve, and Interact with Intelligent NFTs.</span>
                    </h1>
                    <p className="text-3xl text-gray-300 mt-5 -mb-14">
                      A Workflow Design Studio and Components Store for Autonomous Agents
                    </p>
                  </section>

                  {/* Swiper Component Section */}
                  <section className="mt-0">
                    <SwiperComponent />
                  </section>

                  <section className="mt-8 text-center">
                    <AnimatedPreOrderButton />
                  </section>
                  {/* Crash Course Section */}
                  <section className="mt-8">
                    <CrashCourse />
                  </section>

                  {/* FAQ Section */}
                  <section className="mt-0">
                    <FAQSection />
                  </section>
                </>
              }
            />

            {/* Route for Pre-Order Page */}
            <Route path="/pre-order" element={<PreOrderPage />} />

            {/* Dynamic Routes */}
            <Route path="/agent/:name" element={<AgentPage />} /> {/* Dynamic Agent Page */}

            <Route path="/create" element={<CreatePage />} /> {/* Character Creation Page */}

            <Route path="/shop" element={<ShopPage />} /> {/* Shop Page */}

            {/* Manage Page with selectedChain prop */}
            <Route path="/manage" element={<ManagePage selectedChain={selectedChain} />} />

            <Route path="/agents" element={<BondPage />} /> {/* Bonding Agents */}

            <Route path="/overmind" element={<OvermindPage />} /> {/* Overmind Page */}

            <Route path="/buy-gen-credits" element={<BuyGenCreditsPage />} /> {/* Buy Gen Credits Page */}

            <Route path="/item/:id" element={<ItemPage />} /> {/* Individual Item Page */}

            <Route path="/chain/:id" element={<ChainPage />} /> {/* Dynamic Chain Page */}
            
            <Route path="/profile" element={<ProfilePage />} />
 

          </Routes>
        </main>
        <Footer />
      </Router>
    </DndProvider>
  );
}

export default App;
