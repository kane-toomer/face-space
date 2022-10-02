import React from 'react';

// COMPONENTS
import NavigationBar from '../navigation/navigation';
import ComposeStatus from '../components/compose';
import Post from '../components/post';


const Dashboard = () => {

    return (
        <>
            {/* Navigation Bar */}
            <NavigationBar />

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