import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import App from "./App";
import Login from "./pages/login";
import Users from "./pages/users";
import Department from "./pages/department";
import Dashboard from "./pages/dashboard";
import OtpPolicy from "./pages/policies/otpPolicy";
import CookiePolicy from "./pages/policies/cookiePolicy";
import DataPolicy from "./pages/policies/dataPolicy";
import PrivacyPolicy from "./pages/policies/privacyPolicy";
import ProtectedRoute from "./components/auth/protectedRoute";
import FirstPage from "./pages/employees/firstPage";
import Third from "./pages/employees/third";
import AdminHealthCheck from "./pages/admin/adminHealthCheckApproval";
import CheckAccountType from "./components/auth/checkAccountType";
import Loading from "./components/common/loading";
import HealthCheckList from "./pages/employees/healthCheckList";
import TasksManagement from "./pages/tasks";
import CustomerManagement from "./pages/customers";
import Test from "./components/test";
// import EmployeTasks from "./pages/employees/employeTasks";
import EmployeeLayout from "./components/employees/layout";
import ApprovedHealthCheckOnly from "./components/employees/approvedHealthCheckOnly";
import VehicleManagement from "./pages/admin/vehicle_mgt";
import ProjectManagement from "./pages/admin/projects/projectMgt";
import VTransfer from "./pages/admin/vehicle/vTransfer";
import VMaintenance from "./pages/admin/vehicle/vMaintenance";
import VInspection from "./pages/admin/vehicle/vInspection";
import PageNotFound from "./pages/pageNotFound";
import Logout from "./pages/logout";
import PackageSubscription from "./pages/admin/projects/subscriptions";
import DailyAssessment from "./pages/admin/assessments/dailyAssessment";
import VehicleInspectionCheck from "./pages/employees/vehicleInspectionCheck";
import EmployLayout from "./pages/employees/employeLayout";

import ChartPage from "./components/chart/chartPage";
import GroupChart from "./components/chart/groupChart";
import BroadCastPage from "./components/chart/broadCastPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/test" element={<Test />} />
      <Route path="/otp-policy" element={<OtpPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/data-policy" element={<DataPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route
        path="/employee"
        element={
          <ProtectedRoute>
            <ApprovedHealthCheckOnly>
              <EmployeeLayout />
            </ApprovedHealthCheckOnly>
          </ProtectedRoute>
        }
      >
        <Route index element={<EmployLayout />} />
        <Route path="user" element={<Users />} />
        <Route path="departments" element={<Department />} />
        <Route path="customer" element={<CustomerManagement />} />
        <Route path="project" element={<ProjectManagement />} />
        <Route path="subscription" element={<PackageSubscription />} />
        <Route path="approval_healthchecks" element={<DailyAssessment />} />

        <Route path="broadcast" element={<BroadCastPage />} />
        <Route path="groupchart" element={<GroupChart />} />
        <Route path="chartpage" element={<ChartPage />} />
      </Route>

      <Route
        path="/first"
        element={
          <ProtectedRoute>
            <FirstPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/second"
        element={
          <ProtectedRoute>
            <HealthCheckList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vehicle_inspection_check"
        element={
          <ProtectedRoute>
            <VehicleInspectionCheck />
          </ProtectedRoute>
        }
      />
      <Route
        path="/third"
        element={
          <ProtectedRoute>
            <Third />
          </ProtectedRoute>
        }
      />
      <Route path="/healthcheck" element={<AdminHealthCheck />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <CheckAccountType>
              <Suspense fallback={<Loading />}>
                <App />
              </Suspense>
            </CheckAccountType>
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="department" element={<Department />} />
        <Route path="projects" element={<ProjectManagement />} />
        <Route path="vehicle" element={<VehicleManagement />} />
        <Route path="vehicle/assign" element={<div />} />
        <Route
          path="vehicle/inspection"
          element={<VInspection showPendingInspectionSelector={false} />}
        />
        <Route path="vehicle/transfer" element={<VTransfer />} />
        <Route path="vehicle/maintenance" element={<VMaintenance />} />
        <Route path="tasks" element={<TasksManagement />} />
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="subscriptions" element={<PackageSubscription />} />
        <Route path="approval_healthcheck" element={<DailyAssessment />} />

        <Route path="broadcast" element={<BroadCastPage />} />
        <Route path="groupchart" element={<GroupChart />} />
        <Route path="chartpage" element={<ChartPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Root;
