import { jwtDecode } from "jwt-decode";

const AdminAuth = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    if (decoded.userRole !== "admin") {
      return null; 
    }
    return children;
  } catch (error) {
    return null; 
  }
};

export default AdminAuth;
