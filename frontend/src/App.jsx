import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { AdminLogin } from "./pages/admin-login";
import { AdminLayout } from "./components/layouts/admin-layout";
import { DashboardPage } from "./pages/admin/dashboard-page";
import { MainLayout } from "./components/layouts/main-layout";
import { SignUpPage } from "./pages/sign-up-page";
import { ServiceView } from "./pages/admin/Service-view";
import { ServiceMan } from "./pages/admin/service-man";
import { AddServiceMan } from "./pages/admin/add-service-man";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/" element={<MainLayout />} />

        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="" index element={<DashboardPage />} />
          <Route path="service-view" element={<ServiceView />} />
          <Route path="service-man" element={<ServiceMan />} />
          <Route path="service-man/add" element={<AddServiceMan />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
