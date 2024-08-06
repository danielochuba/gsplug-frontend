import Homepage from './components/Homepage';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
