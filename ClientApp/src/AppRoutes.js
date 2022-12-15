import { Home } from "./components/Home";
import { OverOns } from "./components/OverOns";
import { VoorstellingPage } from "./components/Voorstelling/VoorstellingPage";

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
  }
];

export default AppRoutes;
