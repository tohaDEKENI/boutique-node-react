import LandingImage from "C:/Users/deken/Desktop/Boutique/src/assets/LandingImage.svg"
import { Truck, ShieldCheck, Heart } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 text-white">

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center">
                {/* Textual Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Bienvenue chez BigBang<br />Votre boutique tout-en-un
                    </h1>
                    <p className="text-lg mb-8 opacity-90">
                        Découvrez une expérience d'achat inégalée: une sélection soignée de
                        produits, des prix imbattables et un service client exemplaire.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg transition">
                            Se connecter
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                            Inscription
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
                    <img
                        src={LandingImage}
                        alt="Illustration Boutique"
                        className="w-3/4 max-w-md"
                    />
                </div>
                
            </section>

            {/* Features Section */}
            <section className="bg-white bg-opacity-10 py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 backdrop-blur-md rounded-lg">
                        <Truck className="mx-auto mb-4 w-10 h-10 text-white" />
                        <h3 className="text-xl font-semibold mb-2">Livraison rapide</h3>
                        <p className="opacity-90">
                            Recevez vos commandes en un temps record, partout au Maroc.
                        </p>
                    </div>
                    <div className="p-6 backdrop-blur-md rounded-lg">
                        <ShieldCheck className="mx-auto mb-4 w-10 h-10 text-white" />
                        <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
                        <p className="opacity-90">
                            Vos transactions sont protégées par des protocoles de pointe.
                        </p>
                    </div>
                    <div className="p-6 backdrop-blur-md rounded-lg">
                        <Heart className="mx-auto mb-4 w-10 h-10 text-white" />
                        <h3 className="text-xl font-semibold mb-2">Produits vérifiés</h3>
                        <p className="opacity-90">
                            Nous sélectionnons chaque produit pour garantir votre satisfaction.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <footer className="py-12 text-center">
                <p className="mb-6 text-lg">
                    Prêt à découvrir l'inattendu ?
                </p>
                <button className="bg-white text-indigo-600 font-semibold px-10 py-4 rounded-full shadow hover:shadow-lg transition">
                    Commencer maintenant
                </button>
            </footer>
        </div>
    );
}

export default LandingPage