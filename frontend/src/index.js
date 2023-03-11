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
    <Provider store={store}>
        <TodosContextProvider>
            <Router history={history}>
            <App/>
        </Router>
        </TodosContextProvider>
        
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

