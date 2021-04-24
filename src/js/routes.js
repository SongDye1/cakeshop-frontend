import HomePage from "../pages/home.jsx";
import IntroPage from "../pages/intro.jsx";
import NotFoundPage from "../pages/404.jsx";
import LoginPage from "../pages/users/sessions/new.jsx";
import SignUpPage from "../pages/users/registrations/new.jsx";
import WholeCake from "../pages/wholeCake.jsx";
import Macaron from "../pages/macaron.jsx";

const routes = [
  { path: "/", component: HomePage },
  { path: "/users/sign_in", component: LoginPage },
  { path: "/users/sign_up", component: SignUpPage },
  { path: "/wholeCake", component: WholeCake },
  { path: "/macaron", component: Macaron },
  { path: "(.*)", component: NotFoundPage },
];

export default routes;
