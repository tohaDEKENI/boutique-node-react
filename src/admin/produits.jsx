import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Produits = () => {
    const [produicts, setProduits] = useState([]);
    const [produitASupprimer, setProduitASupprimer] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/produits", {
            headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
        })
            .then(response => response.json())
            .then(data => {
                setProduits(data);
            });
    }, []);

    const supprimerProduit = async (id) => {
        try {
            await fetch(`http://localhost:5000/produits/${id}`, {
                method: "DELETE",
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            });
            setProduits(produicts.filter(p => p.id !== id));
            setProduitASupprimer(null);
        } catch (err) {
            console.error("Erreur de suppression :", err);
        }
    };

    return (

        <div className="pt-10 relative">
            <h1 className="text-center pb-10 text-4xl">Produit</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
                {Array.isArray(produicts) && produicts.map((produict) => (
                    <div key={produict.id} className="hover:shadow-md border p-4 space-y-4 rounded-md bg-white">
                        <img src={produict.image_url} alt={produict.name} className="w-full h-auto object-cover rounded" />
                        <p className="text-lg font-semibold">{produict.name}</p>
                        <p className="text-gray-700">Prix : {produict.price} MAD</p>
                        <button className="bg-blue-600 w-full py-2 rounded text-white hover:bg-blue-700 transition duration-200">
                            Modifier
                        </button>
                        <button
                            onClick={() => setProduitASupprimer(produict)}
                            className="bg-orange-400 w-full py-2 rounded text-white hover:bg-orange-500 transition duration-200"
                        >
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>

            {produitASupprimer && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-md text-center space-y-4">
                        <p className="text-lg font-semibold">
                            Voulez-vous vraiment supprimer <br />
                            <span className="text-red-600">{produitASupprimer.name}</span> ?
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => supprimerProduit(produitASupprimer.id)}
                                className="bg-red-600 px-4 py-2 text-white rounded hover:bg-red-700"
                            >
                                Oui, supprimer
                            </button>
                            <button
                                onClick={() => setProduitASupprimer(null)}
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Non, annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Produits;
