import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import AboutUs from "./pages/AboutUs";
import BedfordStuyvesant from "./pages/BedfordStuyvesant";
import BedfordStuyvesantBrownstones from "./pages/BedfordStuyvesantBrownstones";
import BedfordStuyvesantCoOps from "./pages/BedfordStuyvesantCoOps";
import BedfordStuyvesantCoOwnership from "./pages/BedfordStuyvesantCoOwnership";
import BedfordStuyvesantCondos from "./pages/BedfordStuyvesantCondos";
import BedfordStuyvesantSros from "./pages/BedfordStuyvesantSros";
import Blog from "./pages/Blog";
import BlogArticlePage from "./pages/BlogArticlePage";
import { BLOG_ARTICLE_REGISTRY } from "./blog/registry";
import BrooklynHeights from "./pages/BrooklynHeights";
import BrooklynHeightsCoOps from "./pages/BrooklynHeightsCoOps";
import BrooklynHeightsCondos from "./pages/BrooklynHeightsCondos";
import BrooklynHeightsTownhouses from "./pages/BrooklynHeightsTownhouses";
import BrownstoneBuyingGuide from "./pages/BrownstoneBuyingGuide";
import BuyingABrownstoneInNyc from "./pages/BuyingABrownstoneInNyc";
import BuyingACondoInNyc from "./pages/BuyingACondoInNyc";
import BuyingSroInNyc from "./pages/BuyingSroInNyc";
import CoOwnershipBuyingInNyc from "./pages/CoOwnershipBuyingInNyc";
import SellingBrownstonesInNyc from "./pages/SellingBrownstonesInNyc";
import SellingCondosInNyc from "./pages/SellingCondosInNyc";
import SellingCoOpsInNyc from "./pages/SellingCoOpsInNyc";
import SellingProbatePropertiesInNyc from "./pages/SellingProbatePropertiesInNyc";
import SellingSrosInNyc from "./pages/SellingSrosInNyc";
import Chelsea from "./pages/Chelsea";
import ChelseaCoOps from "./pages/ChelseaCoOps";
import ChelseaTownhouses from "./pages/ChelseaTownhouses";
import CrownHeights from "./pages/CrownHeights";
import CrownHeightsBrownstones from "./pages/CrownHeightsBrownstones";
import CrownHeightsCoOps from "./pages/CrownHeightsCoOps";
import CrownHeightsCoOwnership from "./pages/CrownHeightsCoOwnership";
import CrownHeightsCondos from "./pages/CrownHeightsCondos";
import CrownHeightsSros from "./pages/CrownHeightsSros";
import DowntownBrooklyn from "./pages/DowntownBrooklyn";
import DowntownBrooklynCondos from "./pages/DowntownBrooklynCondos";
import DownstoneBrooklynCoOps from "./pages/DownstoneBrooklynCoOps";
import Dumbo from "./pages/Dumbo";
import DumboCoOps from "./pages/DumboCoOps";
import DumboCondos from "./pages/DumboCondos";
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
import ParkSlopeBrownstone from "./pages/ParkSlopeBrownstone";
import ParkSlopeCoOps from "./pages/ParkSlopeCoOps";
import ParkSlopeCoOwnership from "./pages/ParkSlopeCoOwnership";
import ParkSlopeCondo from "./pages/ParkSlopeCondo";
import ParkSlopeSro from "./pages/ParkSlopeSro";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import SiteMap from "./pages/SiteMap";
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
import WilliamsburgBrownstones from "./pages/WilliamsburgBrownstones";
import WilliamsburgCondos from "./pages/WilliamsburgCondos";
import WilliamsburgCoOwnership from "./pages/WilliamsburgCoOwnership";

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
        <Route path="/bedford-stuyvesant-brownstones-2" element={<BedfordStuyvesantBrownstones />} />
        <Route path="/bedford-stuyvesant-co-ops-2" element={<BedfordStuyvesantCoOps />} />
        <Route path="/bedford-stuyvesant-co-ownership" element={<BedfordStuyvesantCoOwnership />} />
        <Route path="/bedford-stuyvesant-condos-2" element={<BedfordStuyvesantCondos />} />
        <Route path="/bedford-stuyvesant-sros-2" element={<BedfordStuyvesantSros />} />
        <Route path="/brooklyn-heights" element={<BrooklynHeights />} />
        <Route path="/brooklyn-heights-co-ops-3" element={<BrooklynHeightsCoOps />} />
        <Route path="/brooklyn-heights-condos-3" element={<BrooklynHeightsCondos />} />
        <Route path="/brooklyn-heights-townhouses-2" element={<BrooklynHeightsTownhouses />} />
        <Route path="/chelsea" element={<Chelsea />} />
        <Route path="/chelsea-co-ops-2" element={<ChelseaCoOps />} />
        <Route path="/chelsea-townhouses" element={<ChelseaTownhouses />} />
        <Route path="/crown-heights" element={<CrownHeights />} />
        <Route path="/crown-heights-brownstones-2" element={<CrownHeightsBrownstones />} />
        <Route path="/crown-heights-co-ops-2" element={<CrownHeightsCoOps />} />
        <Route path="/crown-heights-co-ownership-2" element={<CrownHeightsCoOwnership />} />
        <Route path="/crown-heights-condos-2" element={<CrownHeightsCondos />} />
        <Route path="/crown-heights-sros-3" element={<CrownHeightsSros />} />
        <Route path="/downtown-brooklyn" element={<DowntownBrooklyn />} />
        <Route path="/downtown-brooklyn-condos-2" element={<DowntownBrooklynCondos />} />
        <Route path="/downstone-brooklyn-co-ops" element={<DownstoneBrooklynCoOps />} />
        <Route path="/dumbo" element={<Dumbo />} />
        <Route path="/dumbo-co-ops-2" element={<DumboCoOps />} />
        <Route path="/dumbo-condos" element={<DumboCondos />} />
        <Route path="/harlem" element={<Harlem />} />
        <Route path="/harlem-brownstones" element={<HarlemBrownstones />} />
        <Route path="/harlem-condos" element={<HarlemCondos />} />
        <Route path="/harlem-sros" element={<HarlemSros />} />
        <Route path="/harlem-co-ownership" element={<HarlemCoOwnership />} />
        <Route path="/park-slope" element={<ParkSlope />} />
        <Route path="/park-slope-brownstone-2" element={<ParkSlopeBrownstone />} />
        <Route path="/park-slope-coops" element={<ParkSlopeCoOps />} />
        <Route path="/park-slope-coownership-2" element={<ParkSlopeCoOwnership />} />
        <Route path="/park-slope-condo-2" element={<ParkSlopeCondo />} />
        <Route path="/park-slope-sro-2" element={<ParkSlopeSro />} />
        <Route path="/upper-east-side" element={<UpperEastSide />} />
        <Route path="/upper-east-side-co-ops" element={<UpperEastSideCoOps />} />
        <Route path="/upper-east-side-condos" element={<UpperEastSideCondos />} />
        <Route path="/upper-east-side-townhouses" element={<UpperEastSideTownhouses />} />
        <Route path="/upper-west-side" element={<UpperWestSide />} />
        <Route path="/upper-west-side-co-ops-2" element={<UpperWestSideCoOps />} />
        <Route path="/upper-west-side-condos" element={<UpperWestSideCondos />} />
        <Route path="/upper-west-side-townhouses" element={<UpperWestSideTownhouses />} />
        <Route path="/williamsburg" element={<Williamsburg />} />
        <Route path="/williamsburg-brownstones-2" element={<WilliamsburgBrownstones />} />
        <Route path="/williamsburg-condos" element={<WilliamsburgCondos />} />
        <Route path="/williamsburg-co-ownership" element={<WilliamsburgCoOwnership />} />
        <Route path="/stanley-montfort" element={<StanleyMontfort />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/2-family-house-for-sale-nyc" element={<TwoFamilyHouseForSaleNyc />} />
        <Route path="/buying-a-condo-in-nyc" element={<BuyingACondoInNyc />} />
        <Route path="/buying-a-brownstone-in-nyc" element={<BuyingABrownstoneInNyc />} />
        <Route path="/buying-sro-in-nyc" element={<BuyingSroInNyc />} />
        <Route path="/co-ownership-buying-in-nyc" element={<CoOwnershipBuyingInNyc />} />
        <Route path="/selling-probate-properties-in-nyc" element={<SellingProbatePropertiesInNyc />} />
        <Route path="/selling-sros-in-nyc" element={<SellingSrosInNyc />} />
        <Route path="/selling-co-ops-in-nyc" element={<SellingCoOpsInNyc />} />
        <Route path="/selling-condos-in-nyc" element={<SellingCondosInNyc />} />
        <Route path="/selling-brownstones-in-nyc" element={<SellingBrownstonesInNyc />} />
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
        {Object.entries(BLOG_ARTICLE_REGISTRY).map(([slug, article]) => (
          <Route key={slug} path={`/${slug}`} element={<BlogArticlePage article={article} />} />
        ))}
        <Route path="/neighborhoods" element={<Neighborhoods />} />
        <Route path="/idx-sales" element={<IdxSales />} />
        <Route path="/idx-rentals" element={<IdxRentals />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="*" element={<NotMigrated />} />
      </Routes>
    </BrowserRouter>
  );
}
