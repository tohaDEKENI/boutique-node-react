import { useEffect, useState } from "react";
import AdminNavbar from "./adminnav";

const Utilisateurs = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        fetch("http://localhost:5000/users", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur :", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const supprimerUtilisateur = async (id) => {
        const confirmer = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
        if (!confirmer) return;

        try {
            const res = await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });

            if (res.ok) {
                setUsers(users.filter((u) => u.id !== id));
            } else {
                console.error("Échec de la suppression");
            }
        } catch (err) {
            console.error("Erreur lors de la suppression :", err);
        }
    };

    return (
        <div>
            <AdminNavbar />
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Liste des utilisateurs</h1>

                {loading ? (
                    <p className="text-gray-600">Chargement...</p>
                ) : users.length === 0 ? (
                    <p className="text-gray-600">Aucun utilisateur trouvé.</p>
                ) : (
                    <table className="w-full bg-white shadow rounded overflow-hidden">
                        <thead className="bg-gray-200 text-left">
                            <tr>
                                <th className="px-4 py-2">#ID</th>
                                <th className="px-4 py-2">Nom</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Rôle</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">{u.id}</td>
                                    <td className="px-4 py-2">{u.name}</td>
                                    <td className="px-4 py-2">{u.email}</td>
                                    <td className="px-4 py-2 capitalize">{u.role}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => supprimerUtilisateur(u.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Utilisateurs;
