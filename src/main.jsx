import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import MyRoutine from './MyRoutine.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AuthProvider from './AuthProvider.jsx';
import SignIn from './SignIn.jsx';
import PrivateRouter from './PrivateRoute.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:'routine',
      element:<PrivateRouter><MyRoutine></MyRoutine></PrivateRouter>
    },{
      path:'login',
      element:<SignIn></SignIn>
    }
    ]
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
<QueryClientProvider client={queryClient}>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
</QueryClientProvider>
   
  </StrictMode>,
)
