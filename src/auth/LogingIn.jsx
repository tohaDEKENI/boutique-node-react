import { Mail, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/loader';
import { useNavigate } from 'react-router-dom';

// Composant de page de connexion
const LogingPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [resultColor, setResultColor] = useState(null);
    const [loader, setLoadder] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoadder(true)
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (!response.ok) {
                if (response.status === 403 && data.message === "Session expirée. Veuillez vous reconnecter.") {
                    localStorage.removeItem("token");
                    setResult(data.message);
                    setResultColor("#e6b9a6");
                    navigate("/login");
                    return;
                }
                setResult(data.message)
                setResultColor("#e6b9a6 ")
                return;
            }

            setResult(data.message)
            localStorage.setItem("token", data.token)
            setTimeout(()=>{
                navigate("/home")
            },1000)
            setResultColor("#aaf775")
        }
        catch (err) {
            console.log(err)
        } finally {
            setLoadder(false)
        }
    }
    return (

        // Conteneur principal centré verticalement et horizontalement avec un dégradé
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
                <h1 className="text-indigo-600 text-center p-6 text-2xl font-extrabold">
                    Se connecter
                </h1>
                <p className='text-center mb-4 rounded-lg py-2 text-white border-red-400' style={{ backgroundColor: resultColor }}>{result}</p>
                <form action="" className='space-y-4' onSubmit={handleLogin}>
                    <div className='flex border-b p-2 items-center border-gray-300'>
                        <Mail className='mr-3 text-gray-400' />
                        <input type="email"
                            className='focus:outline-none w-full'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex border-b p-2 items-center border-gray-300'>
                        <Lock className='mr-3 text-gray-400' />
                        <input type="password"
                            className='focus:outline-none w-full'
                            placeholder='Mot de passe'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <button type='submit' className='text-center w-full bg-indigo-600 rounded-lg py-2 text-white hover:bg-indigo-700'
                    >
                        {loader ? <Loader /> : "Se connecter"}
                    </button>
                    <p className='text-center text-blue-400 hover:to-blue-400'><Link to="/register"><span className='hover:text-blue-600 transition hover:underline'
                    >
                        S'inscrire
                    </span></Link></p>
                </form>
            </div>
        </div>
    );
}

export default LogingPage;