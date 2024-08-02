import './App.css';
import  {Head}  from './Components/Head.js';
import Body from './Components/Body.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer.js';
import WatchPage from './Components/WatchPage.js';
import SearchResults from './Components/SearchResults.js';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    },{
      path: "/results",
      element: <SearchResults />
    },
  ]
}]);

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter}>
      {/* <Head />  */}
      <Body />
      </RouterProvider>
    </div>
    </Provider>
  
  );
}

export default App;
