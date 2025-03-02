
import './App.css';
import MainRoute from './MainRoute/MainRoute';
import { Provider } from 'react-redux';
import store from './Utils/Store';

function App() {
  return (
  <>
  <Provider store={store}>
    <div className="">
      <MainRoute/>    
    </div>
  </Provider>
  </>
  );
}

export default App;
