import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import App from './App';
import history from "./history";
import store from "./store/configureStore";
import './index.css';
import TodosContextProvider from './context/todosContext';


const app = (
      <TodosContextProvider>
    <Provider store={store}>
            <Router history={history}>
            <App/>
        </Router>   
    </Provider>
    </TodosContextProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

