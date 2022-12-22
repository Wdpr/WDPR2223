import { Home } from "./Pages/Home";
import { OverOns } from "./Pages/OverOns";
import { VoorstellingPage } from "./Pages/VoorstellingPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { CreateAccountPage } from "./Pages/Login/CreateAccountPage";
import { VoorstellingInfoPage } from "./Pages/VoorstellingInfoPage";

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
  {
    path: 'Login',
    element: <LoginPage />
  },
  {
    path: '/CreateAccount',
    element: <CreateAccountPage />
  },
  {
    path: '/voorstellingInfo',
    element: <VoorstellingInfoPage />
  },
  ];

export default AppRoutes;
