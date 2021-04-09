import React from "react";
//react router dom
import { Router, Route } from "react-router-dom";

//stream components
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

//Header component
import Header from "./header/Header";
//custom browser history object
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
