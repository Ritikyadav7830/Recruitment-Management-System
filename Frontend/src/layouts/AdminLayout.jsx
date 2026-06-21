import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";

function AdminLayout() {
  return (
    <div className="layout">
      <AdminHeader />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AdminLayout;