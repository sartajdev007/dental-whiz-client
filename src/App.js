import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import 'react-photo-view/dist/react-photo-view.css'

function App() {
  return (
    <div className="App bg-yellow-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
