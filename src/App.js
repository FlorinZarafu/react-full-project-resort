import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// import pages components
import Home from "./components/pages/home.component";
import Rooms from "./components/pages/rooms.component";
import SingleRoom from "./components/pages/single-room.component";
import Error from "./components/pages/error.component";
import Navbar from "./components/layouts/navbar.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
