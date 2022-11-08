import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
// fonts
import './fonts/Roboto-Medium.ttf'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
