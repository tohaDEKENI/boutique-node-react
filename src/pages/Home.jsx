import Navbar from "../components/Navbar";
import Produicts from "../components/produicts";
import Footer from "../components/footer";
const Home = () => {
    return (
        <div className="bg-slate-100">
            <Navbar />
            <div className="w-full h-40 bg-no-repeat bg-cover bg-center text-white flex items-center justify-center text-2xl font-bold
             bg-[url('C:/Users/deken/Desktop/Boutique/src/assets/wave-haikei.svg')]
            md:hidden ">
                Bienvenue sur BigBang !
            </div>
            <Produicts />
            <Footer />
        </div>
    );
}

export default Home;