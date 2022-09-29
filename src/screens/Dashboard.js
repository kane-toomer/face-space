import React from 'react';

// COMPONENTS
import NavigationBar from '../navigation/navigation';
import ComposeStatus from '../components/compose';


const Dashboard = () => {

    return (
        <>
            {/* Header */}
            <NavigationBar />

            {/* Main Content */}
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-6">

                {/* Compose Status */}
                <ComposeStatus />

                {/* Feed */}
                {/* <div className="px-4 py-6 sm:px-0 flex justify-center">
                    <div className="h-screen w-full lg:w-6/12 rounded-lg border-4 border-dashed border-gray-200" />
                </div> */}
            </main>
        </>
    );
}

export default Dashboard;