import LandingPage from "./pages/landing";
import DashboardPage from "./pages/dashboard";
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

const routes = [
  {
    exact: true,
    path: "/",
    name: "Landing Page",
    component: LandingPage,
  },
  {
    exact: true,
    protected: true,
    path: "/dashboard",
    name: "Dashboard Page",
    component: DashboardPage,
  },
  {
    exact: true,
    path: "/signin",
    name: "Signin Page",
    component: SignInPage
  },
  {
    exact: true,
    path: "/signup",
    name: "Signup Page",
    component: SignUpPage
  }
];

export default routes;
