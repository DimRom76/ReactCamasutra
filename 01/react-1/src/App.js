import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Empty from "./components/Empty/Empty";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={Empty} />
          <Route path="/music" component={Empty} />
          <Route path="/settings" component={Empty} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
