import { UserPlus, Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/loader';

export default function RegistrationPage() {
    const [name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState(null);
    const [loader ,setLoadder] = useState(false); 
    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault()
        setLoadder(true)
        try {
            //await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            })
            
            const data = await response.json()

            if (!response.ok) {
                console.log(data.message || "Erreur lors de l’inscription.");
                setResult(data.message)
                setResultColor("#e6b9a6 ")
                return;
            }
            
            setResult(data.message)
            setResultColor("#aaf775")

            setTimeout(()=>{
                navigate("/login")
            },1000)
            
        }
        catch (err) {
            console.log("erreur cote serveru");
        }finally{
            setLoadder(false)
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-extrabold text-indigo-600 text-center mb-6">
                    Création de compte
                </h2>
                <p className='text-center mb-4 rounded-lg py-2 text-white border-red-400' style={{ backgroundColor: resultColor }}>{result}</p>
                <form className="space-y-4" onSubmit={HandleSubmit}>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <UserPlus className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            className="w-full focus:outline-none"
                            value={name}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <Lock className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"

                    >
                       {loader ?  <Loader/>: "S'inscrire "}
                    </button>
                    <p className='text-center text-blue-400 hover:to-blue-400'><Link to="/login"><span className='hover:text-blue-600 transition hover:underline'
                    >
                        Se connecter
                    </span></Link></p>
                </form>
            </div>
        </div>
    );
}
