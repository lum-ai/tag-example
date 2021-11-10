import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// *** Layouts ***
import BasicLayout from 'Layouts/BasicLayout/BasicLayout';

// *** Pages ***
import Home from 'Pages/Home/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasicLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
