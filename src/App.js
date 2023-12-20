import logo from './logo.svg';
import './App.css';
import store from './Store/store';
import { Provider } from 'react-redux';
import AppLayout from './AppLayout/AppLayout';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Login from './AppLayout/Login';
import FrontPage from './AppLayout/FrontPage';
import { MainContainer } from './AppLayout/MainContainer';
function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout/>,
      children:[
        {
          path : "/",
          element : <MainContainer/>
        },
        // {
        //   path : "/login",
        //   element : <Login/>
        // }
      ]
    }
  ])
  return (
    <div className="App">
      <Provider store={store}>

      <RouterProvider router = {appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
