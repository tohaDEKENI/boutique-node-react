import { useEffect ,useState} from "react";

const Produicts = () => {
    const [produicts ,setProduits] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/produits",{
            headers:{"Authorization":"Bearer " + localStorage.getItem("token")}
        })
        .then(response => response.json())
        .then(data => {
            setProduits(data)
        })
    },[])
    return ( 
        <div className="pt-10 ">
            <div className="container mx-auto grid grid-cols-4 max-w-5xl shadow-md p-10 gap-10">
                {
                    Array.isArray(produicts) && produicts.map((produict,i)=>(
                        <div key={produict.id} className="hover:shadow-md cursor-pointer border p-4 space-y-4 w-60">
                            <img src={produict.image_url} alt="" className="w-60" />
                            <p>{produict.name}</p>
                            <p>prix: {produict.price} MAD</p>
                            <button className="bg-blue-600 w-full py-2 rounded">Ajouter au panier</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Produicts;