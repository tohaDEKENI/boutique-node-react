import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Produicts = () => {
    const [produicts, setProduits] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/produits", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
        })
            .then(response => response.json())
            .then(data => {
                setProduits(data);
            });
    }, []);

    return (
        <div className="pt-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
                {Array.isArray(produicts) && produicts.map((produict) => (
                    <div key={produict.id} className="hover:shadow-md border p-4 space-y-4 rounded-md bg-white">
                
                        <Link to={`/produits/${produict.id}`} className="block space-y-2">
                            <img src={produict.image_url} alt={produict.name} className="w-full h-auto object-cover rounded" />
                            <p className="text-lg font-semibold">{produict.name}</p>
                            <p className="text-gray-700">Prix : {produict.price} MAD</p>
                        </Link>
                    
                        <button className="bg-blue-600 w-full py-2 rounded text-white hover:bg-blue-700 transition duration-200">
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produicts;
