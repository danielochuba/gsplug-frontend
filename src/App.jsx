import Homepage from './components/Homepage';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact';
import SchoolDetails from './components/SchoolDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/school/:id",
    element: <SchoolDetails />,
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
