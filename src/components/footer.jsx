import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* À propos */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">BigBang</h3>
          <p className="text-sm">
            La meilleure boutique en ligne pour trouver vos produits préférés à petits prix.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Liens rapides</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/home" className="hover:underline">Accueil</a></li>
            <li><a href="/produits" className="hover:underline">Produits</a></li>
            <li><a href="/panier" className="hover:underline">Panier</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email : contact@bigbang.com</li>
            <li>Téléphone : +212 6 12 34 56 78</li>
            <li>Adresse : Casablanca, Maroc</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#" className="text-white hover:text-blue-500"><Facebook /></a></li>
            <li><a href="#" className="text-white hover:text-pink-600"><Instagram /></a></li>
            <li><a href="#" className="text-white hover:text-blue-400"><Twitter /></a></li>
          </ul>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Nous écrire</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Votre nom"
              className="p-2 rounded bg-gray-800 text-white text-sm placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="p-2 rounded bg-gray-800 text-white text-sm placeholder-gray-400"
            />
            <textarea
              rows="3"
              placeholder="Votre message"
              className="p-2 rounded bg-gray-800 text-white text-sm placeholder-gray-400 resize-none"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 rounded py-2 text-sm">
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BigBang. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
