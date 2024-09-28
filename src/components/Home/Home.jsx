import React from 'react';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h6 className='text-6xl text-red-600'>my name is sadik</h6>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;