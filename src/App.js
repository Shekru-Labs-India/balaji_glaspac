import "./assets/css/style.css";
import "./assets/css/meanmenu.css";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import WineBottles from "./pages/WineBottles";
import BeerBottles from "./pages/BeerBottles";
import SpiritsBottles from "./pages/SpiritsBottles";
import ChampagneBottles from "./pages/ChampagneBottles";
import WaterBottles from "./pages/WaterBottles";
import JuiceSodaBottles from "./pages/JuiceSodaBottles";
import SpecialtyDrinkBottles from "./pages/SpecialtyDrinkBottles";
import FoodJars from "./pages/FoodJars";
import OralLiquidBottles from "./pages/OralLiquidBottles";
import DropperBottles from "./pages/DropperBottles";
import LotionSerumBottles from "./pages/LotionSerumBottles";
import VialsAmpoules from "./pages/VialsAmpoules";
import TabletCapsuleBottles from "./pages/TabletCapsuleBottles";
import SpecialtyPharmaceuticalBottles from "./pages/SpecialtyPharmaceuticalBottles";
import PerfumeBottles from "./pages/PerfumeBottles";
import IndustrialBottles from "./pages/IndustrialBottles";
import CustomizableBottles from "./pages/CustomizableBottles";
import PremiumBottles from "./pages/PremiumBottles";
import EcoFriendlyBottles from "./pages/EcoFriendlyBottles";
import Clients from "./pages/Clients";
import About from "./pages/About";
import AlcoholBrevrages from "./pages/AlcoholBeavrage";
import AlcoholBeverage from "./pages/AlcoholBeavrage";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/wine-bottles" element={<WineBottles />} />
        <Route path="/beer-bottles" element={<BeerBottles />} />
        <Route path="/spirits-bottles" element={<SpiritsBottles />} />
        <Route path="/champagne-bottles" element={<ChampagneBottles />} />
        <Route path="/water-bottles" element={<WaterBottles />} />
        <Route path="/juice-soda-bottles" element={<JuiceSodaBottles />} />
        <Route
          path="/specialty-drink-bottles"
          element={<SpecialtyDrinkBottles />}
        />
        <Route path="/food-jars" element={<FoodJars />} />
        <Route path="/oral-liquid-bottles" element={<OralLiquidBottles />} />
        <Route path="/dropper-bottles" element={<DropperBottles />} />
        <Route path="/lotion-serum-bottles" element={<LotionSerumBottles />} />
        <Route path="/vials-ampoules" element={<VialsAmpoules />} />
        <Route
          path="/tablet-capsule-bottles"
          element={<TabletCapsuleBottles />}
        />
        <Route
          path="/specialty-pharmaceutical-bottles"
          element={<SpecialtyPharmaceuticalBottles />}
        />
        <Route path="/perfume-bottles" element={<PerfumeBottles />} />
        <Route path="/industrial-bottles" element={<IndustrialBottles />} />
        <Route path="/customizable-bottles" element={<CustomizableBottles />} />
        <Route path="/premium-bottles" element={<PremiumBottles />} />
        <Route path="/eco-friendly-bottles" element={<EcoFriendlyBottles />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/alcoholbeverage" element={<AlcoholBeverage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
