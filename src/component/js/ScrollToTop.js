// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("ScrollToTop activated, scrolling to top"); // Debug
  }, [pathname]);

  return null;
};

export default ScrollToTop;