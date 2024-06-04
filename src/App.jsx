import './App.css'
import {
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './context/AuthContext';
import browserRouter from './routes/router';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  console.log("App Rerendered !")

  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  )
}

export default App
