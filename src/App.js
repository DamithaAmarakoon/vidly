import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Movies from './components/movies';
import Navbar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/common/loginForm';
import RegisterForm from './components/common/registerForm';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container mt-5'>
          <Switch>
            <Route path='/movies/:id' component={ MovieForm } />
            <Route path='/movies' component={ Movies } />

            <Route path='/login' component={ LoginForm } />
            <Route path='/register' component={ RegisterForm } />
            <Route path='/customers' component={ Customers } />
            <Route path='/rentals' component={ Rentals } />
            <Route path='/not-found' component={ NotFound } />

            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
