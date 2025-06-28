const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* À propos */}
        <div>
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

        {/* Contact */}
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
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} BigBang. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
