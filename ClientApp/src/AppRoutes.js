import { Home } from "./components/Home";
import { VoorstellingPage } from "./components/Voorstelling/VoorstellingPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/voorstelling',
    element: <VoorstellingPage />
  }
];

export default AppRoutes;
