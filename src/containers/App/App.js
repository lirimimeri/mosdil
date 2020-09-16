import React from 'react';
import { Route } from 'react-router-dom'

import classes from './App.module.css';
import Header from '../../components/Header/Header'
import CovidDatas from '../CovidDatas/CovidDatas'
import Footer from '../../components/Footer/Footer'
import Keshilla from '../../components/Keshilla/Keshilla'
import News from '../../components/News/News'

class App extends React.Component {
  
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <CovidDatas />
          <Route path='/' exact component={Keshilla} />
          <Route path='/home' exact component={Keshilla} />
          <Route path='/keshilla' exact component={Keshilla} />
          <Route path='/informata' exact component={News} />
        <Footer />
      </div>
    );
  }
  
}

export default App;
