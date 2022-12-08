import './App.css';
import router from './Routes/routes';
import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeProvider';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div data-theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;