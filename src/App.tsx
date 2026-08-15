import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BrooklynHeights from "./pages/BrooklynHeights";
import BrownstoneBuyingGuide from "./pages/BrownstoneBuyingGuide";
import Chelsea from "./pages/Chelsea";
import DowntownBrooklyn from "./pages/DowntownBrooklyn";
import Dumbo from "./pages/Dumbo";
import Harlem from "./pages/Harlem";
import Home from "./pages/Home";
import IdxRentals from "./pages/IdxRentals";
import IdxSales from "./pages/IdxSales";
import Neighborhoods from "./pages/Neighborhoods";
import NotMigrated from "./pages/NotMigrated";
import Services from "./pages/Services";
import StanleyMontfort from "./pages/StanleyMontfort";
import SuccessStories from "./pages/SuccessStories";
import TwoFamilyHouseForSaleNyc from "./pages/TwoFamilyHouseForSaleNyc";
import UpperEastSide from "./pages/UpperEastSide";
import UpperWestSide from "./pages/UpperWestSide";

export default function App() {
  return (
    <BrowserRouter>
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/brooklyn-heights" element={<BrooklynHeights />} />
        <Route path="/chelsea" element={<Chelsea />} />
        <Route path="/downtown-brooklyn" element={<DowntownBrooklyn />} />
        <Route path="/dumbo" element={<Dumbo />} />
        <Route path="/harlem" element={<Harlem />} />
        <Route path="/upper-east-side" element={<UpperEastSide />} />
        <Route path="/upper-west-side" element={<UpperWestSide />} />
        <Route path="/stanley-montfort" element={<StanleyMontfort />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/2-family-house-for-sale-nyc" element={<TwoFamilyHouseForSaleNyc />} />
        <Route
          path="/advice-for-buyers-looking-to-purchase-brownstones"
          element={<BrownstoneBuyingGuide />}
        />
        <Route path="/neighborhoods" element={<Neighborhoods />} />
        <Route path="/idx-sales" element={<IdxSales />} />
        <Route path="/idx-rentals" element={<IdxRentals />} />
        <Route path="*" element={<NotMigrated />} />
      </Routes>
    </BrowserRouter>
  );
}
