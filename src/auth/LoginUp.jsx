import { UserPlus, Mail, Lock } from 'lucide-react';

export default function RegistrationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-extrabold text-indigo-600 text-center mb-6">
                    Création de compte
                </h2>
                <form className="space-y-4">
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <UserPlus className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <Lock className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
