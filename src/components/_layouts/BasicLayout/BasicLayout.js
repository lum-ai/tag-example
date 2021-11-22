import React from 'react';
import { Outlet } from 'react-router-dom';

// import Navbar from 'Modules/Navbar/Navbar';

import './BasicLayout.scss';

// Basic Layout with navigation and router content from children (Outlet)
const BasicLayout = () => {
    return (
        <div className="layout-basic">
            {/*<Navbar />*/}
            <Outlet />
        </div>
    );
};

export default BasicLayout;
