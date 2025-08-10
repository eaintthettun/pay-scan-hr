import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import StaffPage from "./pages/staff/StaffPage";
import TeachersPage from "./pages/teachers/TeachersPage";
import InboxPage from "./pages/inbox/InboxPage";
import PaymentsPage from "./pages/payments/PaymentsPage";
import LastFiveScansPage from "./pages/scans/LastFiveScansPage";
import ActivityLogPage from "./pages/activities/ActivityLogPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Dashboard pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/lastFiveScans" element={<LastFiveScansPage />} />
          <Route path="/activities" element={<ActivityLogPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Add more dashboard pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
