import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import MetaPixelTracker from "./components/MetaPixelTracker";
import OlrPrefetch from "./components/OlrPrefetch";
import { BLOG_ARTICLE_SLUGS } from "./blog/slugs";
import { LISTING_SLUGS } from "./data/listings/slugs";

/** Eager: home is the most common entry. Everything else code-splits. */
import Home from "./pages/Home";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const BedfordStuyvesant = lazy(() => import("./pages/BedfordStuyvesant"));
const BedfordStuyvesantBrownstones = lazy(() => import("./pages/BedfordStuyvesantBrownstones"));
const BedfordStuyvesantCoOps = lazy(() => import("./pages/BedfordStuyvesantCoOps"));
const BedfordStuyvesantCoOwnership = lazy(() => import("./pages/BedfordStuyvesantCoOwnership"));
const BedfordStuyvesantCondos = lazy(() => import("./pages/BedfordStuyvesantCondos"));
const BedfordStuyvesantSros = lazy(() => import("./pages/BedfordStuyvesantSros"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const BrooklynHeights = lazy(() => import("./pages/BrooklynHeights"));
const BrooklynHeightsCoOps = lazy(() => import("./pages/BrooklynHeightsCoOps"));
const BrooklynHeightsCondos = lazy(() => import("./pages/BrooklynHeightsCondos"));
const BrooklynHeightsTownhouses = lazy(() => import("./pages/BrooklynHeightsTownhouses"));
const BrownstoneBuyingGuide = lazy(() => import("./pages/BrownstoneBuyingGuide"));
const BuyingABrownstoneInNyc = lazy(() => import("./pages/BuyingABrownstoneInNyc"));
const BuyingACondoInNyc = lazy(() => import("./pages/BuyingACondoInNyc"));
const BuyingSroInNyc = lazy(() => import("./pages/BuyingSroInNyc"));
const CoOwnershipBuyingInNyc = lazy(() => import("./pages/CoOwnershipBuyingInNyc"));
const SellingBrownstonesInNyc = lazy(() => import("./pages/SellingBrownstonesInNyc"));
const SellingCondosInNyc = lazy(() => import("./pages/SellingCondosInNyc"));
const SellingCoOpsInNyc = lazy(() => import("./pages/SellingCoOpsInNyc"));
const SellingProbatePropertiesInNyc = lazy(() => import("./pages/SellingProbatePropertiesInNyc"));
const SellingSrosInNyc = lazy(() => import("./pages/SellingSrosInNyc"));
const Chelsea = lazy(() => import("./pages/Chelsea"));
const ChelseaCoOps = lazy(() => import("./pages/ChelseaCoOps"));
const ChelseaCondos = lazy(() => import("./pages/ChelseaCondos"));
const ChelseaTownhouses = lazy(() => import("./pages/ChelseaTownhouses"));
const CrownHeights = lazy(() => import("./pages/CrownHeights"));
const CrownHeightsBrownstones = lazy(() => import("./pages/CrownHeightsBrownstones"));
const CrownHeightsCoOps = lazy(() => import("./pages/CrownHeightsCoOps"));
const CrownHeightsCoOwnership = lazy(() => import("./pages/CrownHeightsCoOwnership"));
const CrownHeightsCondos = lazy(() => import("./pages/CrownHeightsCondos"));
const CrownHeightsSros = lazy(() => import("./pages/CrownHeightsSros"));
const DowntownBrooklyn = lazy(() => import("./pages/DowntownBrooklyn"));
const DowntownBrooklynCondos = lazy(() => import("./pages/DowntownBrooklynCondos"));
const DownstoneBrooklynCoOps = lazy(() => import("./pages/DownstoneBrooklynCoOps"));
const Dumbo = lazy(() => import("./pages/Dumbo"));
const DumboCoOps = lazy(() => import("./pages/DumboCoOps"));
const DumboCondos = lazy(() => import("./pages/DumboCondos"));
const Harlem = lazy(() => import("./pages/Harlem"));
const HarlemBrownstones = lazy(() => import("./pages/HarlemBrownstones"));
const HarlemBrownstonesForSale = lazy(() => import("./pages/HarlemBrownstonesForSale"));
const HarlemCondos = lazy(() => import("./pages/HarlemCondos"));
const HarlemCoOps = lazy(() => import("./pages/HarlemCoOps"));
const HarlemSros = lazy(() => import("./pages/HarlemSros"));
const HarlemCoOwnership = lazy(() => import("./pages/HarlemCoOwnership"));
const HomeValuation = lazy(() => import("./pages/HomeValuation"));
const MortgageCalculator = lazy(() => import("./pages/MortgageCalculator"));
const NycBrownstoneBuyerClosingCostCalculator = lazy(() => import("./pages/NycBrownstoneBuyerClosingCostCalculator"));
const NycBrownstoneSellerClosingCostCalculator = lazy(() => import("./pages/NycBrownstoneSellerClosingCostCalculator"));
const NycRentVsBuyBrownstoneCalculator = lazy(() => import("./pages/NycRentVsBuyBrownstoneCalculator"));
const NycCondoVsBrownstoneCalculator = lazy(() => import("./pages/NycCondoVsBrownstoneCalculator"));
const IdxRentals = lazy(() => import("./pages/IdxRentals"));
const IdxSales = lazy(() => import("./pages/IdxSales"));
const CurrentListings = lazy(() => import("./pages/CurrentListings"));
const ListingDetailPage = lazy(() => import("./pages/ListingDetailPage"));
const Neighborhoods = lazy(() => import("./pages/Neighborhoods"));
const NotMigrated = lazy(() => import("./pages/NotMigrated"));
const NycBuyersAgentService = lazy(() => import("./pages/NycBuyersAgentService"));
const NycBrownstoneBuyerAccess = lazy(() => import("./pages/NycBrownstoneBuyerAccess"));
const BrownstoneViolationAssessment = lazy(() => import("./pages/BrownstoneViolationAssessment"));
const NycListingAgentService = lazy(() => import("./pages/NycListingAgentService"));
const NycMultifamilyRealEstateAgentService = lazy(() => import("./pages/NycMultifamilyRealEstateAgentService"));
const ParkSlope = lazy(() => import("./pages/ParkSlope"));
const ParkSlopeBrownstone = lazy(() => import("./pages/ParkSlopeBrownstone"));
const ParkSlopeCoOps = lazy(() => import("./pages/ParkSlopeCoOps"));
const ParkSlopeCoOwnership = lazy(() => import("./pages/ParkSlopeCoOwnership"));
const ParkSlopeCondo = lazy(() => import("./pages/ParkSlopeCondo"));
const ParkSlopeSro = lazy(() => import("./pages/ParkSlopeSro"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Services = lazy(() => import("./pages/Services"));
const SiteMap = lazy(() => import("./pages/SiteMap"));
const StanleyMontfort = lazy(() => import("./pages/StanleyMontfort"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const TwoFamilyHouseForSaleNyc = lazy(() => import("./pages/TwoFamilyHouseForSaleNyc"));
const ThreeFamilyHouseForSaleNyc = lazy(() => import("./pages/ThreeFamilyHouseForSaleNyc"));
const FourFamilyHouseForSaleNyc = lazy(() => import("./pages/FourFamilyHouseForSaleNyc"));
const NycBrownstoneFreeHomeValuation = lazy(() => import("./pages/NycBrownstoneFreeHomeValuation"));
const NycSroFreeHomeValuation = lazy(() => import("./pages/NycSroFreeHomeValuation"));
const NycCoOpFreeHomeValuation = lazy(() => import("./pages/NycCoOpFreeHomeValuation"));
const NycCondoFreeHomeValuation = lazy(() => import("./pages/NycCondoFreeHomeValuation"));
const NycFirstTimeHomeBuyerMortages = lazy(() => import("./pages/NycFirstTimeHomeBuyerMortages"));
const NycBrownstoneMortgages = lazy(() => import("./pages/NycBrownstoneMortgages"));
const NycSroMortgages = lazy(() => import("./pages/NycSroMortgages"));
const UpperEastSide = lazy(() => import("./pages/UpperEastSide"));
const UpperEastSideCoOps = lazy(() => import("./pages/UpperEastSideCoOps"));
const UpperEastSideCondos = lazy(() => import("./pages/UpperEastSideCondos"));
const UpperEastSideTownhouses = lazy(() => import("./pages/UpperEastSideTownhouses"));
const UpperWestSide = lazy(() => import("./pages/UpperWestSide"));
const UpperWestSideCoOps = lazy(() => import("./pages/UpperWestSideCoOps"));
const UpperWestSideCondos = lazy(() => import("./pages/UpperWestSideCondos"));
const UpperWestSideTownhouses = lazy(() => import("./pages/UpperWestSideTownhouses"));
const Williamsburg = lazy(() => import("./pages/Williamsburg"));
const WilliamsburgBrownstones = lazy(() => import("./pages/WilliamsburgBrownstones"));
const WilliamsburgCondos = lazy(() => import("./pages/WilliamsburgCondos"));
const WilliamsburgCoOps = lazy(() => import("./pages/WilliamsburgCoOps"));
const WilliamsburgCoOwnership = lazy(() => import("./pages/WilliamsburgCoOwnership"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminDashboardPage = lazy(() => import("./pages/admin/AdminDashboardPage"));
const AdminListingsPage = lazy(() => import("./pages/admin/AdminListingsPage"));
const AdminListingEditPage = lazy(() => import("./pages/admin/AdminListingEditPage"));
const AdminListingsSettingsPage = lazy(() => import("./pages/admin/AdminListingsSettingsPage"));
const AdminBlogPage = lazy(() => import("./pages/admin/AdminBlogPage"));
const AdminBlogSettingsPage = lazy(() => import("./pages/admin/AdminBlogSettingsPage"));
const AdminBlogEditPage = lazy(() => import("./pages/admin/AdminBlogEditPage"));
const AdminPagesPage = lazy(() => import("./pages/admin/AdminPagesPage"));
const AdminPageEditPage = lazy(() => import("./pages/admin/AdminPageEditPage"));
const AdminSettingsPage = lazy(() => import("./pages/admin/AdminSettingsPage"));
const AdminLeadsPage = lazy(() => import("./pages/admin/AdminLeadsPage"));
const AdminMediaPage = lazy(() => import("./pages/admin/AdminMediaPage"));
const AdminReviewsPage = lazy(() => import("./pages/admin/AdminReviewsPage"));
const AdminNotificationsPage = lazy(() => import("./pages/admin/AdminNotificationsPage"));
const AdminIntegrationsPage = lazy(() => import("./pages/admin/AdminIntegrationsPage"));
const AdminTrackingPage = lazy(() => import("./pages/admin/AdminTrackingPage"));
const GoogleOAuthCallback = lazy(() => import("./pages/GoogleOAuthCallback"));
const CmsSlugPage = lazy(() => import("./pages/CmsSlugPage"));

function PublicMobileHeader() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin") || pathname.startsWith("/auth/")) return null;
  return <MobileHeader />;
}

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MetaPixelTracker />
      <OlrPrefetch />
      <PublicMobileHeader />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/listings" element={<AdminListingsPage />} />
          <Route path="/admin/listings/settings" element={<AdminListingsSettingsPage />} />
          <Route path="/admin/listings/:id" element={<AdminListingEditPage />} />
          <Route path="/admin/blog" element={<AdminBlogPage />} />
          <Route path="/admin/blog/settings" element={<AdminBlogSettingsPage />} />
          <Route path="/admin/blog/:id" element={<AdminBlogEditPage />} />
          <Route path="/admin/pages" element={<AdminPagesPage />} />
          <Route path="/admin/pages/cms/:id" element={<AdminPageEditPage />} />
          <Route path="/admin/pages/seo/:slug" element={<AdminPageEditPage />} />
          <Route path="/admin/pages/:id" element={<AdminPageEditPage />} />
          <Route path="/admin/leads" element={<AdminLeadsPage />} />
          <Route path="/admin/media" element={<AdminMediaPage />} />
          <Route path="/admin/reviews" element={<AdminReviewsPage />} />
          <Route path="/admin/notifications" element={<AdminNotificationsPage />} />
          <Route path="/admin/integrations" element={<AdminIntegrationsPage />} />
          <Route path="/admin/tracking" element={<AdminTrackingPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          <Route path="/auth/google" element={<GoogleOAuthCallback />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bedford-stuyvesant" element={<BedfordStuyvesant />} />
          <Route path="/bedford-stuyvesant-brownstones" element={<BedfordStuyvesantBrownstones />} />
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
          <Route path="/chelsea-condos" element={<ChelseaCondos />} />
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
          <Route path="/harlem-brownstones-for-sale" element={<HarlemBrownstonesForSale />} />
          <Route path="/harlem-condos" element={<HarlemCondos />} />
          <Route path="/harlem-co-ops" element={<HarlemCoOps />} />
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
          <Route path="/williamsburg-co-ops" element={<WilliamsburgCoOps />} />
          <Route path="/williamsburg-co-ownership" element={<WilliamsburgCoOwnership />} />
          <Route path="/stanley-montfort" element={<StanleyMontfort />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/2-family-house-for-sale-nyc" element={<TwoFamilyHouseForSaleNyc />} />
          <Route path="/3-family-house-for-sale-nyc" element={<ThreeFamilyHouseForSaleNyc />} />
          <Route path="/4-family-house-for-sale-nyc" element={<FourFamilyHouseForSaleNyc />} />
          <Route path="/nyc-brownstone-free-home-valuation" element={<NycBrownstoneFreeHomeValuation />} />
          <Route path="/nyc-sro-free-home-valuation" element={<NycSroFreeHomeValuation />} />
          <Route path="/nyc-co-op-free-home-valuation" element={<NycCoOpFreeHomeValuation />} />
          <Route path="/nyc-condo-free-home-valuation" element={<NycCondoFreeHomeValuation />} />
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
          <Route path="/nyc-brownstone-buyer-access" element={<NycBrownstoneBuyerAccess />} />
          <Route path="/brownstone-violation-assessment" element={<BrownstoneViolationAssessment />} />
          <Route path="/nyc-listing-agent-service" element={<NycListingAgentService />} />
          <Route
            path="/nyc-multifamily-real-estate-agent-service"
            element={<NycMultifamilyRealEstateAgentService />}
          />
          <Route path="/home-valuation" element={<HomeValuation />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route
            path="/nyc-brownstone-buyer-closing-cost-calculator"
            element={<NycBrownstoneBuyerClosingCostCalculator />}
          />
          <Route
            path="/nyc-brownstone-seller-closing-cost-calculator"
            element={<NycBrownstoneSellerClosingCostCalculator />}
          />
          <Route path="/nyc-rent-vs-buy-brownstone-calculator" element={<NycRentVsBuyBrownstoneCalculator />} />
          <Route path="/nyc-condo-vs-brownstone-calculator" element={<NycCondoVsBrownstoneCalculator />} />
          <Route path="/nyc-first-time-home-buyer-mortages" element={<NycFirstTimeHomeBuyerMortages />} />
          <Route path="/nyc-brownstone-mortgages" element={<NycBrownstoneMortgages />} />
          <Route path="/nyc-sro-mortgages" element={<NycSroMortgages />} />
          <Route
            path="/advice-for-buyers-looking-to-purchase-brownstones"
            element={<BrownstoneBuyingGuide />}
          />
          {BLOG_ARTICLE_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<BlogArticlePage slug={slug} />} />
          ))}
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/current-listings" element={<CurrentListings />} />
          <Route path="/idx-sales" element={<IdxSales />} />
          <Route path="/idx-rentals" element={<IdxRentals />} />
          {LISTING_SLUGS.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<ListingDetailPage />} />
          ))}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/:slug" element={<CmsSlugPage />} />
          <Route path="*" element={<NotMigrated />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
