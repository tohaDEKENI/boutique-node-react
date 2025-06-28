import { Menu, Search, ShoppingCart, UserCog } from "lucide-react"
import { useEffect, useState } from "react";
import AdminAuth from "../auth/adminAuth";

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [searchValue, setsearchValue] = useState(" ");
    const [produits, setProduits] = useState([]);

    const HandleSearch = async (e) => {
        const value = e.target.value;
        setsearchValue(value);
        setSearch(value.trim() !== ""); 
    };

    return (
        <div className="shadow-md w-full bg-white">
            <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Logo et menu */}
                <div className="flex items-center justify-between sm:justify-start space-x-4">
                    <button className="sm:hidden">
                        <Menu />
                    </button>
                    <h1 className="text-2xl font-extrabold">BigBang</h1>
                </div>

                {/* Barre de recherche */}
                <form className="flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto gap-2 sm:gap-0">
                    <div className="flex border items-center px-4 rounded w-full sm:w-[400px] relative">
                        <Search />
                        <input
                            type="search"
                            value={searchValue}
                            className="w-full h-full py-2 outline-none"
                            onChange={HandleSearch}
                        />
                        {search && (
                            <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md z-10">
                                {/* Résultats de recherche ici */}
                            </div>
                        )}
                    </div>
                    <button type="submit" className="bg-blue-600 py-2 px-4 sm:px-8 text-white rounded-md">
                        Rechercher
                    </button>
                </form>

                {/* Profil et panier */}
                <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
                    <div className="flex items-center space-x-2">
                        <UserCog className="text-blue-700" />
                        <select name="Profile" className="w-28 border rounded px-2 py-1">
                            <option value="">Profile</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ShoppingCart className="text-blue-600" />
                        <p>Panier</p>
                    </div>
                </div>
            </div>

             {/* ✅ Seul le bouton est protégé */}
            <div className="absolute top-2 right-2">
                <AdminAuth>
                    <button className="bg-gray-100 px-2 py-1 rounded shadow">
                        Admin
                    </button>
                </AdminAuth>
            </div>
        </div>
    );
};

export default Navbar;
