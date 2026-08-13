import { Outlet } from "react-router-dom";
import MobileHeader from "../components/MobileHeader";

/** Shared shell for routes. Pages still own their own Seo injection. */
export default function SiteLayout() {
  return (
    <>
      <MobileHeader />
      <Outlet />
    </>
  );
}
