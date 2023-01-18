import { Home } from "./Pages/Home";
import { OverOns } from "./Pages/OverOns";
import { VoorstellingPage } from "./Pages/VoorstellingPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { CreateAccountPage } from "./Pages/Login/CreateAccountPage";
import { StoelKiezenPage } from "./Pages/StoelenKiezen/StoelKiezenPage";
import { VoorstellingAdding } from "./Pages/VoegToe/VoegVoorstellingToePage";
import {VoegArtiestToeAanLijst  } from "./Pages/VoegToe/VoegArtiestToePage";
import { ReserveringPage } from "./Pages/ReserveringPage";
import {MijnAccountPage  } from "./Pages/MijnAccount/MijnAccountPage";
import {DonateursHome  } from "./Pages/DonatiePage/DonateursHome";
import {DonatiePagina  } from "./Pages/DonatiePage/DonatiePagina";
import { AList } from "./Pages/ArtiestLijst/ArtiestLijst";
import { VoegZaalToe } from "./Pages/ZalenToevoegen/ZaalAdd"; 
import { VoorstellingDetails } from "./components/Voorstelling/VoorstellingDetails";
import { Betaling } from "./components/Betaling";

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
    path: '/voorstelling/:id',
    element: <VoorstellingDetails />
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
    path: '/StoelKiezen',
    element: <StoelKiezenPage />
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
    path: '/Reserveren',
    element: <ReserveringPage />
  },
  {
    path: '/Betaling',
    element: <Betaling />
  },
  {
    path: '/Profiel',
    element: <MijnAccountPage />
  },
  {
    path: '/DonateursHome',
    element: <DonateursHome />
  },
  {
    path: '/Doneren',
    element: <DonatiePagina />
  },
{
    path: '/ArtiestList',
    element: <AList />
  },
  {
    path: '/AddZalen',
    element: <VoegZaalToe />
  },
  ];


export default AppRoutes;
