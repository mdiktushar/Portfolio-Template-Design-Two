import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHome from './Shared/Header/NavbarHome/NavbarHome';
import Footer from './Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavbarHome />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;