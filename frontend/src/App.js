import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import TolkunBuilder from "./containers/TolkunBuilder/TolkunBuilder";
import Layout from "./components/UI/Layout/Layout";
import AlbumsPage from "./containers/AlbumsPage/AlbumsPage";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import AddArtist from "./containers/AddArtist/AddArtist";
import AddAlbum from "./containers/AddAlbum/AddAlbum";
import AddTrack from "./containers/AddTrack/AddTrack";

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
                <Route path="/albums" exact component={AlbumsPage}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/login" component={Login}/>
                <ProtectedRoute
                    isAllowed={user}
                    redirectTo="/"
                    path="/artists/new"
                    component={AddArtist}
                />
                <ProtectedRoute
                    isAllowed={user}
                    redirectTo="/"
                    path="/albums/new"
                    component={AddAlbum}
                />
                <ProtectedRoute
                    isAllowed={user}
                    redirectTo="/"
                    path="/tracks/new"
                    component={AddTrack}
                />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </Layout>
    );
};

export default App;