import Produits from "../admin/produits";
import AdminNavbar from "../admin/adminnav";
import AdminFooter from "../admin/adminFooter";

const Admin = () => {
    return (
        <div>
            <AdminNavbar />
            <Produits />
            <AdminFooter/>
        </div>
    );
}

export default Admin;