import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import TolkunBuilder from "./containers/TolkunBuilder/TolkunBuilder";
import Layout from "./components/UI/Layout/Layout";
import Products from "./containers/Products/Products";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import Sales from './containers/Sales/Sales';

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props}/> :
        <Redirect to={redirectTo}/>
};

const App = () => {
    const user = useSelector(state => state.users.user);

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={TolkunBuilder}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
                <Route path="/sales" component={Sales}/>

                {/*<ProtectedRoute*/}
                {/*    isAllowed={user}*/}
                {/*    redirectTo="/"*/}
                {/*    path="/tracks/new"*/}
                {/*    component={AddTrack}*/}
                {/*/>*/}
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </Layout>
    );
};

export default App;