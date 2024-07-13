import './App.css';
import  {Head}  from './Components/Head.js';
import Body from './Components/Body.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
