// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Pathname changed:", pathname); // Debugging line
    window.scrollTo(0, 0);
  }, [pathname]);
  

  return null;
};

export default ScrollToTop;
