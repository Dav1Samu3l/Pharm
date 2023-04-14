import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import CardLojas from './Components/Pages/Lojas/CardLojas';
import Medicamentos from './Components/Pages/Medicamentos/Medicamentos';
import Sair from './Components/Pages/logout/LogOut';
import CadastroDeLoja from './Components/Pages/CadastroDeLojas/CadastroLoja';
import CadastroMed from './Components/Pages/CadastroDeMedicamentos/CadastroMedicamentos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/Lojas', element: <CardLojas/> },
      { path: '/Medicamentos', element: <Medicamentos /> },
      { path: '/Cadastro-de-lojas', element: < CadastroDeLoja/> },
      { path: '/Cadastro-de-medicamentos', element: < CadastroMed/> },
      { path: '/Sair', element: <Sair /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>

)