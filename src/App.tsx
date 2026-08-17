import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import AboutUs from "./pages/AboutUs";
import BedfordStuyvesant from "./pages/BedfordStuyvesant";
import Blog from "./pages/Blog";
import BrooklynHeights from "./pages/BrooklynHeights";
import BrownstoneBuyingGuide from "./pages/BrownstoneBuyingGuide";
import Chelsea from "./pages/Chelsea";
import ChelseaCoOps from "./pages/ChelseaCoOps";
import ChelseaTownhouses from "./pages/ChelseaTownhouses";
import CrownHeights from "./pages/CrownHeights";
import DowntownBrooklyn from "./pages/DowntownBrooklyn";
import Dumbo from "./pages/Dumbo";
import Harlem from "./pages/Harlem";
import HarlemBrownstones from "./pages/HarlemBrownstones";
import HarlemCondos from "./pages/HarlemCondos";
import HarlemSros from "./pages/HarlemSros";
import HarlemCoOwnership from "./pages/HarlemCoOwnership";
import Home from "./pages/Home";
import HomeValuation from "./pages/HomeValuation";
import MortgageCalculator from "./pages/MortgageCalculator";
import IdxRentals from "./pages/IdxRentals";
import IdxSales from "./pages/IdxSales";
import Neighborhoods from "./pages/Neighborhoods";
import NotMigrated from "./pages/NotMigrated";
import NycBuyersAgentService from "./pages/NycBuyersAgentService";
import NycListingAgentService from "./pages/NycListingAgentService";
import NycMultifamilyRealEstateAgentService from "./pages/NycMultifamilyRealEstateAgentService";
import ParkSlope from "./pages/ParkSlope";
import Services from "./pages/Services";
import StanleyMontfort from "./pages/StanleyMontfort";
import SuccessStories from "./pages/SuccessStories";
import TwoFamilyHouseForSaleNyc from "./pages/TwoFamilyHouseForSaleNyc";
import UpperEastSide from "./pages/UpperEastSide";
import UpperEastSideCoOps from "./pages/UpperEastSideCoOps";
import UpperEastSideCondos from "./pages/UpperEastSideCondos";
import UpperEastSideTownhouses from "./pages/UpperEastSideTownhouses";
import UpperWestSide from "./pages/UpperWestSide";
import UpperWestSideCoOps from "./pages/UpperWestSideCoOps";
import UpperWestSideCondos from "./pages/UpperWestSideCondos";
import UpperWestSideTownhouses from "./pages/UpperWestSideTownhouses";
import Williamsburg from "./pages/Williamsburg";

export default function App() {
  return (
    <BrowserRouter>
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bedford-stuyvesant" element={<BedfordStuyvesant />} />
        <Route path="/brooklyn-heights" element={<BrooklynHeights />} />
        <Route path="/chelsea" element={<Chelsea />} />
        <Route path="/chelsea-co-ops-2" element={<ChelseaCoOps />} />
        <Route path="/chelsea-townhouses" element={<ChelseaTownhouses />} />
        <Route path="/crown-heights" element={<CrownHeights />} />
        <Route path="/downtown-brooklyn" element={<DowntownBrooklyn />} />
        <Route path="/dumbo" element={<Dumbo />} />
        <Route path="/harlem" element={<Harlem />} />
        <Route path="/harlem-brownstones" element={<HarlemBrownstones />} />
        <Route path="/harlem-condos" element={<HarlemCondos />} />
        <Route path="/harlem-sros" element={<HarlemSros />} />
        <Route path="/harlem-co-ownership" element={<HarlemCoOwnership />} />
        <Route path="/park-slope" element={<ParkSlope />} />
        <Route path="/upper-east-side" element={<UpperEastSide />} />
        <Route path="/upper-east-side-co-ops" element={<UpperEastSideCoOps />} />
        <Route path="/upper-east-side-condos" element={<UpperEastSideCondos />} />
        <Route path="/upper-east-side-townhouses" element={<UpperEastSideTownhouses />} />
        <Route path="/upper-west-side" element={<UpperWestSide />} />
        <Route path="/upper-west-side-co-ops-2" element={<UpperWestSideCoOps />} />
        <Route path="/upper-west-side-condos" element={<UpperWestSideCondos />} />
        <Route path="/upper-west-side-townhouses" element={<UpperWestSideTownhouses />} />
        <Route path="/williamsburg" element={<Williamsburg />} />
        <Route path="/stanley-montfort" element={<StanleyMontfort />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/2-family-house-for-sale-nyc" element={<TwoFamilyHouseForSaleNyc />} />
        <Route path="/nyc-buyers-agent-service" element={<NycBuyersAgentService />} />
        <Route path="/nyc-listing-agent-service" element={<NycListingAgentService />} />
        <Route
          path="/nyc-multifamily-real-estate-agent-service"
          element={<NycMultifamilyRealEstateAgentService />}
        />
        <Route path="/home-valuation" element={<HomeValuation />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
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
