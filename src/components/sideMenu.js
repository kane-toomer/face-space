import React from 'react';
import { Outlet } from 'react-router-dom';

const SideMenu = () => {

    return(
        <>
            <div className="w-60 shadow-md bg-blue-600 px-5 pt-10 fixed left-0 top-0 h-screen" >
                <ul className="relative">
                    <li className="relative">
                        <a href='/dashboard' className="px-3 py-5 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">News Feed</a>
                    </li>
                    <li className="relative mt-5">
                        <a href='/profile' className="px-3 py-5 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Profile</a>
                    </li>
                    <li className="relative mt-5">
                        <a href='/settings' className="px-3 py-5 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >Settings</a>
                    </li>
                </ul>
            </div>

            
        </>
    );
};

export default SideMenu;