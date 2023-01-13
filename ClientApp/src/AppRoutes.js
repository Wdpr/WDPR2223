import { Home } from "./Pages/Home";
import { OverOns } from "./Pages/OverOns";
import { VoorstellingPage } from "./Pages/VoorstellingPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { CreateAccountPage } from "./Pages/Login/CreateAccountPage";
import { VoorstellingAdding } from "./Pages/VoegToe/VoegVoorstellingToePage";
import {VoegArtiestToeAanLijst  } from "./Pages/VoegToe/VoegArtiestToePage";
import { AList } from "./Pages/ArtiestLijst/ArtiestLijst";

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
    path: '/AddVoorstelling',
    element: <VoorstellingAdding />
  }, 
  {
    path: '/AddArtiest',
    element: <VoegArtiestToeAanLijst />
  },
  {
    path: '/ArtiestList',
    element: <AList />
  },
  ];

export default AppRoutes;
