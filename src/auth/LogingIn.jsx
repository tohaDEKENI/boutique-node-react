import { UserPlus, Mail, Lock } from 'lucide-react';

const LogingPage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-400 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
                <h1 className="text-indigo-600 text-center p-6 text-2xl font-extrabold">
                    Se connecter
                </h1>
                <form action="" className='space-y-4'>
                    <div className='flex border-b p-2 items-center border-gray-300'>
                        <Mail className='mr-3 text-gray-400' />
                        <input type="text"
                            className='focus:outline-none w-full'
                            placeholder='Email'
                        />
                    </div>
                    <div className='flex border-b p-2 items-center border-gray-300'>
                        <Lock className='mr-3 text-gray-400' />
                        <input type="password"
                            className='focus:outline-none w-full'
                            placeholder='Mot de passe'
                        />

                    </div>
                    <button type='submit' className='text-center w-full bg-indigo-600 rounded-lg py-2 text-white hover:bg-indigo-700'
                    >
                        Se connecter
                    </button>

                </form>
            </div>
        </div>
    );
}

export default LogingPage;