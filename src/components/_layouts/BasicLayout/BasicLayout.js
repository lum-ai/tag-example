import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'Modules/Navbar/Navbar';

import './BasicLayout.scss';

// Basic Layout with navigation and router content from children (Outlet)
const BasicLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default BasicLayout;
