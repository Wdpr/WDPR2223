import { Home } from "./Pages/Home";
import { OverOns } from "./Pages/OverOns";
import { VoorstellingPage } from "./Pages/VoorstellingPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { CreateAccountPage } from "./Pages/Login/CreateAccountPage";
import { StoelKiezenPage } from "./Pages/StoelenKiezen/StoelKiezenPage";
import { ReserveringPage } from "./Pages/ReserveringPage";
import {MijnAccountPage  } from "./Pages/MijnAccount/MijnAccountPage";
import {DonateursHome  } from "./Pages/DonatiePage/DonateursHome";
import {DonatiePagina  } from "./Pages/DonatiePage/DonatiePagina";
import { AList } from "./Pages/ArtiestLijst/ArtiestLijst";
import { VoorstellingDetails } from "./components/Voorstelling/VoorstellingDetails";
import { Contact } from "./Pages/Contact";

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
    path: '/Reserveren',
    element: <ReserveringPage />
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
    path : '/Contact',
    element: <Contact />
  }

  ];


export default AppRoutes;
