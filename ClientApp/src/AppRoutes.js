import { Home } from "./components/Home";
import { OverOns } from "./components/OverOns";
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
    path: '/overons',
    element: <OverOns />
  },
    path: 'Login',
    element: <LoginPage />
  },
  {
    path: '/CreateAccount',
    element: <CreateAccountPage />
  },
  ];

export default AppRoutes;
