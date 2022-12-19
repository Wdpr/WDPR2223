import { Home } from "./components/Home";
import { OverOns } from "./components/OverOns";
import { VoorstellingPage } from "./components/Voorstelling/VoorstellingPage";
import { LoginPage } from "./components/Login/LoginPage";
import { CreateAccountPage } from "./components/Login/CreateAccountPage";
// import {VoorstellingAdding} from './components/Retry/DaPage';
import {AddRemoveMultipleInputFields} from './components/Retry/ActorListingAdd';

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
    path: '/VoorstellingAdd',
    element: < AddRemoveMultipleInputFields />
  }
  ];

export default AppRoutes;
