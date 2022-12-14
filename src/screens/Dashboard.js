import React from 'react';

// COMPONENTS
import NavigationBar from '../navigation/navigation';
import ComposeStatus from '../components/compose';
import Post from '../components/post';


const Dashboard = () => {

    return (
        <>

            {/* Side Profile Menu */}
            {/* <div className="w-60 shadow-md bg-blue-600 px-5 pt-10 fixed  " >
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
            </div> */}

            {/* Main Content */}
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-6">

                {/* Compose Status */}
                <ComposeStatus />

                {/* Feed */}
                <Post />
            </main>
        </>
    );
}

export default Dashboard;