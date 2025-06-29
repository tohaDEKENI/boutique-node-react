import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/admin" className="text-xl font-bold">
          AdminPanel
        </Link>

        {/* Menu bouton mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Liens Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/admin/produits" className="hover:text-gray-300">
            Produits
          </Link>
          <Link to="/admin/commandes" className="hover:text-gray-300">
            Commandes
          </Link>
          <Link to="/admin/utilisateurs" className="hover:text-gray-300">
            Utilisateurs
          </Link>
          <button onClick={handleLogout} className="hover:text-red-400">
            Déconnexion
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-700">
          <Link to="/admin/dashboard" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/admin/produits" className="block hover:text-gray-300">
            Produits
          </Link>
          <Link to="/admin/commandes" className="block hover:text-gray-300">
            Commandes
          </Link>
          <Link to="/admin/utilisateurs" className="block hover:text-gray-300">
            Utilisateurs
          </Link>
          <button onClick={handleLogout} className="block hover:text-red-400">
            Déconnexion
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
