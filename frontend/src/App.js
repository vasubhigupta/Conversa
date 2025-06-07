import "./App.css"
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/" component={Homepage}  exact />
          <Route path="/chats" component={Chatpage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
