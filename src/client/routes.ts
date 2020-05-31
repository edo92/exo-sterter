import LandingPage from "./pages/landing";
import DetalesPage from "./pages/details";
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
    path: "/details",
    name: "Detales Page",
    component: DetalesPage,
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
