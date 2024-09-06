import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useMobileRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        navigate("/error");
      }
    };

    handleResize(); // Check on component mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);
};

export default useMobileRedirect;
