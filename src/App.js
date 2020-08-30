import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Page from './components/page';
import { pages } from './constants/pages'

import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Header pages={pages} />
        <Switch>
          {pages.map((page) => {
            return (
              <Route
                exact
                path={`/${page.url}`}
                key={`${page.title}/${page.url}`}
              >
                <Page page={page} />
              </Route>
            )
          })}
          <Route>
            404 url not found
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
