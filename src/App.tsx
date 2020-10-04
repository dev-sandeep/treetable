import React, {FC} from 'react';
import Main from './views/Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'
import './App.css';

//creating a redux store and passinng the reducer
const reduxData = createStore(reducer);

const App:FC = () => {
  return (
    <Provider store={reduxData}>
      <div className="App">
          <Main />
      </div>
    </Provider>
  );
}

export default App;