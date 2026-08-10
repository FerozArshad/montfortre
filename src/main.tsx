import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./responsive.css";
import MobileHeader from "./components/MobileHeader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Harlem from "./pages/Harlem";
import StanleyMontfort from "./pages/StanleyMontfort";
import SuccessStories from "./pages/SuccessStories";
import TwoFamilyHouseForSaleNyc from "./pages/TwoFamilyHouseForSaleNyc";
import BrownstoneBuyingGuide from "./pages/BrownstoneBuyingGuide";
import Neighborhoods from "./pages/Neighborhoods";
import NotMigrated from "./pages/NotMigrated";
import IdxSales from "./pages/IdxSales";
import IdxRentals from "./pages/IdxRentals";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/harlem" element={<Harlem />} />
        <Route path="/stanley-montfort" element={<StanleyMontfort />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/2-family-house-for-sale-nyc" element={<TwoFamilyHouseForSaleNyc />} />
        <Route path="/advice-for-buyers-looking-to-purchase-brownstones" element={<BrownstoneBuyingGuide />} />
        <Route path="/neighborhoods" element={<Neighborhoods />} />
        <Route path="/idx-sales" element={<IdxSales />} />
        <Route path="/idx-rentals" element={<IdxRentals />} />
        <Route path="*" element={<NotMigrated />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
