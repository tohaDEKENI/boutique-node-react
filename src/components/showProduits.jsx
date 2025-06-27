import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const ShowProduit = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState(null); // ✅ initialisé à null

    useEffect(() => {
        fetch(`http://localhost:5000/produits/${id}`, {
            headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
        })
            .then(response => response.json())
            .then(data => {
                console.log("Produit reçu :", data);
                setProduit(data); // ✅ On suppose que l'API retourne { produit: { ... } }
            })
            .catch(err => {
                console.error("Erreur lors de la récupération du produit :", err);
            });
    }, []); // ✅ bonne pratique

    return (
        <div>
            <Navbar />
            <div className="pt-10">
                <div className="container mx-auto max-w-2xl shadow-md p-10">
                    {produit && produit.produit ? (
                        <div>
                            <img src={produit.produit.image_url} alt={produit.produit.name} className="w-full h-auto" />
                            <p className="text-xl font-bold mt-4">{produit.produit.name}</p>
                            <p className="text-gray-600 mt-2">{produit.produit.description}</p>
                            <p className="text-green-700 mt-2">prix: {produit.produit.price} MAD</p>
                            <button className="bg-blue-700 w-full py-2 rounded-md text-white">Acheter</button>
                        </div>
                    ) : (
                        <p>Chargement du produit...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowProduit;
