import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import Provider from 'react-redux/es/components/Provider'
import LandingView from 'views/landing-view'
import Header from 'components/header';
import AboutView from 'views/about-view';

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history}>
                    <div className="app-wrapper">
                        <Header />

                        <Route exact path='/' component={LandingView} />
                        <Route exact path='/about' component={AboutView} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
