import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import CardLojas from './Components/Pages/Lojas/CardLojas';
import Medicamentos from './Components/Pages/Medicamentos/Medicamentos';
import CadastroDeLoja from './Components/Pages/CadastroDeLojas/CadastroLoja';
import CadastroMed from './Components/Pages/CadastroDeMedicamentos/CadastroMedicamentos';
import LoginPage from './Components/Pages/Logim/Logim';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
      { path: '/Sair', element: <LoginPage /> },
    ]
  },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/Lojas', element: <CardLojas/> },
      { path: '/Medicamentos', element: <Medicamentos /> },
      { path: '/Cadastro-de-lojas', element: <CadastroDeLoja/> },
      { path: '/Cadastro-de-medicamentos', element: <CadastroMed/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

      <RouterProvider ariaHideApp={false} router={router} />
  </React.StrictMode>

)
