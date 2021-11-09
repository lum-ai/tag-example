import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// *** Components ***
import Navbar from 'Modules/Navbar/Navbar';

// *** Pages ***
import Home from 'Pages/Home/Home';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Route component={Navbar} />
                <main>
                    <Switch>
                        <Route component={Home} path='/' exact/>
                    </Switch>
                </main>
            </Router>
        </>
    );
};

export default AppRouter;
