import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TransportInfo from './Components/TransportInfo/TransportInfo';
import TakeRide from './Components/TakeRide/TakeRide';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
          <PrivateRoute  path="/destination/:transportName/:id">
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute  path="/destination">
            <TakeRide></TakeRide>
          </PrivateRoute>
          <PrivateRoute path="/transportInfo/:id/:transportName">
            <TransportInfo></TransportInfo>
          </PrivateRoute>
          
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
