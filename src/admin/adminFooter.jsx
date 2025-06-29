const AdminFooter = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
            <div className="text-sm">
                © {new Date().getFullYear()} MaBoutique Admin Panel — Version 1.0.0
            </div>
        </footer>
    );
}

export default AdminFooter;