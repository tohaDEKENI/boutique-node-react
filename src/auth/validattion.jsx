import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Valid = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp && decoded.exp < currentTime) {
        // Token expiré
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setIsValid(true);
      }
    } catch (err) {
      // Token invalide
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, []);

  if (!isValid) return null; 

  return <>{children}</>;
};

export default Valid;
