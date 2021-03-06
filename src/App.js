import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Page from './components/page';
import { pages } from './constants/pages'

import './App.css';


import Header from './components/header';
import Footer from './components/footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas)

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
