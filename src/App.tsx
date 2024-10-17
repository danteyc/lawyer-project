
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes/routes';

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default App
