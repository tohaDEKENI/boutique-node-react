import { Menu, Search, ShoppingCart, UserCog } from "lucide-react"
import { useEffect, useState } from "react";
const Navbar = () => {


    const [search, setSearch] = useState(false)
    const [searchValue, setsearchValue] = useState(" ")
    const [produits, setProduits] = useState([])
    
    const HandleSearch = async (e) => {
        const value = e.target.value;
        setsearchValue(value);
        setSearch(value.trim() !== ""); 

    };
    

    return (
        <div className="shadow-md max-w-full">
            <div className="container mx-auto max-w-5xl flex justify-between py-4  bg-white">
                <div className="flex items-center space-x-4">
                    <button><Menu /></button>
                    <h1 className="text-2xl font-extrabold">BigBang</h1>
                </div>
                <form action="" className="flex space-x-2 ">
                    <div className="flex border items-center w-[400px]  px-4 rounded">
                        <Search />
                        <input type="search" value={searchValue} className="w-full h-full py-2 outline-none" onChange={HandleSearch} />
                        {search && (
                            <div className="absolute top-16 w-96 bg-white shadow-lg rounded-md z-10">
                               
                            </div>
                        )}

                    </div>
                    <button type="submit" className="bg-blue-600 py-2 px-8 text-white rounded-md">Rechercher</button>
                </form>
                <div className="flex items-center space-x-4">
                    <UserCog className="text-blue-700" />
                    <select name="Profile" id="" value="Profile" className="w-28">
                        <option value="">profile</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className="flex items-center">
                    <ShoppingCart className="text-blue-600" />
                    <p>Panier</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;