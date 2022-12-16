import { Home } from "./components/Home";
import { VoorstellingPage } from "./components/Voorstelling/VoorstellingPage";
import { LoginPage } from "./components/Login/LoginPage";
import { CreateAccountPage } from "./components/Login/CreateAccountPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/voorstelling',
    element: <VoorstellingPage />
  },
  {
    path: 'Login',
    element: <LoginPage />
  },
  {
    path: '/CreateAccount',
    element: <CreateAccountPage />
  }
  ];

export default AppRoutes;
